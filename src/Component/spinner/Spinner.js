import React from "react";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function Spinner() {
  let isLoading = useSelector((state) => {
    return state.spinnerSlice.isLoading;
  });

  return isLoading ? (
    <div className="fixed bg-black w-screen h-screen t-0 l-0 z-50 flex justify-center items-center">
      <PacmanLoader size="50" speedMultiplier={1} color="#36d7b7" />
    </div>
  ) : (
    <></>
  );
}
