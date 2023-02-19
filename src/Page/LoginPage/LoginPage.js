import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { postLogin } from "./../../service/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "./../../redux/constant/userConstant";
import { userLocalService } from "../../service/localService";
import Lottie from "lottie-react";
import bg_animate from "../../assets/42623-merry-christmas.json"
import { setUserAction, setUserActionService } from './../../redux/Action/userAction';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    postLogin(values)
      .then((res) => {
        dispatch(setUserAction(res.data.content));
        setTimeout(() => {
          navigate("/");
        }, 1000);
        message.success("Đăng nhập thành công");
        userLocalService.set(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };

  // OnFinishReduxThunk
  const onFinishReduxThunk = (values) => { 
    const handleNavigate = () => {
      setTimeout(() => {
        navigate("/")
      }, 1000)
    }

    dispatch(setUserActionService(values,handleNavigate));
  }

  const onFinishFailed = (errorInfo) => {
    
  };
  return (
    <div className="bg-blue-600 h-screen w-screen flex items-center justify-center">
      <div className="container p-5 bg-white rounded flex items-center object-cover">
        <div className="w-1/2 flex justify-center">
          <Lottie animationData={bg_animate} className = "w-2/3 h-80" loop={true} />
        </div>
        <div className="w-1/2">
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="text-center"
              wrapperCol={{
                span: 24,
              }}
            >
              <Button className="bg-blue-500 text-black" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
