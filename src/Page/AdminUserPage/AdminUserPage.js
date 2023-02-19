import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteUser, getUserList } from "./../../service/adminService";
import { Button, message, Space, Table, Tag } from "antd";
import { userColumn } from "./utils";

function AdminUserPage() {
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    let handleRemoveUser = (account) => {
      deleteUser(account)
        .then((res) => {
          message.success("Xóa Thành Công");
          fetchUserList();
        })
        .catch((err) => {
          message.error(err.response.data);
        });
    };
    let fetchUserList = () => {
      getUserList()
        .then((res) => {
          let userList = res.data.results.map((item) => {
            return {
              ...item,
              key: item.email,
              action: (
                <>
                  <Button
                    onClick={() => {
                      handleRemoveUser(item.email);
                    }}
                    type="primary"
                    danger
                  >
                    Xóa
                  </Button>
                  <Button type="primary" className="bg-blue-500 ml-2">
                    Sửa
                  </Button>
                </>
              ),
            };
          });

          setUserArr(userList);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);

  return (
    <div>
      <Table columns={userColumn} dataSource={userArr} />
    </div>
  );
}

export default AdminUserPage;
