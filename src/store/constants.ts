import {IProductListState} from './modules/product-list/product-list.constant';
import {IPhoneListState} from './modules/phone-list/phone-list.constant';

export interface IState {
  productList: IProductListState;
  phoneList: IPhoneListState;
}
