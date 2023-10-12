// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useEffect, useState } from "react";
// import {
//   getAllPackagesDetails,
//   listDetail,
// } from "../../services/api/api.service";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// // function createData(Sr.No., Method Of Packing, PARTICULARS, Value(Tpr)) {
// //     return { Sr.No., Method Of Packing, PARTICULARS, Value(Tpr) };
// //   }
// // -------------------------------------------------------------------------------------------------------------------------------------------------------
// const packagesData = () => {
//   const [data, setData] = useState([]);

//   const [packageData, setPackageData] = useState([]);
//   useEffect(() => {
//     const lrNumberLocal = localStorage.getItem("LrNumber");
//     listDetail(lrNumberLocal).then((e) => setData(e.data.data[0]));
//   }, []);
//   console.log(data, "321");
//   useEffect(() => {
//     if (data.length != 0)
//       getAllPackagesDetails(data.id).then((data) => {
//         setPackageData(data.data.data);
//       });
//   }, [data]);
//   console.log(packageData, "packageData");

//   const { c_from, c_to, c_date } = data;
//   console.log(c_from, c_to, c_date);

//   // -------------------------------------------------------------------------------------------------------------------------------------------------------

//   return (
//     <div>
//       packagesData
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Sr.No.</StyledTableCell>
//               <StyledTableCell align="right">Method Of Packing</StyledTableCell>
//               <StyledTableCell align="right">PARTICULARS</StyledTableCell>
//               <StyledTableCell align="right">Value Tpr</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {packageData &&
//               packageData.length != 0 &&
//               packageData.map((row, index) => (
//                 <StyledTableRow key={index + 1}>
//                   <StyledTableCell component="th" scope="row">
//                     {index + 1}
//                   </StyledTableCell>
//                   <StyledTableCell align="right"></StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.particular}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.value}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default packagesData;
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {
  getAllPackagesDetails,
  listDetail,
} from "../../services/api/api.service";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { label: "Sr.No.", field: "srNo", width: 30 },
  { label: "Method Of Packing", field: "methodOfPacking", width: 100 },
  { label: "PARTICULARS", field: "particular", width: 100 },
  { label: "Value Tpr", field: "value", width: 100 },
];

const packagesData = () => {
  const [data, setData] = useState([]);

  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    const lrNumberLocal = localStorage.getItem("LrNumber");
    listDetail(lrNumberLocal).then((e) => setData(e.data.data[0]));
  }, []);
  console.log(data, "321");
  useEffect(() => {
    if (data.length != 0)
      getAllPackagesDetails(data.id).then((data) => {
        setPackageData(data.data.data);
      });
  }, [data]);
  console.log(packageData, "packageData");

  const { c_from, c_to, c_date } = data;
  console.log(c_from, c_to, c_date);

  const rows = packageData.map((data, index) => ({
    srNo: index + 1,
    methodOfPacking: "",
    particular: data.particular,
    value: data.value,
  }));

  // -------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <div>
        <table
          style={{
            width: "1000px",
            align: "centre",
            fontFamily: "Arial",
            fontSize: "13px",
            cellPadding: "0",
            cellSpacing: "0",
          }}
        >
          <tbody>
            <tr>
              <td>
                <table
                  style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        TO WHOM SO EVER IT MAY CONCERN
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center", fontSize: "20px" }}>
                        {" "}
                        Sub. Transporation Of Household Goods &amp; Furniture
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}>
          <tbody>
            <tr>
              <td>
                <button onClick={() => console.log(list, "213")}></button>
                The undersigned at the present address given below has been
                transferred to................and the below mentioned household
                goods &amp; furniture handed over to packers &amp; Makers to
                transport in goods to the destination. video their consignment
                no..............date.......the goods(as specified)are personal
                belonging not meat for any kind of sale and are exempted from
                all taxes control authority act no. 2, section 1580 of thr
                indian tolls act 1901
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}>
          <tbody>
            <tr>
              <td>Consignment Note No.....................</td>
              <td
                style={{ fontSize: "25px", width: "40%", fontWeight: "bold" }}
              >
                Packing List
              </td>
              <td>Date.{c_date}</td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}>
          <tbody>
            <tr>
              <td style={{ width: "50%" }}>From..{c_from}</td>
              <td style={{ width: "50%", align: "right" }}>To..{c_to}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.label}
                  align="center"
                  style={{ width: column.width }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.srNo}>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.field}
                    align="center"
                    style={{ width: column.width }}
                  >
                    {row[column.field]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ------------------- */}
    {/* <div class ="row">
        <div class ="col-sm-6 col-md-6 col-xl-6">
            <h1>ram</h1>
            <h1>ram</h1>
            <h1>ram</h1>
            </div>
            <div class ="col-sm-6 col-md-6 col-xl-6">
                
            <h1>ram</h1>
            <h1>ram</h1>
            <h1>ram</h1>
        </div>
    </div> */}
    
    </div>
  );
};

export default packagesData;


// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="time"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="amount"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }