import axios from 'axios'
import actiontypes from '../actiontypes'


export const getUser = id => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:8081/api/users/${id}`)
    dispatch(setAdminUser(res.data))
    console.log(res.data)
  }
}

export const setAdminUser = (user) => {
  return {
    type: actiontypes().admin.setAdminUser,
    payload: user
  }
}

export const getUsers = () => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:8081/api/users/`)
    dispatch(setAdminUsers(res.data))
  }
}
export const setAdminUsers = (users) => {
  // console.log(users)
  return {
    type: actiontypes().admin.setAdminUsers,
    payload: users
  }
}

export const deleteUser = id => {
  return async dispatch => {
    await axios.delete(`http://localhost:8081/api/users/${id}`)
    dispatch(getUsers())
  }
}
// export const removeUser = () => {
//   return {
    
//   }
// }