import react,{useState} from 'react';
import './home.css';
import NoFound from './nofound.png';
import Appoint from '../AppoinmentList/appointedlist'
import ManageTest from '../ManageTest/manageTest'
import Revenue from '../Revenue/revenue'
import MediaUpload from '../MediaUpload/mediaupload'
import AddBook from '../Advertisement/Adbooking'
import NewTable from '../NewTable/newTable'


const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'customer', numeric: false, disablePadding: false, label: 'Customer' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'charge', numeric: true, disablePadding: false, label: 'Charge KWD' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];

// const optionbox = [
//     { title: "Total Appoinments", number: "4" },
//     { title: "Manage Test", number: "25" },
//     { title: "Cancelled", number: "0" },
//     { title: "Total Revenue(KWD)", number: "0" }
// ]
function Homepage() {
    let d = new Date();
    var dateFormat = require("dateformat");
    const [rowdata, setRowdata] = useState([
        // <img src={NoFound}></img>

        
    
        // { testname: B[1], costkwd: "cost", Checkboxvalue: "checkboxes", Instructionval: "instruction", testval: "category" },
        ]
        )

    return (
        <div>
            <div className="content">
                <div className="topcontent">LAB DASHBOARD</div>
            </div>
            <div className="middlecontent">

                <div className="optionsboxes">

                    <div className="boxes1">
                        <a href={'/appointedlist'}>
                            <div className="titles">Total Appoinments</div>
                            <hr className="lines" />
                            <div className="number">4</div>
                        </a>
                    </div>

                    <div className="boxes2">
                        <a href={'/manageTest'}>

                            <div className="titles">Manage Test</div>
                            <hr className="lines" />
                            <div className="number">25</div>
                        </a>
                    </div>
                    <div className="boxes3">
                        <a href={'/cancelApponiment'}>
                            <div className="titles">Cancelled</div>
                            <hr className="lines" />
                            <div className="number">0</div>
                        </a>
                    </div>
                    <div className="boxes4">
                        <a href={'/revenue'}>
                        <div className="titles">Total Revenue(KWD)</div>
                        <hr className="lines" />
                        <div className="number">0</div>
                        </a>
                    </div>

                </div>
                <div className="appoinmenteddate">
                    <div className="appoinment">Today's Appoinment</div>
                    <div className="currentdate">{dateFormat(d, "dd mmm yyyy")}</div>
                </div>
                <div className="HomeTable">
                    <NewTable headCell={headCells} rows={rowdata}  className="NewTable"/>
                    <div className="mediabookingbutton">
                        <div className="mediabutton"><a href={'/mediaupload'} className="MediaShow">Media Upload</a></div>
                        <div className="bookingbutton"><a href={'/Adbooking'}className="AddShow" >Advertisement Booking </a></div>
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