import react, { useState } from 'react';
import './Adbooking.css';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import HalfFill from './halfimage.jpg'
import FullFill from './fullimage.jpg'

import CalenderRange from '../Calender/calender.js'
import DeleteIcon from '@material-ui/icons/Delete';
import { DatePicker, Space, InputNumber, Select, Input, Modal, Button, message, Checkbox } from 'antd';
const { Option } = Select;






function AdvertisementBooking() {

    const [Createlist, setCreatelist] = useState(true);
    // const [feesamount, setfeesamount] = useState([]);
    const [startDate, setstartDate] = useState([]);
    const [endDate, setendDate] = useState([]);
    const [placement, setplacement] = useState();
    const [totalCost, settotalCost] = useState([])
    const [full, setfull] = useState()
    const [half, sethalf] = useState()
    const [checkedbox, setcheckedbox] = useState(true)
    const [first, setfirst] = useState()
    const [AllData, setAllData] = useState([])
    const [Fees, setFees] = useState([])


    let p = [];
    // function InputChange(e) {
    //     setInput(e.target.value)
    // }

    function changeAdlist() {

        setCreatelist(false)
    }
    function changeCreatelist() {

        setCreatelist(true)
    }
    // function onChange(date, dateString) {
    //     console.log(date, dateString);
    // }
    // function onChange(e) {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    function handleChange(value) {
        // console.log(`selected ${value}`);
        setplacement(value)
    }
    //Browse button:

    function HandleBrowseClick() {
        var fileinput = document.getElementById("browse");
        fileinput.click();
    }

    function Handlechange() {
        var fileinput = document.getElementById("browse");
        var textinput = document.getElementById("filename");
        textinput.value = fileinput.value;
    }
    function changeFull() {
        setcheckedbox(true)
    }
    function changehalf() {
        setcheckedbox(false)
    }
    function Feeschange(e) {
        setFees(e)
    }
    // function startDatechange(e){
    //     console.log(e,"startdate")
    //     setstartDate(e)
    // }

    // function endDatechange(e){
    //     console.log(e,"enddatre")

    //     setendDate(e)
    // }
    function TotalAmountchange(e) {
        console.log(e, "totalamolunt")

        settotalCost(e)
    }

    //
    function success() {
        message.success('Advertisement Added Successfully');
        // let a = document.getElementById("fees").value

        let b = document.getElementById("startdate").value
        let c = document.getElementById("enddate").value
        // let d = document.getElementById("totalcost").value

        // setfeesamount(a)


        setAllData([...AllData, { fee: Fees, startDate: b, EndDate: c, TotalAmount: totalCost }])
        // {fees:startDate}

        // setstartDate(b)
        // setendDate(c)
        // settotalCost(d)
    }
    function warning() {
        message.warning("Advertisement Experiod");
    };

    console.log(AllData, "alldata")
    //popup menu
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
    
      };

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
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="startdate" /> </Space>
                                    </div>
                                    <div className="Checkboxview"><Checkbox id="full" onClick={changeFull}>Full</Checkbox>
                                        <Checkbox id="half" onClick={changehalf}>Half</Checkbox>
                                    </div>
                                    <div className="FeeDayview">
                                        <div>Fee /Day(KWD) </div>
                                        <InputNumber style={{ width: 300, height: 35 }} onChange={Feeschange} />
                                    </div>
                                </div>
                                <div className="rightCreatemodel">
                                    <div className="StartDateView">
                                        <div>End Date</div>
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="enddate" /> </Space>
                                    </div>
                                    <div className="PacementLocation">
                                        <div>Placement Location</div>
                                        <Select style={{ width: 300 }} onChange={handleChange} >
                                            <Option value="Home" >Home</Option>

                                            <Option value="Category">Category</Option>

                                        </Select>
                                    </div>
                                    <div className="Totalcost">
                                        <div>Total Cost(KWD) </div>
                                        <InputNumber placeholder={"1500"} style={{ width: 300, height: 35 }} onChange={TotalAmountchange} />
                                    </div>

                                </div>
                            </div>
                            <div className="UploadAd">
                                <div>Uploade Advertisement </div>
                                <div className="Choosefile">
                                    <input style={{ width: 550 }} placeholder="My image.jpg" />

                                    <input type="file" class="custom-file-input" style={{ width: 97, background: "rgb(2, 167, 233)" }} /></div>


                            </div>
                            <div className="bookbotton">
                                <button className="Bookingbutton" onClick={success}>Book</button>
                            </div>



                        </div>
                        :
                        <div>
                            {AllData.map((data) => {
                                return (


                                    <div className="AddListBox">
                                        <div className="part1">
                                            <div className="headingonAddlist">Placement :</div><div>{placement}</div>
                                            <div className="headingonAddlist">Days</div>

                                        </div>
                                        <div className="part1">
                                            <div className="headingonAddlist"  >Start Date</div><div>{data.startDate}</div>
                                            <div className="headingonAddlist">Fee /Day(KWD) :</div><div>{data.fee}</div>



                                        </div >
                                        <div className="part1">
                                            <div className="headingonAddlist">End Date :</div><div>{data.EndDate}</div>
                                            <div className="headingonAddlist">Total Cost :</div><div>{data.TotalAmount}</div>
                                        </div>

                                        <div className="part1">
                                            {checkedbox ?
                                                <div>
                                                    <div>
                                                        <div>Full:</div>
                                                        <img src={FullFill} className="Filledimages" />
                                                    </div>
                                                    <div className="buttonsdesign">
                                                        <Button className="editbutton" onClick={warning}>✎</Button>
                                                        <div>
                                                            <Button className="deletebutton" ><DeleteIcon onClick={showModal} /></Button>
                                                            <Modal title="Delete Advertisement" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                                <p>Are You Sure Do You Want To Delete This Advertisement?</p>
                                                                {/* <Button >No</Button>
                                                                <Button type="primary" >Ok</Button> */}
                                                            </Modal>
                                                        </div>
                                                    </div>

                                                </div>

                                                :
                                                <div ><div>Half:</div><img src={HalfFill} className="Filledimages" />
                                                    <div>
                                                        <div>
                                                        <Button className="editbutton" onClick={warning}>✎</Button>
                                                        </div>
                                                        <Button className="deletebutton" ><DeleteIcon onClick={showModal}/></Button>
                                                        <Modal title="Delete Advertisement" className="popupmenus" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                            <p>Are You Sure Do You Want To Delete This Advertisement?</p>
                                                            {/* <Button >No</Button>
                                                            <Button type="primary" >Ok</Button> */}
                                                        </Modal>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                )
                            })}


                        </div>

                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdvertisementBooking;