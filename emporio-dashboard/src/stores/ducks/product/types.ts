export enum ProductActions {
    GET_LIST_REQUEST = '@products/GET_LIST_REQUEST',
    GET_LIST_SUCCESS = '@products/GET_LIST_SUCCESS',
    GET_LIST_FAILURE = '@products/GET_LIST_FAILURE',

    NEW_PRODUCT_REQUEST = '@product/NEW_PRODUCT_REQUEST',
    NEW_PRODUCT_SUCCESS = '@product/NEW_PRODUCT_SUCCESS',
    NEW_PRODUCT_FAILURE = '@product/NEW_PRODUCT_FAILURE',

    DELETE_PRODUCT_REQUEST = '@product/DELETE_PRODUCT_REQUEST',
    DELETE_PRODUCT_SUCCESS = '@product/DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAILURE = '@product/DELETE_PRODUCT_FAILURE',
}
export interface ProductArray {
    title: string,
    description: string,
    price: string,
    image: string
}
export interface ProductState {
    productList: ProductArray[],
    deletedProductId: number | null
}