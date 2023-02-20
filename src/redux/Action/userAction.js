import { SET_USER_LOGIN } from "../constant/userConstant";
import { postLogin } from "./../../service/userService";
// import { message } from "antd";
import swal from "sweetalert";

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
        // message.success("ĐĂNG NHẬP THÀNH CÔNG");
        swal({
          title: "Successfully Login",
          icon: "success",
          timer: 2000,
          button: false,
        });

        dispatch({
          type: SET_USER_LOGIN,
          payload: values,
        });
        onSuccess();
      })
      .catch((err) => {
        // message.error("ĐĂNG NHẬP THẤT BẠI");
        swal({
          title: "Faily Login",
          icon: "warning",
          text: "An error occurred, please return to the homepage or try again",
          timer: 2000,
          button: false,
        });
      });
  };
};
