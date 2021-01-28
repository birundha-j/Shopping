import react from 'react';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import './cancelappoinment.css'
import Tables from '../TableFormat/tableform.js';

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;

function CancelledAppoinments() {
    function prints() {
        window.print();
    }
    return (
        <div>
            <div className="content">
                <div className="topcontent">CANCELLED APPOINMENTS</div>
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
            <Tables />
            
            
        </div>
    )
};
export default CancelledAppoinments;
