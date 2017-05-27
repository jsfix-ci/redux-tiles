export interface Tile {
  moduleName: string|string[],
  action: {
    (): any,
    (promises: PromiseObject): any,
    async: boolean|undefined,
    reset: Function
  },
  reducer: Function,
  selectors: {
    get: Function,
    getAll: Function,
  },
  constants: {
    [key:string]: string
  }
}

export interface AsyncActionTypes {
  type: string|string[],
  START: string,
  SUCCESS: string,
  FAILURE: string,
  fn: Function,
  caching?: boolean,
  nesting?: Function|undefined,
  selectors: {
    get: Function
  }
}

export interface SyncActionTypes {
  TYPE: string,
  fn: Function,
  nesting: ((params: any) => string[])|undefined
}

export interface PromiseObject {
  [key:string]: Promise<any>|undefined
}

export interface CreateSelectorsTypes {
  moduleName: string|string[]
  nesting: ((params: any) => string[])|undefined
}