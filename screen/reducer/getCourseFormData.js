import {
  CREATE_ENROLL_USER_COURSE,
  DELETE_ENROLL_COURSE_DATA,
  FETCH_ENROLL_COURSE_FORM_DATA,
} from '../action/getCourseFormData'

import GetCourseFormUser from '../../model/GetCourseModel'

const initialState = {
  availableEnrollUsers: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENROLL_COURSE_FORM_DATA:
      return { availableEnrollUsers: action.enrollUserData }
    case CREATE_ENROLL_USER_COURSE:
      const newEnrollUser = new GetCourseFormUser(
        action.getCourseData.id,

        action.getCourseData.name,
        action.getCourseData.phoneNum,
        action.getCourseData.email,
        action.getCourseData.address,

        action.getCourseData.imageURI,
        action.getCourseData.selectedValue
      )
      return {
        ...state,
        availableEnrollUsers: state.availableEnrollUsers.concat(newEnrollUser),
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
    case DELETE_ENROLL_COURSE_DATA:
      return {
        ...state,
        availableEnrollUsers: state.availableEnrollUsers.filter(
          (enrollUser) => enrollUser.id !== action.pid
        ),
      }
  }
  return state
}
