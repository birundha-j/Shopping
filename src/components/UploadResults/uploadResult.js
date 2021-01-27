import react from 'react';
import './uploadResult.css'

import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function uploadResult() {
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
            <div className="Uploadedpending">
                <div className="changebuttons">
                    <Header>
                        <Menu  mode="horizontal" >
                            <Menu.Item key="1" className="uploadingbutton">UPLOADED</Menu.Item>
                            <Menu.Item key="2">PENDING</Menu.Item>
                        </Menu>
                    </Header>
                    {/* <div className="uploadingbutton">UPLOADED</div>
                    <div className="pendingbutton">PENDING</div> */}
                </div>
            </div>
        </div>
    )
}
export default uploadResult;