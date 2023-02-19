import { userLocalService } from '../../service/localService';
import { SET_USER_LOGIN } from './../constant/userConstant';

const initialState = {
    user: userLocalService.get()
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_USER_LOGIN:
    return { ...state, user: payload}

  default:
    return state
  }
}
