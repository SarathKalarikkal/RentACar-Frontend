import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../../../config/axiosInstance';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { name, email, password, role } = data;
      const signupData = { name, email, password, role };

      
      const response = await axiosInstance.post('/user/create', signupData);
      console.log(response);
      
      toast.success('Signup successful');
      setTimeout(() => {
        navigate('/common/login');
      }, 1000);
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      toast.error(`Signup failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className='signup-wrapper'>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
        <div className="form-grp">
          <div className="inp-grp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder='Enter your name'
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="inp-grp">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
              placeholder='Enter your email'
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              placeholder='Enter a password'
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <div className="inp-grp role">
            <label htmlFor="role">Role</label>
            <div className="rol-wrap">
              <input
                type="radio"
                name="role"
                id="user"
                value="user"
                {...register('role', { required: 'Role is required' })}
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="rol-wrap">
              <input
                type="radio"
                name="role"
                id="dealer"
                value="dealer"
                {...register('role', { required: 'Role is required' })}
              />
              <label htmlFor="dealer">Dealer</label>
            </div>
            <div className="rol-wrap">
              <input
                type="radio"
                name="role"
                id="admin"
                value="admin"
                {...register('role', { required: 'Role is required' })}
              />
              <label htmlFor="admin">Admin</label>
            </div>
            {errors.role && <p className="error">{errors.role.message}</p>}
          </div>
          <button type='submit'>Signup</button>
        </div>
        <p>Already a member? <Link to={'/common/login'}>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
