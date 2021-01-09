import { UserConfig } from "vite"
import { resolve } from "path"
import vueMd from "../plugin"
import vuePlugins from "@vitejs/plugin-vue"

function pathResolve(dir: string) {
  return resolve(__dirname, dir)
}

const viteConfig: UserConfig = {
  alias: {
    "@": pathResolve("./src/"),
  },
  plugins: [
    vuePlugins(),
    vueMd(),
  ],
  optimizeDeps: {
  },
}

export default viteConfig
