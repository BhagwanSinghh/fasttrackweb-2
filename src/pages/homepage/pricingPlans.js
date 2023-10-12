import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getPricingPlan } from '../../services/api/api.service';
import PaymentButton from "../../Payment/Stripe/paymentButton";
import { connect } from "react-redux";
import { SaveOrderID } from "../../services/api/api.service";
// import TransitionsModal from "../../components/modalComponent/modalComponent";

const mapStateToProps = props => ({ data: props });
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: []
        }
    }
    // orderId = async (e) => {
    //     SaveOrderID(this.props.data.user.userDetail.userId, e.target.parentElement.parentElement.name)
    //         // .then(res=>res.json())
    //         .then(res => console.log(res));
    // }

    getpricing() {
        getPricingPlan()
            .then((res) => {
                if(res.data.status == 200) {
                    this.setState({ plans: res.data.data })
                }
            })
            .catch((err)=>console.log('Not Data Found for Pricing Plans'))
    }
    componentDidMount() {
        this.getpricing()
        console.log("hello", this.state.plans)
    }
    render() {
        console.log(this.props)
        return (
            <>
                <div className="container_fluid plan_that_work">
                    <div className="container">
                        <div className="coustomer_plan">
                            <h2>Pick a plans that  works for you</h2>

                        </div>
                        <div className="wallet_container">
                            <ul>
                                {this.state.plans.map((e) => {
                                    console.log("asdfghjgfdsa", e)
                                    return (<li>
                                        <div className="wallet">
                                            <h2>{e.title}</h2>
                                            <h3><i className="fa fa-eur" aria-hidden="true"></i>{e.price}</h3>

                                        </div>
                                        <div className="schedule_interview">

                                            <div dangerouslySetInnerHTML={{ __html: e.details }}></div>

                                        </div>
                                        <div className="post_job">
                                            {/* <button name={e.id} onClick={e => this.orderId(e)}> */}
                                            {/* <PaymentButton amount={e.price} data={{
                                                customerID: this.props.data.user.userDetail.userId,
                                                packageID: e.id
                                            }} /> */}
                                            {/* </button> */}
                                            {this.props.data.user.userDetail.userId == undefined?<NavLink className={'btn'} to={'/login'}>Login to Pay</NavLink>:<form method="POST" action="https://www.skyconsultantgroup.com/payment.php">
                                                <input type={'hidden'} name={'customer_id'} value={this.props.data.user.userDetail.userId} />
                                                <input type={'hidden'} name={'package_id'} value={e.id} />
                                                <input type={'hidden'} name={'package_name'} value={e.title} />
                                                <input type={'hidden'} name={'package_price'} value={e.price} />
                                                <button type="submit">Pay</button>
                                            </form>}
                                        </div>
                                    </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};
export default connect(mapStateToProps)(Home);