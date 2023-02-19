import { Tag } from "antd"

export const userColumn = [
    {
        title: "Ten",
        dataIndex: "hoTen",
        key: "hoTen"
    },
    {
        title: "taiKhoan",
        dataIndex: "taiKhoan",
        key: "taiKhoan"
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email"
    },
    {
        title: "maLoaiNguoiDung",
        dataIndex: "maLoaiNguoiDung",
        key: "maLoaiNguoiDung",
        render: (text) => {
            if(text == "QuanTri") {
                return <Tag style={{color: "red"}} >Admin</Tag>
            } else {
                return <Tag style={{color: "blue"}}>User</Tag>
            }
        }
    },
    {
        title: "Active",
        dataIndex: "action",
        key: "action"
    }
]












// : 
// "admintest123@gmail.com"
// hoTen
// : 
// "Trần hoàng lâm"
// maLoaiNguoiDung
// : 
// "QuanTri"
// matKhau
// : 
// "admintest"
// soDT
// : 
// "0974287784"
// taiKhoan
// : 
// "admintest"