import React from "react";
import { useEffect, useState } from "react";
import { getMovieByTheater } from "../../../service/movieService";
import { Tabs } from "antd";
import MovieItemTab from './MovieItemTab';

const onChange = (key) => {
  console.log(key);
};

export default function MovieTab() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    getMovieByTheater()
      .then((res) => {
        setDataMovie(res.data.content);
      })
      .catch((err) => {});
  }, []);

  const renderDanhSachPhimTheoCumRap = (cumRap) => { 
    console.log('cumRap: ', cumRap);
    return <div>
        {cumRap.danhSachPhim.map((movie) => {
            return <MovieItemTab movie = {movie}/>
        })}
    </div>
   }

  const renderCumRapTheoHeThongRap = (heThongRap) => {
    return heThongRap.lstCumRap.map((cumRap) => {
      return {
        label: <div className="w-40">
            <h4 className="text-blue-600">{cumRap.tenCumRap}</h4>
            <p className="truncate">{cumRap.diaChi}</p>
        </div>,
        key: cumRap.maCumRap,
        children: <div style={{height: "400px", overflowY: "scroll"}}>{renderDanhSachPhimTheoCumRap(cumRap)}</div>,
      };
    });
  };

  const renderHeThongRap = () => {
    return dataMovie.map((heThongRap) => {
      return {
        label: (
          <img src={heThongRap.logo} className="w-20 object-cover" alt="" />
        ),
        key: heThongRap.maHeThongRap,
        children: (
          <Tabs
            style={{height: 400}}
            tabPosition="left"
            defaultActiveKey="1"
            onChange={onChange}
            items={renderCumRapTheoHeThongRap(heThongRap)}
          />
        ),
      };
    });
  };

  return (
    <Tabs
      style={{
        height: 400
      }}
      className="mt-10"
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
      items={renderHeThongRap()}
    />
  );
}
