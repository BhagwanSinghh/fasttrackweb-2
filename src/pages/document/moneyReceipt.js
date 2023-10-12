import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { moneyReceiptDetail } from "../../services/api/api.service";
import { IMAGE_PATH_URL } from "../../constants/path";

const MoneyReceiptLayout = () => {
  const [data, setData] = useState([]);
  const { document_id } = useParams();
  console.log("document_id", document_id);
  // --------------------LOCATION DATA
  const location = useLocation();
  console.log(location, "money locatin data");
  const lrNumber = location.emaill;

  useEffect(() => {
    const lrNumberLocal = localStorage.getItem("LrNumber");
    moneyReceiptDetail(lrNumberLocal).then((item) =>
      setData(item.data.data[0])
    );
    // moneyReceiptDetail(`${document_id}`).then((item)=>setData(item.data.data[0]))
  }, []);
  const {
    amount,
    bill_date,
    bill_no,
    ch_date,
    ch_dd_no,
    ex,
    ex_to,
    mr_date,
    received_from,
  } = data;
  console.log(data,"dataa")
  return (
    <>
      <table
        width="1000px"
        align="center"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "18px",
          border: "black 2px solid",
          marginLeft: "18%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <div style={{ padding: "0.5%" }}>
            <tr>
              <td
                align="center"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  // paddingTop: "10px",
                }}
              >
                Money Recipt
              </td>
            </tr>
            <tr>
              <td>
                <table
                  width="100%"
                  cellPadding="10px"
                  cellSpacing="0"
                  style={{ padding: "5px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <img
                          // src="Images/logo.png"
                          src={IMAGE_PATH_URL+"logo.png"}
                          style={{ width: "135px", marginLeft: "15px" }}
                          height="100px"
                          alt="Retro Packers and Movers Logo"
                        />
                      </td>
                      <td style={{ padding: "10px 35px" }}>
                        <table width="100%" cellPadding="5px" cellSpacing="0">
                          <tbody>
                            <tr
                              style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "#ff7d24",
                              }}
                            >
                              <td>RETRO PACKERS AND MOVERS PVT. LTD.</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: "bold" }}>
                                Branch : 62/1818, Group NO. 7, Tagor Nagar,
                                Vikholi(E), Mumbai-400083.Plot No.492,Poli NO
                                B456,Near Dispenasary Village,Bijwasan,South
                                Delhi 110061.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" cellPadding="6px" cellSpacing="0">
                  <tbody>
                    <tr style={{ fontSize: "20px" }} align="center">
                      <td style={{ fontWeight: "bold" }}>
                        9990056755/9992222697
                      </td>
                      <td>retropackers@gamil.com</td>
                      <td>www.retropackers.com</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td width="70%" style={{ fontWeight: "bold" }}>
                        No.
                      </td>
                      <td width="30%">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>Date</td>
                              <td
                            width="100%"
                            style={{ borderBottom: "1px black solid" }}
                          >{mr_date} </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style={{ padding: "5px" }}
                >
                  <tr>
                    <td>
                      <table width="100%">
                        <tr>
                          <td width="24%">Recived with thanks from</td>
                          <td
                            width="76%"
                            style={{ borderBottom: "1px black solid" }}
                          >{received_from}</td>
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
                  cellpadding="0"
                  cellspacing="0"
                  style={{ padding: "5px" }}
                >
                  <tr>
                    <td width="70%">
                      <table width="100%">
                        <tr>
                          <td width="47%">
                            On account of our C.N. No./ Bill No.
                          </td>
                          <td
                            width="53%"
                            style={{ borderBottom: "1px black solid" }}
                          >{bill_no} </td>
                        </tr>
                      </table>
                    </td>
                    <td width="30%">
                      <table width="100%">
                        <tr>
                          <td>Date</td>
                          <td
                            width="100%"
                            style={{ borderBottom: "1px black solid",textAlign:"center" }}
                          >{bill_date} </td>
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
                  cellpadding="0"
                  cellspacing="0"
                  style={{ padding: "5px" }}
                >
                  <tr>
                    <td width="50%">
                      <table width="100%">
                        <tr>
                          <td>Ex</td>
                          <td
                            width="100%"
                            style={{ borderBottom: "1px black solid" ,textAlign:"center"}}
                          >{ex} </td>
                        </tr>
                      </table>
                    </td>
                    <td width="50%">
                      <table width="100%">
                        <tr>
                          <td>To</td>
                          <td
                            width="100%"
                            style={{ borderBottom: "1px black solid" ,textAlign:"center"}}
                          >{ex_to} </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "5px" }}>
                <table width="100%">
                  <tr>
                    <td width="15%">The Sum of Rs.</td>
                    <td
                      width="85%"
                      style={{ borderBottom: "1px black solid" }}
                    >{amount} </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style={{ padding: "5px", marginBottom: "5px" }}
                >
                  <tr>
                    <td width="70%">
                      <table width="100%">
                        <tr>
                          <td width="35%">By Cash/ Cheque/ DD No.</td>
                          <td
                            width="65%"
                            style={{ borderBottom: "1px black solid" }}
                          >{ch_dd_no} </td>
                        </tr>
                      </table>
                    </td>
                    <td width="30%">
                      <table width="100%">
                        <tr>
                          <td>Date</td>
                          <td
                            width="100%"
                            style={{ borderBottom: "1px black solid" ,textAlign:"center"}}
                          >{ch_date} </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </div>

          <div style={{ padding: "5px", borderTop: "2px solid black" }}>
            <table width="100%" cellpadding="5px" cellspacing="0">
              <tr>
                <td>
                  <table
                    width="100%"
                    cellpadding="5px"
                    cellspacing="0"

                    // style={{ borderBottom:"1px solid black"  }}
                  >
                    <tr>
                      <td width="5%" style={{ padding: "5px" }}>
                        Rupees
                      </td>
                      <td width="45%">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td
                              style={{
                                border: "2px black solid",
                                height: "30px",
                                width: "150px",
                                
                              }}
                            >{amount} </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" align="center">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td
                              style={{
                                border: "2px black solid",
                                height: "90px",
                                width: "80px",
                              }}
                            ></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="5px" cellspacing="0">
                    <tr>
                      <td width="50%">Subject to Realization of cheque</td>
                      <td
                        width="50%"
                        style={{
                          textAlign: "center",
                          color: "#ff7d24",
                          fontWeight: "bold",
                        }}
                      >
                        For RETRO PACKERS AND MOVERS PVT. LTD.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>

          {/*  */}
        </tbody>
      </table>
    </>
  );
};
export default MoneyReceiptLayout;

