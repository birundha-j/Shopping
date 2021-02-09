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
import NewTable from '../NewTable/newTable'

const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'customer', numeric: false, disablePadding: false, label: 'Customer ' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Uploaded Date' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];
const pendingheadCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'customer', numeric: false, disablePadding: false, label: 'Customer ' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Text Date' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];




const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function UploadResult() {
    const [changeupload, setchangeupload] = useState(true);
    const [rowdata, setRowdata] = useState([])
    const [pendingrowdata,setPendingrowdata]=useState([])

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
            {changeupload?<NewTable headCell={headCells} rows={rowdata}/>
                :
                <NewTable headCell={pendingheadCells} rows={pendingrowdata} />
                
                }

            </div>
       
    )
}
export default UploadResult;