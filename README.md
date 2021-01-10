# squid-vite-layout

layout需要使用插件提供的[layout hooks](./plugin/types.ts)

## 使用

> vite.config.ts

vueJsx预编译jsx/tsx配置文件

```ts
import vueLayout from "@squidc/vite-layout"
import vueJsx from "@vitejs/plugin-vue-jsx"
export default {
  plugins: [
    vueLayout(),
    vueJsx(),
  ],
}
```

> main.ts

挂载全局layout组件
该插件使用全局组件生成.vue文件渲染

```ts
import TestLayout from "./testLayout.vue"
const app = createApp(App)
app.component("TestLayout", TestLayout)
app.mount("#app")
```