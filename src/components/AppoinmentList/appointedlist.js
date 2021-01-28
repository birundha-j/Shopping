import react from 'react';
import './appointedlist.css';
import { DatePicker, Space, Input } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import NoFound from './nofound.png'
import Tables from '../TableFormat/tableform.js';


// import { Input, Space } from 'antd';
import Excel from './excel.jpg';

const { Search } = Input;
const { RangePicker } = DatePicker;
function AppoinmentList() {
    function prints() {
        window.print();
    }
    return (
        <div>
            <div className="content">
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
            </div>
            <Tables/>
        </div>
    )
}
export default AppoinmentList;