import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordApi } from '../../services/api/api.service';
import { InputLabel, MenuItem, FormControl, Select, TextField, Box, TextareaAutosize, Button, Checkbox, FormControlLabel } from '@mui/material';
import Alert from '@mui/material/Alert';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [msg, saveMsg] = useState(null)
  const [form, setState] = React.useState({
    confirm_password: '',
    old_password: '',
    password: '',
  });
  const {
    confirm_password, old_password, password,
  } = form;

  const userId = useSelector((state)=>state.user.userDetail.userId)
  //console.log(userId)

  const onChange = (e) => {
    const updates = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setState(updates);
  };

  const onSave = () => {
    if (!old_password.trim()) {
      alert('Please enter your current password');

      return;
    }

    if (!password.trim()) {
      alert('Please enter your new password');

      return;
    }

    if (!confirm_password.trim()) {
      alert('Please enter your confirm password');

      return;
    }

    const data = {
      uid: userId, pwd: confirm_password, confirm_pwd: password,
    };

    changePasswordApi(data).then((e) => {
      if (e.data.status == 200) {
          saveMsg('Your Password is now Saved Successfully')
      } else {
          saveMsg('There is some problem, Please Try Again')
      }
      setTimeout(() => {
          saveMsg(null)
      }, 1000);
  })

   // dispatch(changePassword(request));
  };

  return (
    <>
      <div class="post_job">
        <div class="post_shadow">
          <h2 className='fixed_heading'>Change Password</h2>
          {msg?<Alert severity="info">{msg}</Alert>:null}
          <Box
            component="form"
            sx={{
              width: 1000,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              fullWidth={true}
              label="Enter Your Current Password"
              onChange={onChange}
              value={old_password}
              type="password"
              name="old_password"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              fullWidth={true}
              label="Enter Your New Password"
              onChange={onChange}
              value={password}
              name="password"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Re-enter Your Password"
              onChange={onChange}
              type="password"
              value={confirm_password}
              fullWidth={true}
              name="confirm_password"
              className="form-control lg password"
              margin="normal"
            />
            <Button variant="contained" fullWidth={true} type='button' onClick={onSave} >Save Changes</Button>
          </Box>

        </div>

      </div>


    </>
  );
};

export default ChangePassword;
