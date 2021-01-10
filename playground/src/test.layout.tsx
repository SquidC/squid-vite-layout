import { LayoutConfig } from "../../plugin/types"

const pageConfig: LayoutConfig<any> = {
  layout: "TestLayout",
  title: "hello",
  tools: ["add", "refresh"], 
  rawTools: ["edit", "view", "delete"], 
  rawToolsPostion: "body", 
  pageLayout: ["prev", "jumper", "total", "next"],
  // crud api
  api: {
    add: "https://localhost/add",
    del: "https://localhost/del",
    alt: "https://localhost/alt",
    sel: "https://localhost/sel",
  },
  // 处理按钮事件
  handleAction: (mode, raw, ids) => {

  },
  // 页面配置
  columns: [
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