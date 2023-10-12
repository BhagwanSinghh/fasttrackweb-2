import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { inVoiceDetail } from "../../services/api/api.service";
import { IMAGE_PATH_URL } from "../../constants/path";

export const InvoiceLayout = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const { document_id } = params;
  console.log(document_id, "docss");
  // ------------------location
  const location = useLocation();
  console.log(location, "invoice locatin data");
  const lrNumber = location.emaill;

  // ----------------
  // useEffect(()=>{
  //   console.log(lrNumberLocal,"local get item")
  // },[])

  useEffect(() => {
    const lrNumberLocal = localStorage.getItem("LrNumber");
    inVoiceDetail(lrNumberLocal).then((ee) => setData(ee.data.data[0]));
    // inVoiceDetail(`${document_id}`).then((ee)=>setData(ee.data.data[0]))
  }, []);
  const { full_name, address, gstin, inv_date, cnn_no } = data;
  console.log(
    full_name,
    address,
    gstin,
    inv_date,
    cnn_no,
    "full_name,address,gstin,inv_date,cnn_no"
  );
  return (
    <div>
      <table
        width="1000px"
        align="center"
        style={{
          padding: "0 10px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "15px",
        }}
        cellpadding="0"
        cellspacing="0"
      >
        <tr>
          <td
            align="center"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingTop: "10px",
              border: "black 2px solid",
              borderBottom: "none",
            }}
          >
            TAX INVOICE
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "black 2px solid",
              borderBottom: "none",
              borderTop: "none",
            }}
          >
            <table
              width="100%"
              cellpadding="10px"
              cellspacing="0"
              style={{ padding: "5px" }}
            >
              <tr>
                <td>
                  <img
                    // src="Images/logo.png"
                    src={IMAGE_PATH_URL+"logo.png"}
                    height="100px"
                    alt="Retro Packers and Movers Logo"
                  />
                </td>
                <td>
                  <table width="100%" cellpadding="5px" cellspacing="0">
                    <tr
                      style={{
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "#ff7d24",
                      }}
                    >
                      <td>RETRO PACKERS AND MOVERS PVT. LTD.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        {" "}
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
          <td style={{ border: "black 2px solid", borderTop: "none" }}>
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
          <td style={{ border: "black 2px solid", borderTop: "none" }}>
            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              style={{ fontSize: "17px" }}
            >
              <tr>
                <td width="60%" style={{ borderRight: "black 2px solid" }}>
                  <table width="100%" cellpadding="10" cellspacing="0">
                    <tr>
                      <td style={{ paddingBottom: "50px" }}> M/s.</td>
                    </tr>
                    <tr>
                      <td>GSTIN NO.:</td>
                    </tr>
                    <tr>
                      <td>State &amp; Code:</td>
                    </tr>
                  </table>
                </td>
                <td width="40%">
                  <table width="100%" cellpadding="8" cellspacing="0">
                    <tr>
                      <td style={{ borderBottom: "2px solid" }}>Invoice No.</td>
                    </tr>
                    <tr>
                      <td style={{ borderBottom: "2px solid" }}>Challan No.</td>
                    </tr>
                    <tr>
                      <td style={{ borderBottom: "2px solid" }}>
                        Transportation Mode
                      </td>
                    </tr>
                    <tr>
                      <td style={{ borderBottom: "2px solid" }}>Vehicle No.</td>
                    </tr>
                    <tr>
                      <td style={{ borderBottom: "2px solid" }}>
                        Date & Time Of Supply:
                      </td>
                    </tr>
                    <tr>
                      <td>Place Of Supply:</td>
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
              cellpadding="10"
              cellspacing="0"
              style={{ border: "2px solid", borderTop: "none" }}
            >
              <tr>
                <th
                  width="7%"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                >
                  Sr No.
                </th>
                <th
                  width="44%"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                >
                  DESCRIPTION OF GOODS
                </th>
                <th
                  width="12%"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                >
                  HSN CODE
                </th>
                <th
                  width="12%"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                >
                  WEIGHT
                </th>
                <th
                  width="12%"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                >
                  RATE PER KG
                </th>
                <th width="13%" style={{ borderBottom: "2px solid" }}>
                  TOTAL RS.
                </th>
              </tr>

              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                >
                  Being the Transportation Chrges for Carrying
                </td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                ></td>
                <td style={{ borderBottom: "2px solid" }}></td>
              </tr>
              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                >
                  Your_________ Pkgs. Goods{" "}
                </td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                ></td>
                <td style={{ borderBottom: "2px solid" }}></td>
              </tr>
              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                >
                  From
                </td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                ></td>
                <td style={{ borderBottom: "2px solid" }}></td>
              </tr>
              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                >
                  To
                </td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                ></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    fontSize: "14px",
                  }}
                ></td>
                <td style={{ borderBottom: "2px solid" }}></td>
              </tr>
              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                    paddingBottom: "30%",
                    fontSize: "14px",
                  }}
                >
                  Being the Transportation Chrges as per the details
                </td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td></td>
              </tr>
              <tr>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ borderRight: "2px solid" }}></td>
                <td style={{ fontWeight: "bold", textAlign: "center" }}>350</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      {/* ---------------------------- */}
      {/* <table> */}

      {/* <tr>
  <td>
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style={{ border: "2px solid", borderTop: "none", fontSize: "17px" }}
      >
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td
                style={{
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  padding: "10px",
                }}
              >
                Invoice Value (Rs. In Words):
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  padding: "18px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  padding: "18px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  padding: "10px",
                }}
              >
                Payment
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderRight: "2px solid",
                  borderBottom: "2px solid",
                  paddingLeft: "10px",
                  padding: "10px",
                }}
              >
                Certifies that the particulars given above are true and
                correct.
              </td>
            </tr>
            <tr>
              <td width="63%">
                <table width="100%" cellpadding="0px" cellspacing="0">
                  <tr>
                    <td>
                      <table width="100%" cellpadding="5px" cellspacing="0">
                        <tr>
                          <td
                            width="50%"
                            style={{
                              fontWeight: "bold",
                              color: "#ff7d24",
                              fontSize: "20px",
                            }}
                            >
                            GSTIN :
                          </td>
                          <td
                            width="50%" 
                            style={{
                              textAlign: "end",
                              fontWeight: "bold",
                              color: "#ff7d24",
                              borderRight: "black 2px solid",
                            }}
                            >
                            TAN No DELR45400F
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        color: "#ff7d24",
                        fontSize: "20px",
                        padding: "5px",
                        borderRight: "black 2px solid",
                      }}
                      >
                      PAN No AAMCR5056N | CIN No U 52293DL2023PTC410940
                    </td>
                  </tr>
                </table>
              </td>
              <td width="37%" style={{ verticalAlign: "top" }}>
                <table width="100%" cellpadding="5px" cellspacing="0">
                  <tr>
                    <td
                      width="50%"
                      style={{
                        borderBottom: "2px solid",
                        borderRight: "2px solid",
                      }}
                    >
                      TOTAL RS.
                    </td>
                    <td width="50%" style={{ borderBottom: "2px solid" }}></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "2px solid",
                        borderRight: "2px solid",
                      }}
                      >
                      CGST
                    </td>
                    <td style={{ borderBottom: "2px solid" }}></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "2px solid",
                        borderRight: "2px solid",
                      }}
                      >
                      SGST
                    </td>
                    <td style={{ borderBottom: "2px solid" }}></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "2px solid",
                        borderRight: "2px solid",
                      }}
                    >
                      IGST
                    </td>
                    <td style={{ borderBottom: "2px solid" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "end", paddingRight: "10px" }}>
                      Authorised Signature
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr> */}

                      {/* </table> */}
          
          </div>
  );
};

