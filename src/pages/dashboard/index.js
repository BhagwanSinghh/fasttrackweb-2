import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';

const Dashboard = () => {
  const getName = useSelector((state) => state.user.userDetail.userName)
  console.log(getName)
  return (
    <>

      <div className="dashboard">

 
      </div>

    </>
  );
};

export default Dashboard;
