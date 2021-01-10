import { createApp } from "vue"
import App from "./App.vue"
import TestLayout from "./testLayout.vue"

const app = createApp(App)
app.component("TestLayout", TestLayout)
app.mount("#app")

export default app