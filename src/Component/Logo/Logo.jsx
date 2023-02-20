// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { userLocalService } from "../../service/localService";
// import { adminSlice } from "../../Redux_Toolkit/adminSlice";

// export default function Logo() {
//   const admin = useSelector((state) => {
//     return state.adminSlice.admin;
//   });

//   const handleLogout = () => {
//     userLocalService.remove();
//     window.location.reload();
//   };

//   const renderContent = () => {
//     return (
//       admin && (
//         <nav>
//           <span>{admin?.username}</span>
//           <button
//             onClick={handleLogout}
//             className="border-2 rounded border-black px-4 py-2 text-sm"
//           >
//             Log Out
//           </button>
//         </nav>
//       )
//     );
//   };

//   return <div>{renderContent()}</div>;
// }
