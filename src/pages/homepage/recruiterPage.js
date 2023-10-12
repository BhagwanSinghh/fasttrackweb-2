import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <>
                <div class="container_fluid hiring_container">
                    <div class="container">
                        <div class="hiring_content_container">
                            <div class="hiring_content">
                                <h2>Hiring The Best Talent From <span>Sky Consultant</span></h2>
                                <p>India's Largest Blue And Grey Collar Hiring Network</p>
                                <div class="start_hiring"> <button><a href="/recruiter-registration">Start Hiring</a></button> </div>
                            </div>
                            <div class="hiring_img">
                                <img src="../../public/images/Mask Group 3.png" alt="" />
                            </div>
                        </div>

                        {/* <div class="companies_logo_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur est dolore non
                                quasi eveniet at repellat cum libero dolorum.</p>
                        </div> */}
                        {/* <div class="job_seeker">
                            <ul>
                                <li>
                                    <i class="fa fa-users" aria-hidden="true"></i>
                                    <h6>15M+</h6>
                                    <p>Job Seekers</p>
                                </li>
                                <li>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <h6>2M+</h6>
                                    <p>Candidate Call Monthly</p>
                                </li>
                                <li>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>

                                    <h6>300M+</h6>
                                    <p>Job Posted Monthly</p>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                </div>
                <div class="container_fluid work_container">
                    <div class="container">

                        <div class="work_content">
                            <h2>How Does It Work?</h2>
                            <p>Utilizing our resources that include the talented team and selection process, we strain out the best applicant from a crowd of hundreds. Our selection procedure incorporates many stages. Our team has experts for the different industries who have gained expertise and are themselves well established name in that particular field. Our team of interviewer includes banking experts, IT experts, broking experts and engineers. </p>
                        </div>
                        <div class="work_images">
                            <img src="../../public/images/Image 45.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="container_fluid hiring_process_container">
                    <div class="container">


                        <h2>Hiring Process Of Sky Consultant Group</h2>
                        <div class="post_a_job_contents">
                            <div class="post_a_job">
                                <ul>
                                    <li>
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                        <h2>Post A Job</h2>
                                        <p>Tell Us What You Need In A Candidate In Just 5-minutes</p>
                                        <button><a href="#">Know More</a></button>
                                    </li>
                                    <li>
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                        <h2>Get Verified</h2>
                                        <p>Tell Us What You Need In A Candidate In Just 5-minutes</p>
                                        <button><a href="#">Know More</a></button>
                                    </li>
                                    <li>
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                        <h2>Get Calls & Hired</h2>
                                        <p>Tell Us What You Need In A Candidate In Just 5-minutes</p>
                                        <button><a href="#">Know More</a></button>
                                    </li>
                                </ul>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="container_fluid better_consultant_conatiner">
                    <div class="container">

                        <h2>What Makes Sky Consultant Better</h2>

                        <ul>
                            <li>
                                <div class="better_consultant_hiring_img"><img src="../../public/images/Image 46.png" alt="" /></div>
                                <h2>Simple Hiring</h2>
                                <p>Received Calls From qualified Candidates in Under An Hour Of Posting A Job</p>
                            </li>
                            <li>
                                <div class="better_consultant_hiring_img"><img src="../../public/images/Image 47.png" alt="" /></div>
                                <h2>Intelligent Reccomendation</h2>
                                <p>Received Calls From qualified Candidates in Under An Hour Of Posting A Job</p>
                            </li>
                            <li>
                                <div class="better_consultant_hiring_img"><img src="../../public/images/Image 48.png" alt="" /></div>
                                <h2>Dedicated Manager</h2>
                                <p>Received Calls From qualified Candidates in Under An Hour Of Posting A Job</p>
                            </li>
                        </ul>
                        <div class="call"><button><a href="#"> <i class="fa fa-phone" aria-hidden="true"></i>
                            &nbsp; Request A Call Back</a></button></div>





                    </div>

                </div>
                {/* <div class="container_fluid client_review_container">

                    <h2>Clients Review</h2>
                    <div class="container ">
                        <div class="client_review_content">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim excepturi impedit!
                                Nesciunt distinctio accusantium expedita eaque id? Perferendis expedita minus voluptate totam
                                vitae quam dolor ea officia magni, itaque at mollitia, eos amet tenetur suscipit, fugit quis
                                libero quo.</p>
                            <h4>Jyoti Thakran</h4>
                            <p>Phillip Machine Tools India Pvt Ltd. </p>
                        </div>

                    </div>
                </div> */}
                <div class="container_fluid help">
                    <div class="container">
                        <div class="help_contents">
                            <div class="help_front">
                                <div class="help_left">
                                    <h3>
                                        Still Need Help?
                                    </h3>
                                    <p>Let us know about your issues and a professional will reach you out.</p>
                                </div>

                                <div class="email">
                                    <Link to={"/contact"}>
                                        <button>
                                            <h2>Contact Us</h2>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}