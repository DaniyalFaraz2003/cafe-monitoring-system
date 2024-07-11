// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import logout from '../assets/logout.png'
import axios from 'axios';

const Dashboard = () => {

  return (
    <div className='w-full h-full p-10'>
      <nav className='w-full flex flex-row'>
        <h2 className='text-3xl font-bold text-center text-white'>Admin Dashboard</h2>
        <div className='ml-auto flex flex-row gap-2 items-center justify-center p-2 bg-red-200 rounded-lg'>
          <p className='text-xl mr-0'>LogOut</p>
          <img src={logout} alt="" className='h-6 w-6' />
        </div>
      </nav>
      <div className='w-full flex p-5 flex-row h-52 gap-5 bg-[#ea7c69] rounded-lg mt-10'>
        <div className='basis-1/3 h-full rounded-xl bg-white justify-center items-center text-center'>
          hello
        </div>
        <div className='basis-2/3 h-full rounded-xl bg-white justify-center items-center '>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
