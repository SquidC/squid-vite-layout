import { UserConfig } from "vite"
import { resolve } from "path"
import vueLayout from "../src"
import vuePlugins from "@vitejs/plugin-vue"
import vueJsxPlugins from "@vitejs/plugin-vue-jsx"

function pathResolve(dir: string) {
  return resolve(__dirname, dir)
}

const viteConfig: UserConfig = {
  alias: {
    "@": pathResolve("./src/"),
  },
  plugins: [
    vuePlugins(),
    vueLayout(),
    vueJsxPlugins(),
  ]
}

export default viteConfig
