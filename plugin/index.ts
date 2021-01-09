import { Plugin } from "vite"
import { layoutCompiler } from "./layout-complier"

function parseId(id: string) {
  const index = id.indexOf("?")
  if (index < 0)
    return id

  else
    return id.slice(0, index)
}

export default function createVueMarkDownPlugin(): Plugin {
  return {
    name: "vite-layout-compiler",
    // 使用vuejsx 编译之后才使用这个插件编译
    enforce: "post",
    transform(raw, id) {
      const path = parseId(id)
      if (!path.endsWith(".layout.tsx")){
        return raw
      }
      return layoutCompiler(raw, path)
    },
  }
}
