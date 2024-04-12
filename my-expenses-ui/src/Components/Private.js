import { Navigate } from 'react-router-dom';

const Private = (Component) => {
    const auth = false; //your logic

    return auth ? <Component /> : <Navigate to="/admin/login" />
}

export default Private;