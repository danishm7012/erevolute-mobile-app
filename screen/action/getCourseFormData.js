import GetCourseFormUser from '../../model/GetCourseModel'

export const DELETE_ENROLL_COURSE_DATA = 'DELETE_ENROLL_COURSE_DATA'
export const CREATE_ENROLL_USER_COURSE = 'CREATE_ENROLL_USER_COURSE'
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FETCH_ENROLL_COURSE_FORM_DATA = 'FETCH_ENROLL_COURSE_FORM_DATA'

export const deleteEnrolledCourseUser = (enrollUserId) => {
  console.log(enrollUserId)

  return async (dispatch, getState) => {
    const token = getState().auth.token
    await fetch(
      `https://erevolute-397af-default-rtdb.firebaseio.com/enrollCourseFormUser/${enrollUserId}.json?auth=${token}`,
      {
        method: 'DELETE',
      }
    )
    dispatch({ type: DELETE_ENROLL_COURSE_DATA, pid: enrollUserId })
  }
}

export const fetchEnrollUserData = () => {
  return async (dispatch, getState) => {
    // console.log(getState())
    const token = getState().auth.token
    // any async code you want!
    try {
      const response = await fetch(
        `https://erevolute-397af-default-rtdb.firebaseio.com/enrollCourseFormUser.json?auth=${token}`
      )

      if (!response.ok) {
        throw new Error('Something went wrong!!')
      }
      const resData = await response.json()
      console.log(resData)
      const loadedData = []
      for (const key in resData) {
        loadedData.push(
          new GetCourseFormUser(
            key,
            resData[key].name,
            resData[key].phoneNum,
            resData[key].email,
            resData[key].address,
            resData[key].imageURI,
            resData[key].selectedValue
          )
        )
      }
      dispatch({
        type: FETCH_ENROLL_COURSE_FORM_DATA,
        enrollUserData: loadedData,
      })
    } catch (err) {
      throw err
    }
  }
}
export const createEnrollCourseForm = (
  name,
  phoneNum,
  email,
  address,
  imageURI,
  selectedValue
) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token
    const response = await fetch(
      `https://erevolute-397af-default-rtdb.firebaseio.com/enrollCourseFormUser.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNum,
          email,
          address,
          imageURI,
          selectedValue,
        }),
      }
    )

    const resData = await response.json()
    // const errorResData = await response.json()
    console.log(resData)
    dispatch({
      type: CREATE_ENROLL_USER_COURSE,
      getCourseData: {
        id: resData.name,
        name,
        phoneNum,
        email,
        address,
        imageURI,
        selectedValue,
      },
    })
  }
}

// export const updateProduct = (id, title, description, imageUrl) => {
//   return {
//     type: UPDATE_PRODUCT,
//     pid: id,
//     productData: {
//       title,
//       description,
//       imageUrl
//     }
//   };
// };
