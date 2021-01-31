import react from 'react'
import './revenue.css';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Button, Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import Tables from '../TableFormat/tableform.js';



const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function RevenuePage() {
    function prints() {
        window.print();
    }
    return (
        <div className="revenuepage">
            <div className="content">
                <div className="topcontent">REVENUE</div>
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
            <div>
                <Tables className="Revenuetable">
                </Tables>
                

            </div>
            <div className="Grandtotal">
                <Button className="grandbutton">Grand Total:0 KWD</Button>
            </div>
        </div>
    )
}
export default RevenuePage;