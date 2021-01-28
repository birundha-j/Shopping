import react, { useState, UseState } from 'react';
import './uploadResult.css'

import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Tab } from '@material-ui/core';
import NoFound from './nofound.png'


const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function UploadResult() {
    const [changeupload, setchangeupload] = useState(true);
    function prints() {
        window.print();
    }
    function ChangePending() {
        setchangeupload(false)
        
        
    }
    function ChangeUpload(){
    setchangeupload(true)
        
    }
    return (
        <div>
            <div className="content">
                <div className="topcontent">UPLOAD RESULT</div>
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
                {changeupload?<div className="changebuttons">
                    <div className="uploadingbutton1">UPLOADED</div>
                    <div className="pendingbutton1" onClick={ChangePending} >PENDING</div>
                </div>
                :
                <div className="changebuttons">
                    <div className="uploadingbutton2" onClick={ChangeUpload}>UPLOADED</div>
                    <div className="pendingbutton2" >PENDING</div>
                </div>
                }
                
            </div>
            {changeupload?<div className="customertable">
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
                :
                <div className="customertable">
                <div className="tablespart">
                    <div className="headingrow">
                        <div className="sno">S.No</div>
                        <div className="customer">Customer</div>
                        <div className="time">Time</div>
                        <div className="charge">Charge</div>
                        <div className="action">Action</div>
                    </div>
                    <div className="tablescontent">

                        <div className="datafoundimage"><img src={NoFound} /></div>
                        <div className="datafoundtext">No data Found</div>
                    </div>


                </div>
                </div>
                
                }

            </div>
       
    )
}
export default UploadResult;