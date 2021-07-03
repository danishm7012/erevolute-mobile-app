import Contact from '../../model/Contact'

export const DELETE_CONTACT_DATA = 'DELETE_CONTACT_DATA'
export const CREATE_CONTACT = 'CREATE_CONTACT'
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FETCH_CONTACT_FORM_DATA = 'FETCH_CONTACT_FORM_DATA'

export const deleteProduct = (contactUserIndex) => {
  console.log(contactUserIndex)

  return async (dispatch, getState) => {
    const token = getState().auth.token
    await fetch(
      `https://erevolute-397af-default-rtdb.firebaseio.com/contact/${contactUserIndex}.json?auth=${token}`,
      {
        method: 'DELETE',
      }
    )
    dispatch({ type: DELETE_CONTACT_DATA, pid: contactUserIndex })
  }
}

export const fetchContactFormData = () => {
  return async (dispatch, getState) => {
    // console.log(getState())
    const token = getState().auth.token
    // any async code you want!
    try {
      const response = await fetch(
        `https://erevolute-397af-default-rtdb.firebaseio.com/contact.json?auth=${token}`
      )

      if (!response.ok) {
        throw new Error('Something went wrong!!')
      }
      const resData = await response.json()
      console.log(resData)
      const loadedData = []
      for (const key in resData) {
        loadedData.push(
          new Contact(
            key,
            'ul',
            resData[key].name,
            resData[key].phoneNum,
            resData[key].message,
            resData[key].email
          )
        )
      }
      dispatch({ type: FETCH_CONTACT_FORM_DATA, contactData: loadedData })
    } catch (err) {
      throw err
    }
  }
}
export const createContactForm = (name, phoneNum, email, message) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token
    const response = await fetch(
      `https://erevolute-397af-default-rtdb.firebaseio.com/contact.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNum,
          email,
          message,
        }),
      }
    )

    const resData = await response.json()
    // const errorResData = await response.json()
    console.log(resData)
    dispatch({
      type: CREATE_CONTACT,
      contactData: {
        id: resData.name,
        name,
        phoneNum,
        email,
        message,
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
