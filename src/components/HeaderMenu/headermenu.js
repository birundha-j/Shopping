import react from 'react';
import './headermenu.css'
import PDFImage from '../../image/pdf.png'
import Excel from '../../image/EXCEL.png'
import Print from '../../image/print.jpg'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { DatePicker, Space, Input } from 'antd';

const { RangePicker } = DatePicker;
const { Search } = Input;
const onSearch = value => console.log(value);

function HeaderMenu(props) {


    function prints() {
        window.print();
    }
    return (
        <div className="MasterContent">
            <div className="MenuTitle">{props.value}</div>
            <div className="MenuDates">
                <div className="DateAlignment">Select Range :
                    <Space direction="vertical" size={14} className="DateAlignment">
                        <RangePicker />

                    </Space>,
                </div>
                <div className="MenuSearch"> <Space direction="vertical"><Search placeholder="search" onSearch={onSearch} className="SearchIcons"/></Space></div>
                <div className="MenuIcons">
                    <a href='/somefile.txt' download><PictureAsPdfIcon className="PagePDf" /></a>
                    <img src={Excel} className="PdfIcon" />
                    <img src={Print} className="PdfIcon" onClick={prints} />


                </div>

            </div>
        </div>
    )
}
export default HeaderMenu;