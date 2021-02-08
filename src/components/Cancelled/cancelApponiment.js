import react from 'react';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import './cancelappoinment.css'
import Tables from '../TableFormat/tableform.js';
import HeaderMenu from '../HeaderMenu/headermenu'


const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;

function CancelledAppoinments() {
    function prints() {
        window.print();
    }
    return (
        <div>
            <HeaderMenu value={"CANCELLED APPOINMENTS"}/>
            <Tables />
            
            
        </div>
    )
};
export default CancelledAppoinments;
