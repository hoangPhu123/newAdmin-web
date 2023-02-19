import { https } from './configURL';

export let getMovieService = () => { 
    return https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`);
}

export const getMovieByTheater = () => { 
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`);
 }