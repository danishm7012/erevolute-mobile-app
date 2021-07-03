import {
  CREATE_CONTACT,
  DELETE_CONTACT_DATA,
  FETCH_CONTACT_FORM_DATA,
} from '../action/contactAction'

import Contact from '../../model/Contact'

const initialState = {
  availableUsers: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_FORM_DATA:
      return { availableUsers: action.contactData }
    case CREATE_CONTACT:
      const newContactUser = new Contact(
        action.contactData.id,
        action.contactData.title,
        action.contactData.phoneNum,
        action.contactData.email,
        action.contactData.message
      )
      return {
        ...state,
        availableUsers: state.availableUsers.concat(newContactUser),
      }
    // case UPDATE_PRODUCT:
    //   const productIndex = state.userProducts.findIndex(
    //     prod => prod.id === action.pid
    //   );
    //   const updatedProduct = new Product(
    //     action.pid,
    //     state.userProducts[productIndex].ownerId,
    //     action.productData.title,
    //     action.productData.imageUrl,
    //     action.productData.description,
    //     state.userProducts[productIndex].price
    //   );
    //   const updatedUserProducts = [...state.userProducts];
    //   updatedUserProducts[productIndex] = updatedProduct;
    //   const availableProductIndex = state.availableProducts.findIndex(
    //     prod => prod.id === action.pid
    //   );
    //   const updatedAvailableProducts = [...state.availableProducts];
    //   updatedAvailableProducts[availableProductIndex] = updatedProduct;
    //   return {
    //     ...state,
    //     availableProducts: updatedAvailableProducts,
    //     userProducts: updatedUserProducts
    //   };
    case DELETE_CONTACT_DATA:
      return {
        // ...state,
        // userProducts: state.userProducts.filter(
        //   product => product.id !== action.pid
        // ),
        ...state,
        availableUsers: state.availableUsers.filter(
          (contactUser) => contactUser.id !== action.pid
        ),
      }
  }
  return state
}
