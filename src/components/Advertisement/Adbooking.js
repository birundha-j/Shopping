import react, { useState } from 'react';
import './Adbooking.css';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import CalenderRange from '../Calender/calender.js'
import { DatePicker, Space, InputNumber, Select ,Input, Button} from 'antd';
import { Checkbox } from 'antd';
const { Option } = Select;





function AdvertisementBooking() {
    const [Createlist, setCreatelist] = useState(true);
    function changeAdlist() {
        setCreatelist(false)
    }
    function changeCreatelist() {
        setCreatelist(true)
    }
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (
        <div>
            <div className="content">
                <div className="topcontent">ADVERTISEMENT BOOKING</div>
            </div>
            <div className="maincontainer">
                <div className="calenderside"><CalenderRange /></div>
                <div className="rightsidecontent">
                    <div className="CreateAddList">
                        {Createlist ? <div className="ChangeButtons">
                            <div className="CreateAdButton1">Create Ad</div>
                            <div className="AdListButton1" onClick={changeAdlist}>Ad List</div>
                        </div>
                            :
                            <div className="ChangeButtons">
                                <div className="CreateAdButton2" onClick={changeCreatelist}>Create Ad</div>
                                <div className="AdListButton2">Ad List</div>
                            </div>
                        }
                    </div>
                    <div>{Createlist ?
                    <div>
                        <div className="CreateModel">
                            <div className="leftCreatemodel">
                                <div className="StartDateView">
                                    <div>Start Date</div>
                                    <Space direction="vertical" > <DatePicker onChange={onChange} style={{ width: 300 }} /> </Space>
                                </div>
                                <div className="Checkboxview"><Checkbox onChange={onChange}>Full</Checkbox>
                                    <Checkbox onChange={onChange}>Half</Checkbox>
                                </div>
                                <div className="FeeDayview">
                                    <div>Fee /Day(KWD) </div>
                                    <InputNumber style={{ width: 300, height: 35 }} />
                                </div>
                            </div>
                            <div className="rightCreatemodel">
                                <div className="StartDateView">
                                    <div>End Date</div>
                                    <Space direction="vertical" > <DatePicker onChange={onChange} style={{ width: 300 }} /> </Space>
                                </div>
                                <div className="PacementLocation">
                                    <div>Placement Location</div>
                                    <Select defaultValue="Home" style={{ width: 300 }} onChange={handleChange}>
                                        <Option value="Home">Home</Option>

                                        <Option value="Category">Category</Option>

                                    </Select>
                                </div>
                                <div className="Totalcost">
                                    <div>Total Cost(KWD) </div>
                                    <InputNumber placeholder={"1500"} style={{ width: 300, height: 35 }} />
                                </div>

                            </div>
                        </div>
                        <div className="UploadAd">
                                <div>Uploade Advertisement </div>
                                <Input type="file" defaultValue="mysite"  style={{ width: 550 }}/>
                                <Button type="file"type="primary">Browse</Button>
                        </div>
                    </div>
                        :
                        "B"

                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdvertisementBooking;