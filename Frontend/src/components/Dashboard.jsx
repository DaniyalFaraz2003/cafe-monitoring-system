// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import logout from '../assets/logout.png'
import axios from 'axios';
import logo from '../assets/logo.jpg'
import PieChart from './DashboardElements/PieChart';
import BarChart from './DashboardElements/BarChart';
import { Input } from "@material-tailwind/react";
import { Select, Option } from '@material-tailwind/react';
import { Button } from "@material-tailwind/react";

const Dashboard = () => {

  return (
    <div className='w-full h-full p-10'>
      <nav className='w-full flex flex-row items-center justify-center'>
        <img src={logo} alt="" className='h-[15%] w-[15%] basis-1/5' />
        <div className='w-full basis-3/5'>
          <h2 className='text-3xl font-bold text-center text-gray-500 my-5'>Cafe Admin Dashboard</h2>
        </div>
        <div className='basis-1/5'>
          <div className='ml-auto flex flex-row gap-2 items-center w-[50%] justify-center p-2 bg-red-300 rounded-lg'>
            <p className='text-xl mr-0 text-black'>LogOut</p>
            <img src={logout} alt="" className='h-6 w-6' />
          </div>

        </div>
      </nav>

      <div className='w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-10'>
        <div className='basis-1/3 h-full rounded-xl p-5 bg-white justify-center items-center'>
          <PieChart />
        </div>
        <div className='basis-2/3 p-5 rounded-xl bg-white justify-center items-center '>
          <BarChart />
        </div>
      </div>

      <div className='w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-10 justify-center'>
        <div className='flex flex-row items-center justify-center w-fit gap-5'>
          <label htmlFor="idInput" className='text-white font-bold w-full text-xl'>Enter Employee Id: </label>
          <Input
            color='gray'
            name='idInput'
            label="Emp ID"
            className='bg-white'
          />
        </div>
        <div className='flex flex-row items-center justify-center w-fit gap-5'>
          <label htmlFor="mealTypeInput" className='text-white font-bold w-full text-xl'>Select Meal Type: </label>
          <Select color='black' name='mealTypeInput' defaultValue={'Normal'} label='Select Meal Type' className='bg-white'>
            <Option>Normal</Option>
            <Option>Diet</Option>
          </Select>
        </div>
        <div>
          <Button color='blue'>Enter</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
