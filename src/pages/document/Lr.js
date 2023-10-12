import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { lrlayoutDetail } from "../../services/api/api.service";
import { IMAGE_PATH_URL } from "../../constants/path";


const LRLayout = () => {
const[data,setData] = useState([])
const {document_id} = useParams()


console.log('document_id',document_id)
// ---------------------
const location=useLocation()
console.log(location,"lr locatin data")
const lrNumber=location.emaill

useEffect(()=>{
  const lrNumberLocal=localStorage.getItem('LrNumber')
  lrlayoutDetail(lrNumberLocal).then(ee=>setData(ee.data.data[0]))
  // lrlayoutDetail(`${document_id}`).then(ee=>setData(ee.data.data[0]))
},[])
console.log(data,"221212121")

const {consignee_address, consignee_mob,consignee_name,consigner_address,consigner_mob,consigner_name,freight_charges,loading_charges,lr_date,lr_description
,lr_from,lr_otp,lr_to,p_marks,packing_charges,sess_token,st_charges,unloading_charges,unpacking_charges,value_rs} = data


  return (
    <div style={{width:"70%",margin:"auto"}}>
      <table
        style={{
          width: "800px",
          align: "center",
          fontFamily: "Arial",
          fontSize: "13px",
          celLPadding: "0",
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
                <td style={{ width: "170" }}>
                  <img
                    src={IMAGE_PATH_URL+"logo11.png"}
                    style={{ height: "80" }}
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
                    {consignee_mob},{consigner_mob}
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
                <td>MS./MR./MRS. : {consigner_name}</td>
              </tr>
              <tr>
                <td>ADDRESS : {consigner_address}</td>
              </tr>
              <tr>
                <td>GSTIN:</td>
              </tr>
            </table>
          </td>
          <td>
            <table
              style={{
                border: "3",
                cellPadding: "12",
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
                <td>DATE: </td>
                <td>{lr_date}</td>
              </tr>
              <tr>
                <td>C.N.No.</td>
                <td></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: "800px",
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
              textAlign: "center",
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
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
              textAlign: "center",
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
              borderRight: "#000000 1px solid",
              width: "10%",
              borderCollapse: "collapse",
              textAlign: "center",
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
          <td style={{ width: "70%" }}>
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
                <td style={{ color: "red", textAlign: "end" }}>
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
          <td style={{ width: "30%", align: "center" }}>
            <table
              style={{
                width: "100%",
                border: "3",
                cellPadding: "5",
                borderColor: "#000000",
                borderCollapse: "collapse",
                textAlign: "center",
                cellSpacing: "0",
              }}
            >
              <tr>
                <td style={{ color: "red" }}>Rs.</td>
                <td style={{ fontWeight: "bold", color: "red" }}>{freight_charges}</td>
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

      <table style={{ width: "800px", align: "center", marginTop: "100px" }}>
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
      </table>
    </div>
  );
};
export default LRLayout;
