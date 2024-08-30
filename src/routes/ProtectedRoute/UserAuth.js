import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserAuth = ({ children }) => {
    const { isAuthenticated, userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/common/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated && userInfo.role === 'user' ? children : null;
};