export default InvoiceLayout;
      {/* ----------------------------------- */}
   



      {/* <div>
        <table
          width="1000px"
          align="center"
          style={{
            padding: "0 10px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "15px",
          }}
          cellPadding="0"
          cellSpacing="0"
        >
          <tr>
            <td
              align="center"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                paddingTop: "10px",
                border: "black 2px solid",
                borderBottom: "none",
              }}
            >
              TAX INVOICE
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "black 2px solid",
                borderBottom: "none",
                borderTop: "none",
              }}
            >
              <table
                width="100%"
                cellPadding="10px"
                cellSpacing="0"
                style={{ padding: "5px" }}
              >
                <tr>
                  <td>
                    <img
                      src={logo}
                      style={{ width: "135px", marginLeft: "15px" }}
                      height="100px"
                      alt="Retro Packers and Movers Logo"
                    />
                  </td>
                  <td style={{ padding: "10px 35px" }}>
                    <table width="100%" cellPadding="5px" cellSpacing="0">
                      <tr
                        style={{
                          fontSize: "38px",
                          fontWeight: "bold",
                          color: "#ff7d24",
                        }}
                      >
                        <td>RETRO PACKERS AND MOVERS PVT. LTD.</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>
                          {" "}
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
            <td style={{ border: "black 2px solid", borderTop: "none" }}>
              <table width="100%" cellPadding="6px" cellSpacing="0">
                <tr style={{ fontSize: "20px" }} align="center">
                  <td style={{ fontWeight: "bold" }}>9990056755/9992222697</td>
                  <td>retropackers@gamil.com</td>
                  <td>www.retropackers.com</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div> */}

      {/* <table
        style={{
          width: "800px",
          align: "center",
          fontFamily: " Arial",
          fontSize: "13px",
          cellPadding: "0",
          cellSpacing: "0",
          border: "black 2px solid",
        }}
      >
        <tr>
          <td
            style={{
              align: "center",
              fontFamily: "Arial",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            INVOICE
          </td>
        </tr>
        <tr>
          <td>
            <table
              style={{ width: "100%", cellPadding: "0", cellSpacing: "0" }}
            >
              <tr>
                <td width="170">
                  <img
                    src={logo}
                    style={{ height: "80px" }}
                    alt="Retro Packers and Movers Logo"
                  />
                </td>
                <td>
                  <table>
                    <tr
                      style={{
                        fontSize: "28px",
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
              bgColor: "#C02228",
              padding: "10px",
              color: "white",
              align: "center",
            }}
          >
            Retro Packers and Movers, Old Delhi Road, Gurgaon, Haryana (India)
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "800px",
          align: "center",
          cellPadding: "0",
          cellSpacing: "0",
        }}
      >
        <tr>
          <td style={{ border: "black 2px solid", width: "60%" }}>
            <table>
              <tr>
                <td>To,</td>
              </tr>
              <tr>
                <td>MS./MR./MRS. : {full_name}</td>
              </tr>
              <tr>
                <td>ADDRESS : {address}</td>
              </tr>
              <tr>
                <td>GSTIN:{gstin}</td>
              </tr>
            </table>
          </td>
          <td>
            <table
              style={{
                border: "3px",
                cellpadding: "12",
                borderColor: "#000000",
                borderCollapse: "collapse",
                cellSpacing: "0",
                width: "100%",
              }}
            >
              <tr>
                <td>INVOICE NO. : </td>
                <td>2020002</td>
              </tr>
              <tr>
                <td>DATE:</td>
                <td>{inv_date}</td>
              </tr>
              <tr>
                <td>C.N.No.</td>
                <td>{cnn_no}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "800",
          align: "center",
          fontFamily: "Arial",
          fontSize: "20px",
          padding: "15px 0",
          cellPadding: "0",
          cellSpacing: "0",
        }}
      >
        <tr>
          <td
            style={{ color: "red", fontWeight: "bold", paddingBottom: "15px" }}
          >
            Dear Sir/Madam,
          </td>
        </tr>
        <tr>
          <td>
            We thank you very much for your enquiry for shifting of your
            belongings.
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "800px",
          align: "center",
          border: "#000000 2px solid",
          fontFamily: "Arial",
          fontSize: "15px",
          cellPadding: "10",
          cellSpacing: "0",
        }}
      >
        <tr style={{ backgroundColor: "rgb(190, 185, 185)" }}>
          <th
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            SR. NO.
          </th>
          <th
            style={{
              borderRight: "#000000 1px solid",
              width: "40%",
              borderCollapse: "collapse",
            }}
          >
            PARTICULARS / DETAILS
          </th>
          <th style={{ borderRight: "#000000 1px solid", width: "10%" }}>
            HSN CODE
          </th>
          <th style={{ borderRight: "#000000 1px solid", width: "10%" }}>
            WEIGHT{" "}
          </th>
          <th
            style={{
              textAlign: "center",
              borderRight: "#000000 1px solid",
              width: "10%",
            }}
          >
            RATE{" "}
          </th>
          <th
            style={{
              textAlign: "center",
              borderRight: "#000000 1px solid",
              width: "20%",
            }}
          >
            AMOUNT
          </th>
        </tr>
        <tr>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            1
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            Being the Transportation of your Household goods
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: " #000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              textAlign: "center",
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: " collapse",
            }}
          >
            4500.00
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            2
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            mumbai
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              textAlign: "center",
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            --
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            3
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            pune
          </td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          ></td>
          <td
            style={{
              textAlign: "center",
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
            }}
          >
            --
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "800",
          align: "center",
          border: "#000000 2px solid",
          cellPadding: "0",
          cellSpacing: "0",
        }}
      >
        <tr>
          <td width="70%">
            <table
              style={{
                width: "100%",
                align: "center",
                cellPadding: "5",
                cellSpacing: "0",
                fontWeight: "bold",
              }}
            >
              <tr>
                <td>We are registered Under MSMED Act.</td>
                <td style={{ textAlign: "end", color: "red" }}>
                  TOTAL FREIGHT
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: "end" }}>CGST @ 3 </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: "end" }}>SGST @ 3</td>
              </tr>
              <tr>
                <td>GST Payable by : Transporter </td>
                <td style={{ textAlign: "end" }}>IGST @ 3</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: "end" }}>ADVANCE AMT. </td>
              </tr>
              <tr>
                <td>Rupees: Four Thousand Nine Hundred Five Only </td>
                <td style={{ textAlign: "end" }}>BALANCE AMT. </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: "end" }}>G.TOTAL</td>
              </tr>
            </table>
          </td>
          <td
            style={{
              width: "30%",
              align: "center",
            }}
          >
            <table
              style={{
                width: "100%",
                border: "3",
                cellPadding: "5",
                borderColor: " #000000",
                borderCollapse: "collapse",
                textAlign: "center",
                cellSpacing: "0",
              }}
            >
              <tr>
                <td style={{ color: "red" }}>Rs.</td>
                <td style={{ fontWeight: "bold", color: "red" }}>4500.00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>135.00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>135.00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>135.00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>4905.00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>00</td>
              </tr>
              <tr>
                <td>Rs.</td>
                <td style={{ fontWeight: "bold" }}>4905.00</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "800px",
          align: "center",
          marginTop: "100px",
        }}
      >
        <tr>
          <td
            style={{ color: "red", fontWeight: "bold", paddingBottom: "30px" }}
          >
            TERMS & CONDITIONS:
          </td>
        </tr>
        <tr>
          <td>
            1. Interest @ 18 % p.a. will be charged extra. If Payment is not
            received on or before due date.
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "10px" }}>
            2. Subject to Navi Mumbai Jurisdiction
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: "red",
              textAlign: "end",
              fontWeight: "bold",
              fontSize: "22px",
              paddingBottom: "15px",
            }}
          >
            RETRO PACKERS AND MOVERS
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              paddingBottom: "15px",
            }}
          >
            Receiver Signature
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "end",
              fontSize: "20px",
              paddingBottom: "15px",
            }}
          >
            Account/Manager
          </td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
              paddingBottom: "15px",
              fontSize: "20px",
            }}
          >
            Thanking You and Looking Forward to your Best Service To you.
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: "rgb(207, 207, 34)",
              textAlign: "center",
              paddingBottom: "15px",
              fontSize: "20px",
            }}
          >
            Retro Packers and Movers For All Over India.
          </td>
        </tr>
        <tr>
          <td style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
            THIS IS COMPUTERIZED DOCUMENT!
          </td>
        </tr>
      </table> */}

{
  /* <tr>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}>
              Being the Transportation Chrges for Carrying
            </td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}>
              Your_________ Pkgs. Goods{" "}
            </td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}>From</td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}>To</td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td style={{ borderRight: "2px solid" }}></td>
            <td></td>
          </tr> */
}
