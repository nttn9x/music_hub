export interface IProductListState {
  firstLoad: boolean;
  loading: boolean;
  data: any;
  params: any;
}

export enum Types {
  SET_PRODUCTS = '[PRODUCT LIST] SET_PRODUCTS',
  LOAD_PRODUCTS = '[PRODUCT LIST] LOAD_PRODUCTS',
  SET_LOADING = '[PRODUCT LIST] SET_LOADING',
}

export interface LoadProductsAction {
  type: typeof Types.LOAD_PRODUCTS;
}

export interface SetProductsAction {
  type: typeof Types.SET_PRODUCTS;
  payload: {products: any[]; count: number};
}

export interface SetLoadingAction {
  type: typeof Types.SET_LOADING;
  payload: {loading: boolean};
}

export type Actions = SetLoadingAction | SetProductsAction | LoadProductsAction;
