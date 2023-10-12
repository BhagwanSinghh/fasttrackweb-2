import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { InputLabel, MenuItem, FormControl, Select, TextField, Box, TextareaAutosize, Button, Checkbox, FormControlLabel } from '@mui/material';
import { forgotPassword } from '../../actions/user-action-types';
import Regex from '../../utility/regex';
import { Link as Navlink } from "react-router-dom";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');

  const onNavigate = () => {
    const path = '/';

    dispatch(push(path));
  };

  const onResetPasswordInstructions = () => {
    if (email === '' || !Regex.email(email)) {
      alert('Please enter a valid email address');

      return;
    }

    const request = { email };

    dispatch(forgotPassword(request));
  };

  return (
    <div class="container_fluid form_container1">
        <div class="container">
          <div class="form_top">
            <div class="form_content">
            <h2 className='fixed_heading'>Forgot Password</h2>

              <ul>
                <li>
                  <h2>Email Address <span>*</span></h2>

              <TextField value={email} name="email" fullWidth={true} size={"medium"} id="email-address" label="Enter Email Address..." variant="outlined"  onChange={(e) => setEmail(e.target.value)}  required />
                </li>

                <li>
                <Button type="button" onClick={onResetPasswordInstructions} variant="contained" required size="large" fullWidth={true}>Recover Password</Button>

                  <p>Sign in an Existing Account? <Navlink to={'/login'}>Sign In</Navlink></p>
                </li>

              </ul>
              {/* <div class="connect_using">
                <div></div>
                <p>or connect using</p>
                <div></div>
              </div>
              <div class="connecting_icons">
                <i class="fa fa-google" aria-hidden="true"></i>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

  );
};

export default ForgotPassword;
