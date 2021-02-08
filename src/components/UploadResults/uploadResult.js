import react, { useState, UseState } from 'react';
import './uploadResult.css'

import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import Tables from '../TableFormat/tableform.js';
import HeaderMenu from '../HeaderMenu/headermenu'




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
            <HeaderMenu value={"UPLOAD RESULTS"}/>
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
            {changeupload?<Tables />
                :
                <Tables />
                
                }

            </div>
       
    )
}
export default UploadResult;