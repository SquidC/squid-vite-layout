// layout 提供的所有用户接口事件
type ActionType = 
    | "add"
    | "edit"
    | "view"
    | "delete"
    | "more"
    | "activate"
    | "forbidden"
    | "refresh"
    | "export"
    | "search"
    | "compose"
    | "prev"
    | "next"
    | "pageSize"
    | "page"

// 工具栏
type Tools = 
    | "refresh"
    | "add"

// 行工具栏
type RawTools = 
    | "edit"
    | "view"
    | "delete"

// 分页
type Pagination = 
    |"prev"
    | "pager"
    | "next"
    | "jumper"
    | "->"
    | "total"

// 行工具栏位置
type RawToolsPostion = 
    | "header"
    | "body"


/**
 * 服务器api
*/
interface ServerAPI {
    /**
     * 添加数据url
    */
   add: string;
   /**
    * 删除数据url
   */
   del: string;
   /**
    * 修改数据url
   */
   alt: string;
   /**
    * 查询数据url
   */
   sel: string;
}

/**
 * 用于调用layout组件
 * <layoutConfig.layout :config="layoutConfig" />
*/
export interface LayoutConfig<T> {
    /**
     * layout组件名称
    */
    layout: string;
    /**
     * 标题
    */
    title: string;
    /**
     * 页面字段配置
    */
    columns: Array<T>;
    /**
     * 页面工具栏配置
    */
    tools: Array<Tools>;
    /**
     * 请求api的url
    */
    api: ServerAPI;
    /**
     * 行工具栏配置
    */
    rawTools: Array<RawTools>;
    /**
     * 工具类位置
    */
    rawToolsPostion: RawToolsPostion;
    /**
     * 分页器
    */
    pageLayout: Array<Pagination>;
    /**
     * layout所有事件hooks
    */
    handleAction: (mode: ActionType, raw: unknown, ids?: Array<number|string>) => void;
}