import React, { useEffect, useState } from 'react';
import { SaveRecruiter, getCountryData, SaveEnquiry } from '../../services/api/api.service';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
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
import { useHistory } from 'react-router-dom';

export default function Registration() {
  const history = useHistory()
  const [country, countryDta] = useState([]);
  const [registrationdata, setRegistrationData] = useState(null);
  const [data, setData] = useState({
    company_name: null,
    email: null,
    pwd: null,
    location: null,
    phone_no: null,
    mobile: null,
    website: null,
    industry: null,
  });

  const updateFeilds = (e) => {
    setRegistrationData(null);
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const updateApiFeilds = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  useEffect(() => {
    getCountryData().then((response) => {
      if (response.status == 200) {
        countryDta(response.data.data);
      }
    });
  }, []);
  const SaveData = async () => {
    event.preventDefault();
    const obj = data;
    let validate = true;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (obj.company_name == null || obj.company_name == '') {
      validate = false;
      alert('Enter the Company Name');
    } else if (obj.email == null || obj.email == '') {
      validate = false;
      alert('Enter the Email');
    } else if (!obj.email.match(mailformat) || obj.email == null || obj.email == '') {
      validate = false;
      alert('Enter the valid Email');
    } else if (obj.pwd == null || obj.pwd == '') {
      validate = false;
      alert('Enter the Password');
    } else if (obj.location == null || obj.location == '') {
      validate = false;
      alert('Enter the Location');
    } else if (obj.phone_no == null || obj.phone_no == '') {
      validate = false;
      alert('Enter the WhatsApp');
    } else if (obj.mobile == null || obj.mobile == '') {
      validate = false;
      alert('Enter the Mobile NO');
    } else if (obj.industry == null || obj.industry == '') {
      validate = false;
      alert('Enter the Industry');
    }
    if (validate) {
      console.log('register', obj);
      setTimeout(async () => {
        let getData = await SaveRecruiter(obj);
        setRegistrationData(getData);
      }, 100);
    }
  };
  useEffect(() => {
    if (registrationdata && registrationdata.data && registrationdata.data.status == 200) {
      setTimeout(()=>{
         history.push("/login")
      },1000)
      Object.values(document.getElementsByTagName('input', 'select')).map((e) => {
        console.log(e.childern);
        e.value = '';
      });
    }
  }, [registrationdata]);
  console.log(registrationdata);
  return (
    <div class="container_fluid recruiter_registration">
      <div class="post_job">
        <div class="post_shadow">
          {registrationdata ? (
            registrationdata.data.status == 200 ? (
              <>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert Alert severity="success">
                    You Have Registered Successfully{' '}
                  </Alert>
                </Stack>
              </>
            ) : (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{registrationdata ? registrationdata.data.message : n}</Alert>
              </Stack>
            )
          ) : null}
          <h2 className="fixed_heading">Recruiter Registration</h2>
          <Box sx={{ minWidth: 200 }}>
            <form autoComplete="off">
              <div className="feild_input">
                <TextField
                  fullWidth={true}
                  size={'medium'}
                  id="company_name"
                  label="Company Name"
                  variant="outlined"
                  onChange={(e) => updateFeilds(e)}
                  required
                />
              </div>
              <div className="feild_input">
                <TextField
                  fullWidth={true}
                  id="email"
                  required
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => updateFeilds(e)}
                />
              </div>
              <ul className="two_input">
                <li>
                  <TextField
                    fullWidth={true}
                    id="pwd"
                    type="password"
                    label="Password"
                    required
                    variant="outlined"
                    onChange={(e) => updateFeilds(e)}
                  />
                </li>
                <li>
                  <Box sx={{ minWidth: 200 }}>
                    <FormControl fullWidth>
                      <InputLabel required id="location">
                        location
                      </InputLabel>
                      <Select
                        labelId="location"
                        name="location"
                        id="location"
                        fullWidth={true}
                        label="location"
                        onChange={(e) => updateApiFeilds(e)}
                      >
                        {country.map((e) => {
                          return <MenuItem value={e.country_id}>{e.country_name}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </li>
              </ul>
              <div className="feild_input">
                <TextField
                  fullWidth={true}
                  id="phone_no"
                  type="text"
                  label="Whatsapp No"
                  variant="outlined"
                  required
                  onChange={(e) => updateFeilds(e)}
                />
              </div>
              <div className="feild_input">
                <TextField
                  fullWidth={true}
                  id="mobile"
                  type="text"
                  label="Mobile No"
                  required
                  variant="outlined"
                  onChange={(e) => updateFeilds(e)}
                />
              </div>
              <div className="feild_input">
                <TextField fullWidth={true} id="website" label="Website" variant="outlined" onChange={(e) => updateFeilds(e)} />
              </div>
              <div className="feild_input">
                <TextField
                  fullWidth={true}
                  id="industry"
                  required
                  label="industry"
                  variant="outlined"
                  onChange={(e) => updateFeilds(e)}
                />
              </div>
              <div className="feild_input">
                <Button type="submit" onClick={SaveData} variant="contained" required size="large" fullWidth={true}>
                  SUBMIT
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}
