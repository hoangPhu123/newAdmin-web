// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { userLocalService } from "../../service/localService";
// // import {adminSlice} from "../../Redux_Toolkit/adminSlice";

// export default function Logo() {
//   const admin = useSelector((state) => {
//     return state.adminSlice.admin;
//   });

//   const handleLogout = () => {
//     userLocalService.remove();
//     window.location.reload;
//   };

//   const renderContent = () => {
//     if (admin) {
//       return (
//         <>
//           <span>{admin?.username}</span>
//           <button
//             onClick={handleLogout}
//             className="border-2 rounded border-black px-4 py-2 text-sm"
//           >
//             Log Out
//           </button>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <NavLink to={"/login"}>
//             <button className="rounded border-black px-5 py-2">
//               Đăng nhập
//             </button>
//           </NavLink>
//         </>
//       );
//     }
//   };

//   return <div>{renderContent()}</div>;
// }
