import react from 'react'
import './revenue.css';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Button, Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import Tables from '../TableFormat/tableform.js';
import HeaderMenu from '../HeaderMenu/headermenu'



const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;


function RevenuePage() {
    function prints() {
        window.print();
    }
    return (
        <div className="revenuepage">
           <HeaderMenu  value={"REVENUE"}/>
            
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