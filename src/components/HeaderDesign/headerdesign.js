import react from 'react'
import './headerdesign.css'
import AddImage from '../../image/Plusimage.png'

import { DatePicker, Space, Input, Select, InputNumber, message, Modal, Button, Form, Checkbox } from 'antd';
import { PinDropSharp, PortableWifiOffSharp } from '@material-ui/icons';
// icons css:


const { Search } = Input;
const onSearch = value => console.log(value);

function HeaderDesign(props) {
    return (
        <div className="PageHeader">
            <div className="PageTitle">{props.value}</div>
            <div className="AddingImage">
                <div> <Space direction="vertical"><Search placeholder="search" onSearch={onSearch} /></Space></div>
                <img src={AddImage} className="PageAdder" onClick={props.modelOpen} />
            </div>
            
        </div>
    )
}
export default HeaderDesign;