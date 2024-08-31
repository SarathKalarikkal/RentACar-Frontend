import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../services/userApi';
import { dealerLogin } from '../../../services/dealerApi';
import { setUserInfo } from '../../../Redux/features/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../../../config/axiosInstance';
import { setDealerInfo } from '../../../Redux/features/dealerSlice';
import Cookies from 'js-cookie';
import { setAdminInfo } from '../../../Redux/features/adminSlice';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try {
      
      let response;
      if (data.role === 'user') {
       
        const {email, password} = data
        const loginData = {email, password}

        response = await axiosInstance.post('/user/login', loginData); 
        Cookies.set('token', response.data.token, { expires: 1 });

      } else if (data.role === 'dealer') {

        const {email, password} = data
        const loginData = {email, password}
        response = await axiosInstance.post('/dealer/login', loginData); 
        Cookies.set('token', response.data.token, { expires: 1 });
        
      }else if (data.role === 'admin') {

        const {email, password} = data
        const loginData = {email, password}

        console.log(loginData);
        
        response = await axiosInstance.post('/admin/login', loginData); 
        console.log(response.data);
        Cookies.set('token', response.data.token, { expires: 1 });
        
      }
      //  console.log("sadasd",response.data.token)
      const { role, ...userData } = response.data;

      dispatch(setUserInfo(userData.userData));
      dispatch(setDealerInfo(userData.userData));
      dispatch(setAdminInfo(userData.userData));

      if (role === 'user') {
        toast.success('User Login successful');
       setTimeout(()=>{
        navigate('/user'); 
       },1000)
        
      } else if (role === 'dealer') {
        setTimeout(()=>{
          navigate('/dealer'); 
         },1000)
      }else if (role === 'admin') {
        setTimeout(()=>{
          navigate('/admin'); 
         },1000)
      } 
      else {
        toast.error('Invalid role');
      }


    } catch (error) {
      // console.error('Login failed:', error.response.data.message);
      // toast.error(`Invalid credentials or ${error.response.data.message}` );
    }
  };

  return (
    <div className='login-wrapper'>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} >
        <h2>Login</h2>
        <div className="form-grp">
          <div className="inp-grp">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              {...register('email')}  
              placeholder='Enter your email'
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              {...register('password')}  
              placeholder='Enter your password'
            />
          </div>
          <div className="inp-grp role">
            <label htmlFor="role">Role</label>

            <div className="rol-wrap">
              <input 
                type="radio" 
                name="role" 
                id="user" 
                value="user" 
                {...register('role')} 
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="rol-wrap">
              <input 
                type="radio" 
                name="role" 
                id="dealer" 
                value="dealer" 
                {...register('role')} 
              />
              <label htmlFor="dealer">Dealer</label>
            </div>
            <div className="rol-wrap">
              <input 
                type="radio" 
                name="role" 
                id="admin" 
                value="admin" 
                {...register('role')} 
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
          <button type='submit'>Login</button>
        </div>
        <p>Not a member? <Link to={'/common/signup'}>Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
