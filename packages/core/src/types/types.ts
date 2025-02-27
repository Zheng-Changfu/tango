import { JSXElement } from '@babel/types';

export type SimulatorMode = 'desktop' | 'tablet' | 'phone';

/**
 * 文件类型枚举
 */
export enum FileType {
  // js 文件
  Module = 'module',
  StoreEntryModule = 'storeEntryModule',
  RouteModule = 'routeModule',
  BlockEntryModule = 'blockEntryModule',
  ServiceModule = 'serviceModule',
  StoreModule = 'storeModule',

  JsxViewModule = 'jsxViewModule',
  JsonViewModule = 'jsonViewModule',

  // 非 js 文件
  PackageJson = 'packageJson',
  TangoConfigJson = 'tangoConfigJson',
  AppJson = 'appJson',
  File = 'file',
  Json = 'json',
  Less = 'less',
  Scss = 'scss',
}

export type FileItemType = {
  /**
   * 文件名
   */
  filename: string;
  /**
   * 原始代码
   */
  code: string;
  /**
   * 文件类型
   */
  type?: FileType;
};

export type ModulePropsType = FileItemType;

/**
 * 视图节点数据类型
 */
export type TangoViewNodeDataType<T = JSXElement> = {
  /**
   * 节点 ID
   */
  id: string;
  /**
   * 父亲节点的 ID
   */
  parentId: string;
  /**
   * 组件名
   */
  component: string;
  /**
   * 组件的属性集合
   */
  props?: Record<string, any>;
  /**
   * 原始的 ast 节点
   */
  rawNode?: T;
  /**
   * 子节点列表
   */
  children?: Array<TangoViewNodeDataType<T>>;
};

/**
 * 模块导入的参数类型
 */
export type ImportDeclarationPayloadType = {
  defaultSpecifier?: string;
  specifiers?: string[];
  sourcePath: string;
};

export type ClassPropertyNodeType = {
  reference: string;
  propertyName: string;
  propertyBody: string;
};

/**
 * 服务函数参数类型
 */
export type ServiceFunctionPayloadType = {
  [key: string]: any;
  /**
   * 服务函数名
   */
  name: string;
};

/**
 * Store 属性类型
 */
export type StorePropertyType = {
  /**
   * 属性名
   */
  name: string;
  /**
   * 对应的源码
   */
  code?: string;
  /**
   * codemirror 中对应的类型
   * @see https://codemirror.net/6/docs/ref/#autocomplete
   */
  type?:
    | 'class'
    | 'constant'
    | 'enum'
    | 'function'
    | 'interface'
    | 'keyword'
    | 'method'
    | 'namespace'
    | 'property'
    | 'text'
    | 'type'
    | 'variable'
    | 'object';
};

/*
 * 服务函数的操作类型
 */
export enum ESFOperationType {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
}

/**
 * 服务函数数据源类型
 */
export enum ESFDataSourceType {
  OvermindX = 'ox',
  Custom = 'custom',
}

/**
 * 服务函数 HTTP Type
 * 云音乐网关只支持 get 和 post
 */
export enum ESFHTTPMethodType {
  GET = 'GET',
  // PUT = 'PUT',
  POST = 'POST',
  // PATCH = 'PATCH',
  // DELETE = 'DELETE',
}

/**
 * requestType
 * headers: Content-Type
 */
export enum ESFHTTRequestType {
  'application/json' = 'json',
  'application/x-www-form-urlencoded' = 'x-www-form-urlencoded',
}

/**
 * 路由解析数据
 */
export type RouteDataType = {
  /**
   * 路由
   */
  path: string;
  /**
   * 组件名
   */
  component?: string;
  /**
   * 导入路径
   */
  importPath?: string;
  [key: string]: any;
};

/**
 * 页面配置数据
 */
export type PageConfigType = {
  /**
   * 路由
   */
  path: string;
  /**
   * 父菜单路由
   */
  parentPath?: string;
  /**
   * 页面标题
   */
  name?: string;
  /**
   * PMS 权限码
   */
  privilegeCode?: string;
};

/**
 * 项目数据
 */
export type ProjectDataType = {
  /**
   * 页面列表
   */
  pages: Array<{
    title?: string;
    filename: string;
    path?: string;
    includes?: { variables: string[] };
  }>;
  /**
   * 模型列表
   */
  stores: {
    [key: string]: {
      filename: string;
    };
  };
  /**
   * 服务列表
   */
  services: {
    [key: string]: {
      filename: string;
      functions: string[];
    };
  };
};

export type InsertChildPositionType = 'first' | 'last';

/**
 * tango.config.json 中 packages 定义
 */
export type PackageConfigType = {
  /**
   * 依赖类型
   */
  type?: 'baseDependency' | 'bizDependency' | 'dependency';
  /**
   * 版本号
   */
  version?: string;
  /**
   * umd 资源全局变量名
   */
  library?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 基础包 umd 资源
   */
  resources?: string[];
  /**
   * 设计态 umd 资源
   */
  designerResources?: string[];
};
