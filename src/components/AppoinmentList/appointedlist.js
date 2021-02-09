import react,{useState} from 'react';
import './appointedlist.css';
import { DatePicker, Space, Input } from 'antd';
import NoFound from './nofound.png'
import HeaderMenu from '../HeaderMenu/headermenu'
import Tables from '../TableFormat/tableform.js';
import NewTables from '../NewTable/newTable'


const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'customer', numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];

// import { Input, Space } from 'antd';

const { Search } = Input;
const { RangePicker } = DatePicker;
function AppoinmentList() {

    const [rowdata, setRowdata] = useState([])
    function prints() {
        window.print();
    }
    return (
        <div>
            <HeaderMenu  value={"APPOINMENT LIST"}/>
            {/* <div className="content">
                <div className="topcontent">APPOINMENT LIST</div>
                <div className="selectdate">
                    <div className="selectrangetext">Select Range:</div>
                    <div className="rangepicker"><Space direction="vertical" size={2}> <RangePicker /></Space></div>
                </div>
                <div className="searchicons">
                    <div>
                        <Space direction="vertical"><Search placeholder="search" style={{ width: 150 }} /></Space>
                    </div>
                    <div ><a href={'/'} download><PictureAsPdfIcon className="pdficon" /></a></div>
                    <img src={Excel} />
                    <div className="printicon"><PrintIcon onClick={prints} /></div>
                </div>
            </div> */}
            <NewTables headCell={headCells} rows={rowdata}/>
        </div>
    )
}
export default AppoinmentList;