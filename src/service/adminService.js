import { https } from "./configURL";

export const getUserList = () => {
  return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
};

export const deleteUser = (account) => {
  return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
};
