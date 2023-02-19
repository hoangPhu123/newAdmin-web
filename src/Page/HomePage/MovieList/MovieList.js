import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";


const { Meta } = Card;
export default function MovieList({ movieArr }) {
  // console.log('movieArr: ', movieArr);

  const renderMovieList = () => {
    return movieArr.slice(0, 15).map((item) => {
        return (
          <Card
            hoverable
            style={{width: "100%"}}
            cover={
              <img
                className="h-60 object-cover"
                alt="example"
                src= {item.hinhAnh}
              />
            }
          >
            <Meta title= {<h2 className="text-blue-500 h-10">{item.tenPhim}</h2>} />
            <NavLink className="bg-red-500 text-white rounded px-5 py-2" to={`/detail/${item.maPhim}`}>
                Xem chi tiết
            </NavLink>
          </Card>
        );
    })
  };

  return <div className="grid gap-6 grid-cols-5">
    {renderMovieList()}
  </div>;
}
