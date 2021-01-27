import react from 'react';
import './home.css';
import NoFound from './nofound.png';
import Appoint from '../AppoinmentList/appointedlist'
// const optionbox = [
//     { title: "Total Appoinments", number: "4" },
//     { title: "Manage Test", number: "25" },
//     { title: "Cancelled", number: "0" },
//     { title: "Total Revenue(KWD)", number: "0" }
// ]
function Homepage() {
    let d = new Date();
    var dateFormat = require("dateformat");

    return (
        <div>
            <div className="content">
                <div className="topcontent">LAB DASHBOARD</div>
            </div>
            <div className="middlecontent">

                <div className="optionsboxes">
                    
                        <div className="boxes1">
                        <a href={ '/appointedlist'}>
                            <div className="titles">Total Appoinments</div>
                            <hr className="lines" />
                            <div className="number">4</div>
                            </a>
                        </div>
                   
                    <div className="boxes2">
                        <div className="titles">Manage Test</div>
                        <hr className="lines" />
                        <div className="number">25</div>
                    </div>
                    <div className="boxes3">
                        <div className="titles">Cancelled</div>
                        <hr className="lines" />
                        <div className="number">0</div>
                    </div>
                    <div className="boxes4">
                        <div className="titles">Cancelled</div>
                        <hr className="lines" />
                        <div className="number">0</div>
                    </div>

                </div>
                <div className="appoinmenteddate">
                    <div className="appoinment">Today's Appoinment</div>
                    <div className="currentdate">{dateFormat(d, "dd mmm yyyy")}</div>
                </div>
                <div className="tablespart">
                    <div className="headingrow">
                        <div className="sno">S.No</div>
                        <div className="customer">Customer</div>
                        <div className="time">Time</div>
                        <div className="charge">Charge(KWD)</div>
                        <div className="action">Action</div>
                    </div>
                    <div className="tablescontent">

                        <div className="datafoundimage"><img src={NoFound} /></div>
                        <div className="datafoundtext">No data Found</div>
                    </div>
                    <div className="mediabookingbutton">
                        <div className="mediabutton">Media Upload</div>
                        <div className="bookingbutton">Advertisement Booking</div>
                    </div>

                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}
export default Homepage;


{/* <table>
                            <tr className="tableheading">
                                <th>S.No</th>
                                <th>Customer</th>
                                <th>Time</th>
                                <th>Charge(KWD)</th>
                                <th>Action</th>
                            </tr>
                        </table> */}