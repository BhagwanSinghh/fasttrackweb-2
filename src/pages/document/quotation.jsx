import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Image/logo.png";

const QuotationLayout = () => {
  // --------------------LOCATION DATA
  const location = useLocation();
  console.log(location, "quotation locatin data");
  const lrNumber = location.emaill;
  useEffect(() => {
    const lrNumberLocal = localStorage.getItem("LrNumber");
  });
// ------------
  console.log(lrNumber, "get lrnumber");
  return (
    <>
    {/* <div style={{width:"66%",margin:"0 auto"}}>
      <table
        width="1000px"
        align="center"
        style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "18px" }}
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
                    src={logo}
                    style={{width:"135px" , marginLeft:"15px"}}
                    height="100px"
                    alt="Retro Packers and Movers Logo"

                  />
                </td>
                <td style={{padding:"10px 35px"}}>
                  <table width="100%" cellpadding="5px" cellspacing="0">
                    <tr
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "#ff7d24",
                        paddingLeft:"30px",
                        // lineHeight:"1.6"
                      }}
                    >
                      <td style={{padding:"10px"}}>RETRO PACKERS AND MOVERS PVT. LTD.</td>
                    </tr>
                    <tr style={{padding:"10px"}}>
                      <td style={{ fontWeight: "bold", lineHeight:"1" ,padding:"5px" }}>
                        Branch : 62/1818, Group NO. 7, Tagor Nagar, Vikholi(E),
                        Mumbai-400083.Plot No.492,Poli NO B456,Near Dispenasary
                        Village,Bijwasan,South Delhi 110061.
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
            <th>Sr.No.</th>
            <th>Method Of Packing</th>
            <th>PARTICULARS</th>
            <th>Value(Tpr)</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(50)].map((_, i) => (
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
          ))}
        </tbody>
      </table>
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
                  style={{ fontSize: "20px", width: "70%", fontWeight: "bold" }}
                >
                  Customer Signature:
                </td>
                <td
                  style={{ fontSize: "20px", width: "30%", fontWeight: "bold" }}
                >
                  Signature :
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      </div> */}

      {/* <tr>
      <td style={{border: '#000 2px solid'}}>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
          <td width="75%" style={{borderRight: '#000 2px solid', padding: 4}}>
              <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
              <td>
                    <table width="100%" cellpadding="5" cellspacing="0">
                      <tr>
                        <td width="30%">
                          <table width="100%" cellpadding="5" cellspacing="0" style={{border: '#000 2px solid'}}>
                          <tr>
                              <td style={{fontWeight: 'bold', textAlign: 'center', color: '#ff7d24'}}>NOTICE</td>
                              </tr>
                              <tr>
                              <td style={{fontSize: 10, color: '#ff7d24'}}>
                              The consignment covered by this Lorry Receipt shall be stored at the destination under the
                              control of the Transport Operator and shall be delivered to or the order of the Consignee
                              Bank whose name is mentioned in the Lorry Receipt It will under no circumstances delivered
                                to anyone without the written authority from the Consignee Bank or its order endorsed on the
                                Consignee copy or on a separate Letter of Authority.
                                </td>
                                </tr>
                          </table>
                          <table width="100%" cellpadding="5" cellspacing="0" style={{border: '#000 2px solid', marginTop: 5}}>
                            <tr>
                              <td>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style={{color: '#ff7d24', fontWeight: 'bold'}}>PAN No. :-</td>
                                  </tr>
                                  <tr>
                                    <td style={{color: '#ff7d24', fontWeight: 'bold'}}>GST No. :-</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="30%" style={{verticalAlign: 'top'}}>
                          <table width="100%" cellpadding="5" cellspacing="0">
                            <tr>
                              <td style={{fontWeight: 'bold', textAlign: 'center', color: '#ff7d24'}}>INSURANCE</td>
                            </tr>
                          </table>
                          <table width="100%" cellpadding="5" cellspacing="0" style={{border: '#000 2px solid', height: 185}}>
                            <tr>
                              <td style={{fontSize: 12}}>
                                The Consigner has that- *He has not insured the consignment OR He has insured the consignment
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td>Company:</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td>Policy No:</td>
                                          <td>Date:</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td>Amount:</td>
                                          <td>Risk:</td>
                                        </tr>
                                        </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="40%" style={{verticalAlign: 'top'}}>
                      <table width="100%" cellpadding="5" cellspacing="0">
                        <tr>
                          <td style={{fontWeight: 'bold', textAlign: 'center', color: '#ff7d24'}}>RECEIVED FROM</td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="5" cellspacing="0" style={{border: '#000 2px solid'}}>
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td>Name:</td>
                              </tr>
                              <tr>
                                <td>Address:</td>
                              </tr>
                              <tr>
                                <td>GSTIN:</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="5" cellspacing="0" style={{border: '#000 2px solid', marginTop: 5}}>
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style={{color: '#ff7d24', fontWeight: 'bold'}}>Lorry No.:-</td>
                              </tr>
                              <tr>
                                <td style={{color: '#ff7d24', fontWeight: 'bold'}}>Date:-</td>
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
          </table>
        </td>
        <td width="25%" style={{padding: 4}}>
          <table width="100%" cellpadding="0" cellspacing="0" style={{border: '#000 2px solid', height: 200}}>
            <tr>
              <td style={{fontWeight: 'bold', textAlign: 'center', color: '#ff7d24'}}>FOR OFFICE USE ONLY</td>
            </tr>
            <tr>
              <td>
                <table width="100%" cellpadding="5" cellspacing="0">
                  <tr>
                    <td>L.R No:</td>
                  </tr>
                  <tr>
                    <td>Date:</td>
                  </tr>
                  <tr>
                    <td>Branch:</td>
                  </tr>
                  <tr>
                    <td>Received By:</td>
                  </tr>
                  <tr>
                    <td>Signature:</td>
                  </tr>
                  <tr>
                    <td>Remark:</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr> */}
    </>
  );
};
export default QuotationLayout;
