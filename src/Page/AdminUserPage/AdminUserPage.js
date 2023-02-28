import React, { useState, useEffect } from "react";
import {
  deleteUser,
  getUserList,
  getUserListPagination,
  postUser,
} from "./../../service/adminService";
import {
  Button,
  message,
  Space,
  Table,
  Tag,
  Pagination,
  Form,
  Input,
} from "antd";
import { userColumn } from "./utils";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import { userLocalService } from "../../service/localService";
import Logo from "../../Component/Logo/Logo";
import { setAdminInfo } from "../../Redux_Toolkit/userSlice";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

function AdminUserPage() {
  const [userArr, setUserArr] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const admin = useSelector((state) => {
    return state.userSlice.admin;
  });

  const handleLogout = () => {
    userLocalService.remove();
    window.location.reload();
  };

  useEffect(() => {
    let handleRemoveUser = (id) => {
      deleteUser(id)
        .then((res) => {
          // message.success("Xóa Thành Công");
          swal({
            title: "Successfully Deleted",
            icon: "success",
            timer: 2000,
            button: false,
          });
          fetchUserList();
        })
        .catch((err) => {
          // message.error(err.response.data);
          swal({
            title: "Faily Deleted",
            icon: "warning",
            text: "An error occurred, please try again",
            timer: 2000,
            button: false,
          });
        });
    };
    let handleEditUser = () => {
      return (
        <>
          {showEdit ? (
            <Form
              name="form_item_path"
              layout="vertical"
              onFinish={onFinshEdit}
              className="bg-neutral-700 z-20 p-16 rounded-lg"
            >
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem name="name" label="Account">
                    <Input className="p-2" />
                  </MyFormItem>
                  <MyFormItem name="email" label="Email">
                    <Input className="p-2" />
                  </MyFormItem>
                  <MyFormItem name="password" label="Password">
                    <Input className="p-2" />
                  </MyFormItem>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <div className="flex justify-center">
                {" "}
                <Button htmlType="submit" className="mr-2">
                  Add
                </Button>
                <Button
                  htmlType="submit"
                  onClick={() => {
                    setShowEdit(!showEdit);
                  }}
                >
                  Close
                </Button>
              </div>
            </Form>
          ) : null}
        </>
      );
    };
    let fetchUserList = () => {
      getUserList()
        .then((res) => {
          let userList = res.data.results.map((item) => {
            return {
              ...item,
              key: item.id,
              action: (
                <>
                  <Button
                    onClick={() => {
                      handleRemoveUser(item.id);
                    }}
                    type="primary"
                    danger
                  >
                    Delete
                  </Button>
                  {/* <Button type="primary" className="bg-blue-500 ml-2">
                    Edit
                  </Button> */}
                </>
              ),
            };
          });

          setUserArr(userList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);
  const onFinish = async (value) => {
    const rs = await postUser(value);
    console.log(rs);
  };

  const onFinshEdit = () => {};

  return (
    <div>
      <nav className="flex justify-end items-center py-3 pr-4">
        <span>{admin?.name}</span>

        <button
          onClick={handleLogout}
          className="border-2 rounded border-zinc-600 px-4 py-2 text-sm ml-5"
        >
          Log Out
        </button>
      </nav>

      <Button
        type="primary"
        className="bg-green-500 ml-2 flex justify-end relative"
        onClick={() => {
          setShow(!show);
        }}
      >
        Add user
      </Button>

      {show ? (
        <Form
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
          className="bg-neutral-400 absolute left-1/4 right-2/4 z-10 p-16 rounded-lg"
        >
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="name" label="Account">
                <Input className="p-2" />
              </MyFormItem>
              <MyFormItem name="email" label="Email">
                <Input className="p-2" />
              </MyFormItem>
              <MyFormItem name="password" label="Password">
                <Input className="p-2" />
              </MyFormItem>
            </MyFormItemGroup>
          </MyFormItemGroup>

          <div className="flex justify-center">
            {" "}
            <Button htmlType="submit" className="mr-2">
              Add
            </Button>
            <Button
              htmlType="submit"
              onClick={() => {
                setShow(!show);
              }}
            >
              Close
            </Button>
          </div>
        </Form>
      ) : null}

      <Table columns={userColumn} dataSource={userArr} />
    </div>
  );
}

export default AdminUserPage;
