import { SET_USER_LOGIN } from "../constant/userConstant";
import { postLogin } from "./../../service/userService";
import { message } from "antd";

export const setUserAction = (value) => {
  return {
    type: SET_USER_LOGIN,
    payload: value,
  };
};

// Values Thông tin từ form
export const setUserActionService = (values, onSuccess) => {
  return (dispatch) => {
    postLogin(values)
      .then((res) => {
        message.success("ĐĂNG NHẬP THÀNH CÔNG");
        dispatch({
          type: SET_USER_LOGIN,
          payload: values,
        });
        onSuccess();
      })
      .catch((err) => {
        message.error("ĐĂNG NHẬP THẤT BẠI");
      });
  };
};
