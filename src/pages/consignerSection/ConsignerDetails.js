import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { useHistory, useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : "#fffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ConsignerDetails = () => {
  const history = useHistory();

  const location = useLocation();
  const lrNumber = location.emaill;
  console.log(lrNumber, "locaton data")

  // set data to localStorage
  const setData = () => {
    localStorage.setItem(lrNumber)
  };




  // -----------
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  // /moneyreceipt/:document_id /listLayout/:document_id /invoice/:document_id  /Lrlayout/:document_id Quotation
  //button section
  const click1 = () => {
    history.push({
      pathname: "/moneyreceipt/:document_id",
      emaill: lrNumber
    });
  };
  const click2 = () => {
    history.push({
      // pathname: "/packagesData",
      pathname: "/listLayout/:document_id",
      emaill: lrNumber
    });
  };
  const click3 = () => {
    history.push({
      pathname: "/invoice/:document_id",
      emaill: lrNumber
    });
  };
  const click4 = () => {
    history.push({
      pathname: "/Lrlayout/:document_id",
      emaill: lrNumber
    });
  };
  const click5 = () => {
    history.push({
      pathname: "/Quotation/:document_id",
      emaill: lrNumber
    });
  };
  const click6 = () => {
    history.push({
      pathname: "/packagesData",
      emaill: lrNumber
    });
  };

  return (
    <div>
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Stack spacing={2} direction="column">
          <BootstrapButton
            style={{ width: "100%" }}
            variant="contained"
            disableRipple
          >
            Consigner Details
          </BootstrapButton>
        </Stack>
      </div>
      <Box sx={{ width: '100%', paddingLeft: 60, paddingRight: 60, paddingBottom: 4 }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6} elevation={12}>
            <Item onClick={click1} style={{ fontSize: 22, lineHeight: 8 }}>Money Receipt</Item>
          </Grid>
          <Grid item md={6}>
            <Item onClick={click2} style={{ fontSize: 22, lineHeight: 8 }} > List Layout</Item>
          </Grid>
          <Grid item md={6}>
            <Item onClick={click3} style={{ fontSize: 22, lineHeight: 8 }}>Invoice</Item>
          </Grid>
          <Grid item md={6}>
            <Item onClick={click4} style={{ fontSize: 22, lineHeight: 8 }}> LR Layout</Item>
          </Grid>
          <Grid item md={6}>
            <Item onClick={click5} style={{ fontSize: 22, lineHeight: 8 }} >Quotation</Item>
          </Grid>
          <Grid item md={6}>
            <Item onClick={click6} style={{ fontSize: 22, lineHeight: 8 }}>New Package Data</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
// /moneyreceipt/:document_id /listLayout/:document_id /invoice/:document_id  /Lrlayout/:document_id Quotation

export default ConsignerDetails;
