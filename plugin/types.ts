type ActionType = 
    | "add"
    | "del"
    | "alt"
    | "sel"
    | "flush"
    | "submit"
    | "cancel"

/**
 * 用于调用layout组件
 * <layoutConfig.layout :config="layoutConfig" />
*/
export interface LayoutConfig {
    /**
     * layout组件名称
    */
    layout: string;
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
    /**
     * layout所有事件hooks
    */
    handleClick: (mode: ActionType, raw: unknown, ids: Array<number|string>) => void;
    /**
     * 页面所有配置
    */
    config: Array<any>;
}