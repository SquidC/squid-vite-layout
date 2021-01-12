import { UserConfig } from "vite"
import { resolve } from "path"
import vueLayout from "../plugin"
import vuePlugins from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

function pathResolve(dir: string) {
  return resolve(__dirname, dir)
}

const viteConfig: UserConfig = {
  alias: {
    "@": pathResolve("./src/"),
  },
  plugins: [
    vueLayout(),
    vueJsx(),
    vuePlugins(),
  ],
  optimizeDeps: {
  },
}

export default viteConfig
