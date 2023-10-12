import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { push } from 'connected-react-router';
import { SaveRecruiter, getCountryData, grtUserDetails } from '../../services/api/api.service';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Box,
  TextareaAutosize,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { login, genearteOtp, loginRequested } from '../../actions/user-action-types';
import Regex from '../../utility/regex';
import { Link as Navlink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useHistory } from 'react-router-dom';
import { Password } from '@mui/icons-material';
import { IMAGE_PATH_URL } from '../../constants/path';


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const message = useSelector((state) => state.user.message);
  const[loggedIn,setLoggedIn]=useState(false);
  console.log(loggedIn,"loggedIn")

  const [registrationData, setRegistrationData] = useState({});
  const getAuthToken = useSelector((state) => state.user.tempToken);
  const getOtpStatus = useSelector((state) => state.user.otpSent);

  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });
  const { email, password} = form;

  const onChange = (e) => {
    const updates = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updates);
  };

 
 
  // http://retropackers.com/api/retropackers-apis.php?type=login&username=LR000001&passwd=0012

  const onLogin = () => {
    if (email === '') {
      alert('Please enter a valid LR Number');
      return;
    }

    if (password === '') {
      alert('Please enter a valid One Time Password');

      return;
    }
    // console.log(email,password)
    if(email && password)
    grtUserDetails(email,password)
    // document.getElementById('loginButton').innerHTML('hidden')
    // .then((data)=>console.log(data,"grtUserDetails"))
    // .then((data)=>console.log(data.data.data[0],"grtUserDetails"))
    // .then((data)=>data.data)
    .then((data)=>{
      // console.log(data,"console.log")
      if(data.data.status==200)
    // setLoggedIn(true) && 
    localStorage.setItem("LrNumber",email)
    history.push({
      pathname: '/ConsignerDetails',//-------------------HERE
      emaill:email,
      passwordd:password
      // data: data,
      // mainData: 'DATA VALUE',
    });
  
  }
    )
  };
//   useEffect(()=>{
//     if(email)
//     localStorage.setItem("LrNumber",email)
// },[])
  // useEffect(()=>{
  //   if(email && password)
  //   grtUserDetails(email,password)
  //   .then((data)=>{
  //     // console.log(data,"console.log")
  //     if(data.data.status==200)
  //   // setLoggedIn(true) && 
  //   history.push({
  //     pathname: '/ConsignerDetails',//-------------------HERE
  //     // data: data,
  //     // mainData: 'DATA VALUE',
  //   });
  
  // }
  //   )

  // },[])

  const onChangePassword = (e) => {
    const updates = {
      ...form,
      [e.target.name]: e.target.value,
    };

    onLogin();

    setForm(updates);
  };

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      if (email === '') {
        alert('Please enter a valid email address');

        return;
      }

      if (password === '') {
        alert('Please enter a valid password');

        return;
      }

      const request = {
        emailId: email,
        mobileNo: password,
      };
      dispatch(genearteOtp(request));
    }
  };

  const onEnterPressPassword = (e) => {
    if (e.key === 'Enter') {
      if (email === '') {
        alert('Please enter a valid email address');

        return;
      }

      if (password === '') {
        alert('Please enter a valid password');

        return;
      }

      const request = {
        emailId: email,
        mobileNo: password,
      };
      dispatch(login({}));
    }
  };


  const [state, setstate] = useState(false);
  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  const credentialsData = (data) => {
    console.log(data);
    // setRegistrationData({...data});
    SaveRecruiter(data)
      .then(async (mainData) => {
        let loginObj = await {
            username: data.email,
            passwd: data.pwd
        }
        console.log(loginObj)
        dispatch(genearteOtp(loginObj))
      })
      .then(val => console.log(val));
  }
  // console.log(regist)



  return (
    <>
     <div class="LoginImage">
            <img src={IMAGE_PATH_URL+"image_8.jpg"} alt="" style={{ width: "100%" }} />
          </div>
      <div class="container_fluid form_container1 login_form_container">
        <div class="container">
         
          <div class="form_top">
            <div class="form_content">
              <h2 className="fixed_heading">Download documents</h2>

              <ul>
                <li>
                  {message?<Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">{message}</Alert>
                  </Stack>: null }
                  <h2>Documnet LR No.<span>*</span>
                  </h2>

                  <TextField
                    value={email}
                    name="email"
                    fullWidth={true}
                    size={'medium'}
                    id="email-address"
                    label="Enter Documnet LR No."
                    variant="outlined"
                    onChange={onChange}
                    onKeyPress={onEnterPress}
                    required
                  />
                </li>
                {email.length==8 ? (
                <li>
                  <h2>One Time Password<span>*</span>
                  </h2>
                  <div class="password">
                    <TextField
                      type={state ? "text" : "password"}
                      value={password}
                      name="password"
                      fullWidth={true}
                      size={'medium'}
                      id="password"
                      label="Enter One Time Password ... "
                      variant="outlined"
                      onChange={onChange}
                      onKeyPress={onEnterPressPassword}
                      required
                    />
                    <VisibilityIcon
                      onClick={toggleBtn}
                      id='password_eye'
                    />

                  </div>
               
                </li>)
                :""}
                {  loggedIn==true ?  "":
                <li>
                  <Button id='loginButton' type="button" onClick={onLogin} variant="contained" required size="large" fullWidth={true}>
                    Login
                  </Button>
                  </li>
                  }
                 
               
        
               
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
