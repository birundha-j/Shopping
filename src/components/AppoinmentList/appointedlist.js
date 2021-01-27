import react from 'react';
import './appointedlist.css';
import { DatePicker, Space,Input } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import NoFound from './nofound.png'

// import { Input, Space } from 'antd';
import Excel from './excel.jpg';

const { Search } = Input;
const { RangePicker } = DatePicker;
function AppoinmentList() {
    function prints(){
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
                        <Space direction="vertical"><Search placeholder="search" style={{ width: 150}} /></Space>
                    </div>
                    <div ><a href={'/'} download><PictureAsPdfIcon className="pdficon"/></a></div>
                    <img src={Excel}/>
                    <div className="printicon"><PrintIcon onClick={prints} /></div>
                </div>
            </div>
            <div className="customertable">
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
                   

                </div>

            </div>
        </div>
    )
}
export default AppoinmentList;