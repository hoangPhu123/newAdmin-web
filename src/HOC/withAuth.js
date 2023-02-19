import { Component } from 'react';
import { userLocalService } from '../service/localService';

const withAuth = (WrappedComponent) => {
    class withAuth extends Component {
        componentDidMount() {
            if(userLocalService.get()?.maLoaiNguoiDung !== "QuanTri") {
                window.location.href = "/";
            }
        }
        render() {
            return <WrappedComponent/>
        }
    }
    return withAuth; 
};

export default withAuth;