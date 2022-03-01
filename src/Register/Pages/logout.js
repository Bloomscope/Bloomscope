import React from 'react';
import { Navigate  } from 'react-router-dom';

const Logout = () => {
    return (
        <>
        <Navigate  to="/" />
        </>
    );
};
export default Logout;