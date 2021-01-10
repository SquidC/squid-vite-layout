import layoutWrap from "./useLayout"
import { genLayoutCompiler, stripScript, stripTemplate } from "./compileVue"

interface imports {
  code: string;
  imports: Record<string, Array<string>>;
}

function getImport(code: string): imports {
  // 提取import
  const imports: Record<string, Array<string>> = {}
  code = code.replace(/import {(.*)} from ['"](.*)['"];?/g, (s, s1, s2) => {
    const pkgs = s1.split(",").map((s: string) => s.trim());
    if(imports[s2]){
      imports[s2] = imports[s2].concat(pkgs)
    } else {
      imports[s2] = pkgs
    }
    return ""
  })
  return {
    code,
    imports,
  }
}

function rewriteImports(imports: imports["imports"]) {
  return Object.keys(imports).map(k => {
    const pkg = Array.from(new Set(imports[k])).join(", ")
    return `import {${pkg}} from "${k}";`
  }).join("\n")
}

/**
 * markdown 解析器 输入文件路径 解释成demo-vue组件 生成浏览器可执行js
 * @param raw 编译出来的tsx配置
 * @param path 文件路径
 * @returns 返回处理后的文件内容
 */
export function layoutCompiler(raw: string, path: string): string {
  // 变成函数返回config
  raw = `(function() {${raw.replace("export default", "return")}})()`
  // 生成vue文件
  const layout = layoutWrap("TestLayout", raw)
  // 编译vue
  let compileVue = getImport(
    genLayoutCompiler(
      path,
      stripTemplate(layout),
      stripScript(layout),
    )
  )

  return rewriteImports(compileVue.imports)+compileVue.code
}