{
  /* <table
        style={{
          width: "800px",
          align: "center",
          fontFamily: "Arial",
          fontSize: "16px",
          border: "black 2px solid",
          cellPadding: "0",
          cellSpacing: "0",
        }}
      >
        <tr>
          <td
            style={{
              align: "center",
              fontFamily: "Arial",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            <table
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              <tr>
                <td>Money Recipt</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                padding: "5px",
              }}
            >
              <tr>
                <td style={{ width: "170px" }}>
                  <img
                    src={logo}
                    style={{ height: "80" }}
                    alt="Retro Packers and Movers Logo"
                  />
                </td>
                <td>
                  <table>
                    <tr
                      style={{
                        fontSize: "26px",
                        fontWeight: "bold",
                        color: "#C02228",
                      }}
                    >
                      <td>RETRO PACKER AND MOVERS</td>
                    </tr>
                    <tr>
                      <td>Packers and Movers</td>
                    </tr>
                  </table>
                </td>
                <td style={{ align: "right" }}>
                  <p style={{ padding: "0", margin: "0" }}>
                    9891364199, 9599067374
                  </p>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                  >
                    info@retropackers.com
                  </p>
                  <p style={{ padding: "0", margin: "0" }}>
                    www.retropackers.com
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td
            style={{
              bgcolor: "#C02228",
              padding: "10px",
              color: "white",
              align: "center",
            }}
          >
            Retro Packers and Movers, Old Delhi Road, Gurgaon, Haryana (India)
          </td>
        </tr>
        <tr>
          <td>
            <table
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                paddingTop: "40px",
                paddingLeft: "5px",
                paddingBottom: "5px",
              }}
            >
              <tr>
                <td style={{ width: "70%", fontWeight: "bold" }}>No.</td>
                <td style={{ width: "30%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>Date</td>
                      <td
                        style={{
                          width: "100%",
                          borderBottom: "1px black solid",
                        }}
                      >{mr_date}</td>
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
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                padding: "5px",
              }}
            >
              <tr>
                <td>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td style={{ width: "24%" }}>Recived with thanks from</td>
                      <td
                        style={{
                          width: "76%",
                          borderBottom: "1px black solid",
                        }}
                      >{received_from}</td>
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
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                padding: "5px",
              }}
            >
              <tr>
                <td style={{ width: "70%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td style={{ width: "47%" }}>
                        On account of our C.N. No./ Bill No.
                      </td>
                      <td
                        style={{
                          width: "53%",
                          borderBottom: "1px black solid",
                        }}
                      >{bill_no}</td>
                    </tr>
                  </table>
                </td>
                <td style={{ width: "30%" }}>
                  <table style={{ width: "70%" }}>
                    <tr>
                      <td>Date</td>
                      <td
                        style={{
                          width: "100%",
                          borderBottom: "1px black solid",
                        }}
                      >{bill_date}</td>
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
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                padding: "5px",
              }}
            >
              <tr>
                <td style={{ width: "53%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>Ex</td>
                      <td
                        style={{
                          width: "100%",
                          borderBottom: "1px black solid",
                        }}
                      >{ex}</td>
                    </tr>
                  </table>
                </td>
                <td style={{ width: "50%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>To</td>
                      <td
                        style={{
                          width: "100%",
                          borderBottom: "1px black solid",
                        }}
                      >{ex_to}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "5px" }}>
            <table style={{ width: "100%" }}>
              <tr>
                <td style={{ width: "15%" }}>The Sum of Rs.</td>
                <td
                  style={{ width: "85%", borderBottom: "1px black solid" }}
                >{amount}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                padding: "5px",
              }}
            >
              <tr>
                <td style={{ width: "70%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td style={{ width: "35%" }}>By Cash/ Cheque/ DD No.</td>
                      <td
                        style={{
                          width: "64%",
                          borderBottom: "1px black solid",
                        }}
                      >{ch_dd_no}</td>
                    </tr>
                  </table>
                </td>
                <td style={{ width: "30%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>Date</td>
                      <td
                        style={{
                          width: "100%",
                          borderBottom: "1px black solid",
                        }}
                      >{ch_date}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr style={{ width: "100%" }}>
          <td>
            <table
              style={{
                width: "100%",
                cellPadding: "0",
                cellSpacing: "0",
                borderTop: "2px black solid",
              }}
            >
              <tr>
                <td>
                  <table
                    style={{
                      width: "100%",
                      cellPadding: "0",
                      cellSpacing: "0",
                      paddingTop: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    <tr>
                      <td style={{ width: "10px", paddingTop: "20px" }}>
                        Rupees
                      </td>
                      <td>
                        <table
                          style={{
                            width: "20%",
                            cellPadding: "0",
                            cellSpacing: "0",
                            padding: "5px",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                border: "2px black solid",
                                textAlign: "left",
                                height: "30px",
                              }}
                            >{amount}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: "30px" }}>
            <table
              style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}
            >
              <tr>
                <td style={{ width: "50%" }}>
                  Subject to Realization of cheque
                </td>
                <td style={{ width: "50%", textAlign: "center" }}>
                  For Retro Packers and Movers
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> */
}
