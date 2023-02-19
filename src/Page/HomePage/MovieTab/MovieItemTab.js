import React from 'react';
import moment from "moment"

export default function MovieItemTab({movie}) {
    console.log('movie: ', movie);
  return (
    <div className='flex space-x-5'>
        <img className='h-40 w-36 object-cover mb-5' src= {movie.hinhAnh} alt="" />
        <div> 
            <p className='font-medium text-xl'>{movie.tenPhim}</p>
            <div className='grid grid-cols-3 gap-7'>
                {movie.lstLichChieuTheoPhim.slice(0,6).map((lichChieu) => {
                    return <span className='bg-red-400 text-white px-3 py-2'>{moment(lichChieu.ngayChieuGioChieu).format("LLLL")}</span>
                })}
            </div>
        </div>
    </div>
  )
}
