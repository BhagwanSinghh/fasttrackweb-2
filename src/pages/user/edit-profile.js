import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateRecruiter, getVendorData, getCountryData } from '../../services/api/api.service';
import { InputLabel, MenuItem, FormControl, Select, TextField, Box, TextareaAutosize, Button, Checkbox, FormControlLabel } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function EditProfile() {
    const gettoken = useSelector((e) => e.user.token)
    // console.log('gettoken',gettoken)
    const [country, countryDta] = useState([])
    const [data, setData] = useState({
        token: gettoken,
        company_name: null,
        email: null,
      //  pwd: null,
        location: null,
        phone: null,
        mobile: null,
        website: null,
        industry: null,
    })
    const [msg, saveMsg] = useState(null)

    useEffect(() => {
        getCountryData().then((response) => {
            if (response.status == 200) {
                countryDta(response.data.data);
            }
        });
    }, []);

    const updateFeilds = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const updateApiFeilds = (e) => {
        console.log(e.target)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
   // console.log('xfrrrrrrrrrrrrrrr', gettoken);
  //  console.log(data)

    useEffect(() => {
        getVendorData(gettoken)
            .then((e) => {
                if (e.data.status == 200) {
                    console.log(e.data.data)
                    return e.data.data
                }
            }).then((e) => {
                setData({
                    ...data,
                    company_name: e[0].company_name,
                    email: e[0].email,
               //     pwd: e[0].pwd,
                    location: e[0].location,
                    phone: e[0].phone_no,
                    mobile: e[0].mobile,
                    website: e[0].website,
                    industry: e[0].industry,
                })
            })
            .catch((e) => console.log('Not Data Found'))
    }, [])
    const SaveData = async () => {
        updateRecruiter(data).then((e) => {
            if (e.data.status == 200) {
                saveMsg('Your Data is now Saved Successfully')
            } else {
                saveMsg('There is some problem, Please Try Again')
            }
            setTimeout(() => {
                saveMsg(null)
            }, 1000);
        })
    }

    return (
        <div class="post_job">
            <div class="post_shadow">
                <h2 className='fixed_heading'>Recruiter Registration</h2>
                {msg?<Alert severity="info">{msg}</Alert>:null}
                <div className='feild_input'>
                    <TextField fullWidth={true} value={data.company_name} focused size={"medium"} name="company_name" id="company_name" label="Company Name" variant="outlined" onChange={(e) => updateFeilds(e)} />
                </div>
                <div className='feild_input'>
                    <TextField fullWidth={true} value={data.email} focused id="email" type="email" name='email' label="Email" variant="outlined" onChange={(e) => updateFeilds(e)} />
                </div>
                <ul className='two_input'>
                    <li>
                    <TextField fullWidth={true} id="phone" type="text" label="Whatsapp No" variant="outlined" value={data.phone} focused onChange={(e) => updateFeilds(e)} />
                    </li>
                    <li>
                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="location">location</InputLabel>
                                <Select
                                    labelId="location"
                                    name="location"
                                    id="location"
                                    label="location"
                                    value={data.location || 'Please Select Location'}
                                    onChange={(e) => updateApiFeilds(e)}
                                >
                                    {country.map((e) => { return <MenuItem value={e.country_id}>{e.country_name}</MenuItem> })}

                                </Select>
                            </FormControl>
                        </Box>
                    </li>
                </ul>

                <div className='feild_input'>
                    <TextField fullWidth={true} id="mobile" type="text" label="Mobile No" variant="outlined" value={data.mobile} focused onChange={(e) => updateFeilds(e)} />
                </div>
                <div className='feild_input'>
                    <TextField fullWidth={true} id="website" value={data.website} focused label="Website" variant="outlined" onChange={(e) => updateFeilds(e)} />
                </div>
                <div className='feild_input'>
                    <TextField fullWidth={true} id="industry" value={data.industry} focused label="industry" variant="outlined" onChange={(e) => updateFeilds(e)} />
                </div>
                <div className='feild_input'>
                    <Button onClick={SaveData} variant="contained" size="large" fullWidth={true}>SUBMIT</Button>
                </div>

            </div>

        </div>

    )
}
