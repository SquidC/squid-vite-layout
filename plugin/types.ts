/**
 * 用于调用layout组件
 * <layoutConfig.layout :config="layoutConfig" />
*/
export interface LayoutConfig<ColumsType, ActionType, ServerAPI> {
    /**
     * layout组件名称
    */
    layout: string;
    /**
     * 标题
    */
    title: string;
    /**
     * 请求api的url
    */
    api: ServerAPI;
    /**
     * 页面字段配置
    */
    columns: ColumsType;
    /**
     * layout所有事件hooks
    */
    handleAction: (mode: ActionType, raw: unknown, ids?: Array<number|string>) => void;
}