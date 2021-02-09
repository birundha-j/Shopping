import react,{useState} from 'react'
import './revenue.css';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Excel from './excel.jpg';
import { Button, Tab } from '@material-ui/core';
import NoFound from './nofound.png'
import Tables from '../TableFormat/tableform.js';
import HeaderMenu from '../HeaderMenu/headermenu'
import NewTable from '../NewTable/newTable'



const { Search } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;
const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'customer', numeric: false, disablePadding: false, label: 'Customer ' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Uploaded Date' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];


function RevenuePage() {
    const [rowdata, setRowdata] = useState([])

    function prints() {
        window.print();
    }
    return (
        <div className="revenuepage">
           <HeaderMenu  value={"REVENUE"}/>
            
            <div>
                <NewTable headCell={headCells} rows={rowdata} className="Revenuetable">
                </NewTable>
                

            </div>
            <div className="Grandtotal">
                <Button className="grandbutton">Grand Total:0 KWD</Button>
            </div>
        </div>
    )
}
export default RevenuePage;