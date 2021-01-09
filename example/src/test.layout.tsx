
type LayoutAction = "add" | "edit" | "select" | "alter" | "reflush"
interface LayoutConfig {
    add: String;
    del: String;
    alt: String;
    sel: String;
    handleClick: (mode: LayoutAction, raw: String, ids: Array<number|string>) => void;
    config: Array<any>;
}

const pageConfig: LayoutConfig = {
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