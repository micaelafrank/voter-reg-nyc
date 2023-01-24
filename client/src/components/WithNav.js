import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

export default ({ setUser, user }) => {
    return (
        <>
            <NavBar setUser={setUser} user={user} />
            <Outlet />
        </>
    );
};