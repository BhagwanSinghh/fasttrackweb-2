import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  getAllPackagesDetails,
  listDetail,
} from "../../services/api/api.service";
import { IMAGE_PATH_URL } from "../../constants/path";

const PackingListLayout = () => {
  const [data, setData] = useState([]);
  const parmps = useParams();
  const { document_id } = parmps;
  console.log(document_id, "docss");

  // --------------------LOCATION DATA
  const location = useLocation();
  console.log(location, "packing locatin data");
  const lrNumber = location.emaill;
  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    const lrNumberLocal = localStorage.getItem("LrNumber");
    // listDetail(lrNumberLocal).then((e)=>console.log(e.data.data[0].id,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
    listDetail(lrNumberLocal).then((e) => setData(e.data.data[0]));
    //  setTimeout(()=>{

    //  if(data.length!=0)
    //  getAllPackagesDetails(data.id)
    //  .then((data)=>{
    //    setPackageData(data)

    //    // console.log(data,"get all details packaging")
    //   })
    // },1000)
    // listDetail(`${document_id}`).then((e)=>setData(e.data.data[0]))
  }, []);
  console.log(data, "321");
  useEffect(() => {
    if (data.length != 0)
      getAllPackagesDetails(data.id).then((data) => {
        setPackageData(data.data.data);
      });
  }, [data]);
  console.log(packageData, "packageData");
  // useEffect(()=>{
  //   setTimeout(()=>{

  //     let packageId=data.id
  //     if(packageId)
  //     getAllPackagesDetails(packageId)
  //     // getAllPackagesDetails(1)
  //     .then((data)=>{
  //       console.log(data.data.data,"get all details packaging")
  //     })
  //   },3000)

  // },[])
  // },[listDetail(lrNumberLocal)])

  const { c_from, c_to, c_date } = data;
  console.log(c_from, c_to, c_date);

  return (
    <>
      <div style={{ width: "66%", margin: "0 auto" }}>
        <table
          width="1000px"
          align="center"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "18px",
          }}
          cellpadding="0"
          cellspacing="0"
        >
          <tr>
            <td>
              <table
                width="100%"
                cellpadding="10px"
                cellspacing="0"
                style={{ padding: "5px" }}
              >
                <tr>
                  <td>
                    <img
                      // src="../Image/logo.png"
                      src={IMAGE_PATH_URL+"logo.png"}
                      style={{ width: "135px", marginLeft: "15px" }}
                      height="100px"
                      alt="Retro Packers and Movers Logo"
                    />
                  </td>
                  <td style={{ padding: "10px 35px" }}>
                    <table width="100%" cellpadding="5px" cellspacing="0">
                      <tr
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                          color: "#ff7d24",
                          paddingLeft: "30px",
                          // lineHeight:"1.6"
                        }}
                      >
                        <td style={{ padding: "10px" }}>
                          RETRO PACKERS AND MOVERS PVT. LTD.
                        </td>
                      </tr>
                      <tr style={{ padding: "10px" }}>
                        <td
                          style={{
                            fontWeight: "bold",
                            lineHeight: "1",
                            padding: "5px",
                          }}
                        >
                          Branch : 62/1818, Group NO. 7, Tagor Nagar,
                          Vikholi(E), Mumbai-400083.Plot No.492,Poli NO
                          B456,Near Dispenasary Village,Bijwasan,South Delhi
                          110061.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="6px" cellspacing="0">
                <tr style={{ fontSize: "20px" }} align="center">
                  <td style={{ fontWeight: "bold" }}>9990056755/9992222697</td>
                  <td>retropackers@gamil.com</td>
                  <td>www.retropackers.com</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="10px" cellspacing="0">
                <tr>
                  <td
                    width="60%"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    LR No:
                  </td>
                  <td
                    width="40%"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Branch:
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          cellPadding="5px"
          cellSpacing="0"
          border="2"
        >
          <thead>
            <tr
              style={{ backgroundColor: "black", color: "white" }}
              align="center"
            >
              <th style={{ height: "30px" }}>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th>
              {/* <th>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th> */}
            </tr>
          </thead>
          <tbody>
            {packageData &&
              packageData.length !== 0 &&
              packageData.map((data, index) => {
                return (
                  <tr key={index} align="center">
                    <td style={{ border: "1px solid grey" }}>{index + 1}</td>
                    <td style={{ border: "1px solid grey" }}></td>
                    <td style={{ border: "1px solid grey" }}>
                      {data.particular}{" "}
                    </td>
                    <td style={{ border: "1px solid grey" }}>{data.value} </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          cellPadding="5px"
          cellSpacing="0"
          border="2"
        >
          <thead>
            <tr
              style={{ backgroundColor: "black", color: "white" }}
              align="center"
            >
              <th style={{ height: "30px" }}>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th>
              <th>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th>
            </tr>
          </thead>
          <tbody>
            {packageData &&
              packageData.length !== 0 &&
              packageData.map((data, index) => {
                if ((index + 1) % 2 != 0) {
                  return (
                    <tr key={index} align="center">
                      <td style={{ border: "1px solid grey" }}>{index+1}</td>
                      <td style={{ border: "1px solid grey" }}></td>
                      <td style={{ border: "1px solid grey" }}>
                        {data.particular}{" "}
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        {data.value}{" "}
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index} align="center">
                      <td style={{ border: "1px solid grey" }}>{index+1}</td>
                      <td style={{ border: "1px solid grey" }}></td>
                      <td style={{ border: "1px solid grey" }}>
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                      </td>
                      <td style={{ border: "1px solid grey" }}>{index + 1}</td>
                      <td style={{ border: "1px solid grey" }}></td>
                      <td style={{ border: "1px solid grey" }}>
                        {data.particular}{" "}
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        {data.value}{" "}
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
          </table>

 <table
  style={{ width: "100%", borderCollapse: "collapse" }}
  cellPadding="5px"
  cellSpacing="0"
  border="2"
>
  <thead>
    <tr style={{ backgroundColor: "black", color: "white" }} align="center">
      <th style={{ height: "30px" }}>Sr.No.</th>
      <th>Method Of Packing</th>
      <th>PARTICULARS</th>
      <th>Value(Tpr)</th>
    </tr>
  </thead>
  <tbody style={{ display: "flex", flexDirection: "row" }}>
    <td style={{ flex: 1 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {packageData &&
            packageData.length !== 0 &&
            packageData.map((data, index) => {
              if ((index + 1) % 2 != 0) {
                return (
                  <tr key={index} align="center">
                    <td style={{ border: "1px solid grey" }}>{index + 1}</td>
                    <td style={{ border: "1px solid grey" }}></td>
                    <td style={{ border: "1px solid grey" }}>
                      {data.particular}{" "}
                    </td>
                    <td style={{ border: "1px solid grey" }}>
                      {data.value}{" "}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </td>
    <td style={{ flex: 1 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {packageData &&
            packageData.length !== 0 &&
            packageData.map((data, index) => {
              if ((index + 1) % 2 === 0) {
                return (
                  <tr key={index} align="center">
                    <td style={{ border: "1px solid grey" }}>{index + 1}</td>
                    <td style={{ border: "1px solid grey" }}></td>
                    <td style={{ border: "1px solid grey" }}>
                      {data.particular}{" "}
                    </td>
                    <td style={{ border: "1px solid grey" }}>
                      {data.value}{" "}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </td>
  </tbody>
</table> */}

        {/* <div>
          <table
            style={{ width: "50%", borderCollapse: "collapse" }}
            cellPadding="5px"
            cellSpacing="0"
            border="2"
            align="left"
          >
            <thead>
              <tr
                style={{ backgroundColor: "black", color: "white" }}
                align="center"
              >
                <th style={{ height: "30px" }}>Sr.No.</th>
                <th>Method Of Packing</th>
                <th>PARTICULARS</th>
                <th>Value(Tpr)</th>
              </tr>
            </thead>
            <tbody>
              {packageData &&
                packageData.length !== 0 &&
                packageData.map((data, index) => {
                  if ((index + 1) % 2 != 0) {
                    // print on left
                    return (
                      <tr key={index} align="center">
                        <td style={{ border: "1px solid grey" }}>
                          {index + 1}
                        </td>
                        <td style={{ border: "1px solid grey" }}></td>
                        <td style={{ border: "1px solid grey" }}>
                          {data.particular}{" "}
                        </td>
                        <td style={{ border: "1px solid grey" }}>
                          {data.value}{" "}
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
          <table
            style={{ width: "50%", borderCollapse: "collapse" }}
            cellPadding="5px"
            cellSpacing="0"
            border="2"
            align="right"
          >
            <thead>
              <tr
                style={{ backgroundColor: "black", color: "white" }}
                align="center"
              >
                <th style={{ height: "30px" }}>Sr.No.</th>
                <th>Method Of Packing</th>
                <th>PARTICULARS</th>
                <th>Value(Tpr)</th>
              </tr>
            </thead>
            <tbody>
              {packageData &&
                packageData.length !== 0 &&
                packageData.map((data, index) => {
                  if ((index + 1) % 2 === 0) {
                    // print on right
                    return (
                      <tr key={index} align="center">
                        <td style={{ border: "1px solid grey" }}>
                          {index + 1}
                        </td>
                        <td style={{ border: "1px solid grey" }}></td>
                        <td style={{ border: "1px solid grey" }}>
                          {data.particular}{" "}
                        </td>
                        <td style={{ border: "1px solid grey" }}>
                          {data.value}{" "}
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div> */}


        {/* <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          cellPadding="5px"
          cellSpacing="0"
          border="2"
        >
          <thead>
            <tr
              style={{ backgroundColor: "black", color: "white" }}
              align="center"
            >
              <th style={{ height: "30px" }}>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th>
              <th>Sr.No.</th>
              <th>Method Of Packing</th>
              <th>PARTICULARS</th>
              <th>Value(Tpr)</th>
            </tr>
          </thead>
          <tbody>
            {packageData &&
              packageData.length !== 0 &&
              packageData.map((data, index) => {
                return(<tr key={index} align="center">
                  <td style={{ border: "1px solid grey" }}>{index + 1}.</td>
                  <td style={{ border: "1px solid grey" }}></td>
                  <td style={{ border: "1px solid grey" }}></td>
                  <td style={{ border: "1px solid grey" }}></td>
                  <td style={{ border: "1px solid grey" }}>{index + packageData.length}.</td>
                  <td style={{ border: "1px solid grey" }}></td>
                  <td style={{ border: "1px solid grey" }}></td>
                  <td style={{ border: "1px solid grey" }}></td>
                </tr>;
                  )
              })}

          </tbody>
        </table> */}

        {/* {packageData &&
              packageData.length != 0 &&
              packageData.map((data, index) => {
                return (
                  if((index+1)/2 !=0){
                    
                    <tr key={index} align="center">
                    <td style={{ border: "1px solid grey" }}>{index + 1}.</td>
                    <td style={{ border: "1px solid grey" }}></td>
                    <td style={{ border: "1px solid grey" }}>
                    
                    {data.particular}{" "}
                    </td>
                    <td style={{ border: "1px solid grey" }}>{data.value} </td>
                  } else {
                      <td style={{ border: "1px solid grey" }}>{index + 2}.</td>
                      <td style={{ border: "1px solid grey" }}></td>
                      <td style={{ border: "1px solid grey" }}>{data.particular} </td>
                      <td style={{ border: "1px solid grey" }}>{data.value} </td>
                    }
                  </tr>
                );
              })} */}
        {/* {[...Array(50)].map((_, i) => (
            <tr key={i} align="center">
              <td style={{border:"1px solid grey"}}>{i + 1}.</td>
              <td style={{border:"1px solid grey"}}></td>
              <td style={{border:"1px solid grey"}}></td>
              <td style={{border:"1px solid grey"}}></td>
              <td style={{border:"1px solid grey"}}>{i + 31}.</td>
              <td style={{border:"1px solid grey"}}></td>
              <td style={{border:"1px solid grey"}}></td>
              <td style={{border:"1px solid grey"}}></td>
            </tr>
          ))} */}
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          cellPadding="5px"
          cellSpacing="0"
          // border="2"
        >
          <tr>
            <td>
              <table width="100%" cellpadding="10px" cellspacing="0">
                <tr>
                  <td>
                    <table width="33.33%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop: "20px",
                          }}
                        >
                          From
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          .......................................................
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          .......................................................
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          .......................................................
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          .......................................................
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table width="33.33%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop: "20px",
                          }}
                        >
                          To
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          ...................................................
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          ...................................................
                        </td>
                      </tr>

                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          ...................................................
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "20px" }}>
                          ...................................................
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table width="33.33%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td
                          style={{
                            fontSize: "20px",
                            textAlign: "right",
                            fontWeight: "bold",
                            paddingBottom: "70px",
                          }}
                        >
                          phone...................................
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table
                width="100%"
                cellpadding="10px"
                cellspacing="0"
                style={{ paddingBottom: "40px" }}
              >
                <tr>
                  <td
                    style={{
                      fontSize: "20px",
                      width: "70%",
                      fontWeight: "bold",
                    }}
                  >
                    Customer Signature:
                  </td>
                  <td
                    style={{
                      fontSize: "20px",
                      width: "30%",
                      fontWeight: "bold",
                    }}
                  >
                    Signature :
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      {/* <div>
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

        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>
        <td style={{ align: "right" }}></td>

        <table
          style={{
            width: "100%",
            cellPadding: "0",
            cellSpacing: "0",
            height: "20px",
            border: "1px",
            height: "20px",
            textAlign: "center",
          }}
        >
          <tbody>
            <tr>
              <td style={{ width: "10px" }}>Sr.No.</td>
              <td style={{ width: "120px" }}>Method Of Packing</td>
              <td>PARTICULARS</td>
              <td style={{ width: "120px" }}>Value(Tpr)</td>

              <td style={{ width: "10px" }}>Sr.No.</td>
              <td style={{ width: "120px" }}>Method Of Packing</td>
              <td>PARTICULARS</td>
              <td style={{ width: "120px" }}>Value(Tpr)</td>
            </tr>
            {packageData &&
              packageData.map((data, index) => {
                const a = index + 1;
                // const updatedValue = data.value + 1;
                return (
                  <tr>
                    <td>{a}</td>
                    <td></td>
                    <td>{data.particular}</td>
                    <td>{data.value}</td>
                  </tr>
                );
              })}
            <div></div>
            <tr>
            <td>1.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>31.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>32.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>33.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>34.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>35.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>36.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>37.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>38.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>39.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>40.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>41.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>42.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>43.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>14.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>44.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>15.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>45.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>16.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>46.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>17.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>47.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>48.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>19.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>49.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>50.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>21.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>51.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>22.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>52.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>23.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>53.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>24.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>54.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>25.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>55.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>26.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>56.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>27.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>57.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>28.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>58.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>29.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>59.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>30.</td>
            <td></td>
            <td></td>
            <td></td>

            <td>60.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr> 
          </tbody>
        </table>
        <table style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}>
          <tbody>
            <tr>
              <td style={{ fontSize: "20px", align: "right" }}>
                Party Signature
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
};
export default PackingListLayout;
