import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const DealerAuth = ({ children }) => {
    const { isAuthenticated, dealerInfo } = useSelector((state) => state.dealer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/common/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated && dealerInfo.role === 'dealer' ? children : null;
};