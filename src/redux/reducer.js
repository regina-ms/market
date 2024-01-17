import {
    SET_IMAGE,
    SET_TITLE,
    SET_PRICE,
    SET_DISCOUNT,
    SAVE_PRODUCT,
    SET_DIS_PRICE,
} from "./actions"


/** {
            id: 65465,
            image: "https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png",
            title: "title",
            price: 1000,
            discount: null,
            dis_price: null
        },
       */

const initialState = {
    products: [],
    product: {
        id: null,
        image: "",
        title: "",
        price: null,
        discount: null,
        dis_price: null
    }

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                product: {
                    ...state.product,
                    image: action.payload
                }
            }
        case SET_TITLE:
            return {
                ...state,
                product: {
                    ...state.product,
                    title: action.payload
                }
            }
        case SET_PRICE:
            return {
                ...state,
                product: {
                    ...state.product,
                    price: action.payload
                }
            }

        case SET_DISCOUNT: {
            return {
                ...state,
                product: {
                    ...state.product,
                    discount: action.payload,

                }
            }
        }

        case SET_DIS_PRICE: {
            return {
                ...state,
                product: {
                    ...state.product,
                    dis_price: action.payload
                }
            }
        }

        case SAVE_PRODUCT: {
            return {
                ...state,
                product: {
                    id: null,
                    image: "",
                    title: "",
                    price: null,
                    discount: null,
                    dis_price: null
                },
                products: action.payload
            }
        }

        default:
            return state
    }

}