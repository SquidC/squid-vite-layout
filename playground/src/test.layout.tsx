import { LayoutConfig } from "../../plugin/types"

const pageConfig: LayoutConfig = {
  layout: "TestLayout",
  // crud api
  add: "https://localhost/add",
  del: "https://localhost/del",
  alt: "https://localhost/alt",
  sel: "https://localhost/sel",
  // 处理按钮事件
  handleClick: (mode, raw, ids) => {

  },
  // 页面配置
  config: [
    {
      label: "hello",
      mode: ["add", "table"],
      sort: 1,
      type: "input",
      render: (val: unknown) => {
        return <div>{val}</div>
      }
    }
  ]
}

export default pageConfig;