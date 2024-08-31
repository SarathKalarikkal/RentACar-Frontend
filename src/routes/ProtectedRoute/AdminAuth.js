import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AdminAuth = ({ children }) => {
    const { isAuthenticated, adminInfo } = useSelector((state) => state.admin);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/common/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated && adminInfo.role === 'admin' ? children : null;
};