import React, { useEffect, useState } from "react";
// import banner from "../Image/client_page_banner.png";
// import place from "../Image/place_order.png";
import Muitable from "./Muitable";
import { useLocation } from "react-router-dom";
import { trackingDetail, getListing } from "../services/api/api.service";
import { useHistory, Redirect } from "react-router-dom";
import { IMAGE_PATH_URL } from "../constants/path";

function Clients() {
  const LocationData = useLocation();
  if (!LocationData.state) {
    return <Redirect to='/' />
  }
  const { docket_id } = LocationData.state


  const [data, setData] = useState("");
  const [val, setVal] = useState([]);
  const [detail, setDetail] = useState([])

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  getListing()
    .then((ee) => {
      // console.log(ee, docket_id, "docke", ee.data.data[0].docket_no == docket_id)
      ee?.data?.data.forEach((item) => {
        if (item?.docket_no == docket_id && val?.length==0) {
          setVal([item]);
        }
      });
      return ee;
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect((docket_no) => {
    trackingDetail(
      docket_id
    ).then((e) => setDetail(e.data.data))
  }, [])

  console.log(detail, val, "value", docket_id)

  return (
    <>
      <div class="container-fluid home_banner">
        <div class="container">
          <div class="row">
            <div class="col-12 banner_image">
              <img src={IMAGE_PATH_URL + "client_page_banner.png"} alt="" />
            </div>
            <div class="col-12 banner_content">
              <h2>Consignment Tracking</h2>
              <p>Safe and Secure</p>
            </div>
          </div>
        </div>
      </div>
      {/* ---new add data//// */}

      <div className="container">
        <div style={{ margin: "15px 0" }}>
          <h2 style={{ textAlign: "center" }}>Shipment Status</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Docket No</th>
                <th scope="col">Refrence</th>
                <th scope="col">Destination</th>
                <th scope="col">Pick up Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {val.map((item, index) => (
                <tr key={`"val"${index}`}>
                  <th scope="row"></th>
                  <td>{item.docket_no}</td>
                  <td></td>
                  <td>{item.destination}</td>
                  <td>{item.pickup_date}</td>
                  <td>--</td>
                </tr>
              ))}
              {/* <tr>
                <th scope="row"></th>
                <td>816895</td>
                <td></td>
                <td>Noida</td>
                <td>16 july 2023</td>
                <td>Lost</td>
              </tr> */}
            </tbody>
          </table>

          <div className="head">
            <div style={{
              textAlign: "center", fontFamily: "sans-serif", fontSize: "20px", fontWeight: "500", margin: "20px 0"
              , backgroundColor: "green", color: "white"
            }}>
              {docket_id} Details [ In transist]
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Refrence</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {val.map((item, index) => (
                  <>
                    <tr>
                      <th scope="row">Origin</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Destination</th>
                      <td>{item.destination}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">No. of Packages</th>
                      <td>1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Assured Dly dt.</th>
                      <td>{item.assured_date}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Delivery Dt & Tm</th>
                      <td>{item.pickup_date}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Receiver' Name</th>
                      <td>{item.receiver_name}</td>
                      <td></td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Date </th>
                  <th scope="col">Time</th>
                  <th scope="col">Location</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  detail.map((nove) => (
                    <>
                      <tr>
                        <th scope="row"></th>
                        <td>22 Aug 2023</td>
                        <td>{nove.date_time}</td>
                        <td>{nove.location}</td>
                        <td>{nove.status}</td>
                      </tr>
                    </>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/* <Progress bar color="info" value="25" /> */}
      {/* <Muitable /> */}

      {/* <div class="container_fluid">
        <div class="container place_order">
          <div class="col-6 form_section">
            <h3>Track Your Order</h3>
            <form onSubmit={handleSubmit}>
              <div>
                Tracking Id
                <input
                  name="track"
                  value={data}
                  onChange={handleChange}
                  type="text"
                  placeholder="Tracking Number."
                />
                <br />
                <button className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}





      <div class="container-fluid testimonial_section">
        <div class="container">
          <div class="row">
            <div class="col-12 ">
              <h2>TESTIMONIAL</h2>
              <p>Very Impressed With Their Services. Totally Recomended.</p>
              <h5>Shrishi Patel</h5>
              <div class="dot_icon">
                <ul>
                  <li>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
