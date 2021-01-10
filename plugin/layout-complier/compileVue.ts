import { compileTemplate } from "@vue/compiler-sfc" 

type PreprocessLang = "less" | "sass" | "scss" | "styl" | "stylus";

/**
 * 提交文本中script部分
 * @param content
 */
export function stripScript(content: string):string {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ""
}

/**
 * 提交文本中style部分
 * @param content
 */
export function stripStyle(content: string): {
  lang: PreprocessLang,
  code: string
} {
  const result = content.match(/<(style)\s*(lang="(less|sass|scss|styl|stylus)")?>([\s\S]+)<\/\1>/)
  return {
    lang: (result && result[3] ? result[3].trim() : "") as PreprocessLang,
    code: (result && result[4] ? result[4].trim() : "") 
  }
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
export function stripTemplate(content: string):string {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim()
}

function pad(source: string) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join("\n")
}

function _compileTemplate(path: string, source: string) {
  const templateReplaceRegex = /<template>([\s\S]+)<\/template>/g

  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  if (templateReplaceRegex.test(source)) {
    source = source.replace(templateReplaceRegex, "$1")
  }
  const compiled = compileTemplate({
    source: source,
    filename: path,
    id: path,
    transformAssetUrls: false,
  })
  
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join("\n") +
        "\n",
    )
  }

  let template = compiled.code.replace("export function render", "function render")
  return template
}

function _compileScript(path: string, script: string) {
  script = script.trim()
  if (script) {
    script = script
      .replace(/export\s+default/, "const _sfc_main =")
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
  } else {
    script = "const _sfc_main = {}"
  }
  return script
}

/**
 * 生成layout编译器
*/
export function genLayoutCompiler(
  path: string,
  template: string,
  script: string) {
    
  template = _compileTemplate(path, template)
  script = _compileScript(path, script)

  // 返回渲染函数
  return [
    `import { updateStyle, removeStyle } from "/@vite/client";`,
    `${template}`, // render
    `${script}`, // scriptExport
    `_sfc_main.render = render`,
    `export default _sfc_main;`
  ].join("\n")
  
}
