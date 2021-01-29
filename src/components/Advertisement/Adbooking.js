import react, { useState } from 'react';
import './Adbooking.css';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import HalfFill from './halfimage.jpg'
import FullFill from './fullimage.jpg'

import CalenderRange from '../Calender/calender.js'
import { DatePicker, Space, InputNumber, Select, Input, Button, message, Checkbox } from 'antd';
const { Option } = Select;





function AdvertisementBooking() {
    const [AllData,setAllData]=useState([])

    const [All,setAll]=useState([])
    const [Createlist, setCreatelist] = useState(true);
    const [feesamount, setfeesamount] = useState([]);
    const [startDate, setstartDate] = useState();
    const [endDate, setendDate] = useState();
    const [placement, setplacement] = useState();
    const [totalCost, settotalCost] = useState()
    const [full, setfull] = useState()
    const [half, sethalf] = useState()
    const [checkedbox,setcheckedbox]=useState(true)


let p=[];


    function changeAdlist() {
        
        setCreatelist(false)
    }
    function changeCreatelist() {
        setAll()

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
    function changehalf(){
        setcheckedbox(false)
     }


    //
    function success() {
        message.success('Advertisement Added Successfully');
        let b = document.getElementById("startdate").value
        let c = document.getElementById("enddate").value
        let d = document.getElementById("totalcost").value
        // let e=document.getElementById("full").value
        // let f = document.getElementById("half").value
        let a = document.getElementById("fees").value
            setfeesamount([...a,feesamount])
        console.log(feesamount,"aaaa")

        setstartDate(b)
        setendDate(c)
        settotalCost(d)
        setAll([b,c,d],All)
        console.log(All,"First")

       
// console.log(b.toString(),"startdate")
// console.log(b.getDate()+" "+(b.getMonth()+1)+" "+b.getFullYear(),"date1")
// console.log(c,"enddate")


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
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="startdate" /> </Space>
                                    </div>
                                    <div className="Checkboxview"><Checkbox id="full" onClick={changeFull}>Full</Checkbox>
                                        <Checkbox id="half"onClick={changehalf}>Half</Checkbox>
                                    </div>
                                    <div className="FeeDayview">
                                        <div>Fee /Day(KWD) </div>
                                        <InputNumber style={{ width: 300, height: 35 }} id="fees" />
                                    </div>
                                </div>
                                <div className="rightCreatemodel">
                                    <div className="StartDateView">
                                        <div>End Date</div>
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="enddate" /> </Space>
                                    </div>
                                    <div className="PacementLocation">
                                        <div>Placement Location</div>
                                        <Select style={{ width: 300 }} onChange={handleChange}>
                                            <Option value="Home">Home</Option>

                                            <Option value="Category">Category</Option>

                                        </Select>
                                    </div>
                                    <div className="Totalcost">
                                        <div>Total Cost(KWD) </div>
                                        <InputNumber placeholder={"1500"} style={{ width: 300, height: 35 }} id="totalcost" />
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
                        <div className="AddListBox">
                            <div className="part1">
                                <div className="headingonAddlist">Placement :</div><div>{placement}</div>
                                <div className="headingonAddlist">Days</div> 

                            </div>
                            <div className="part1">
                                <div className="headingonAddlist"  >Start Date</div><div>{startDate}</div>
                                <div className="headingonAddlist">Fee /Day(KWD) :</div><div>{feesamount}</div>


                            </div >
                            <div className="part1">
                                <div className="headingonAddlist">End Date :</div><div>{endDate}</div>
                                <div className="headingonAddlist">Total Cost :</div><div>{totalCost}</div>
                            </div>

                            <div className="part1">
                                {checkedbox?
                                <div ><div>Full:</div><img src={FullFill} className="Filledimages"/></div>
                                
                                :
                                <div><div>Half:</div><img src={HalfFill} className="Filledimages"/></div>
                                }
                            </div>
                        </div>
                        <div className="AddListBox">
                            <div className="part1">
                                <div className="headingonAddlist">Placement :</div><div>{placement}</div>
                                <div className="headingonAddlist">Days</div> 

                            </div>
                            <div className="part1">
                                <div className="headingonAddlist"  >Start Date</div><div>{startDate}</div>
                                <div className="headingonAddlist">Fee /Day(KWD) :</div><div>{feesamount}</div>


                            </div >
                            <div className="part1">
                                <div className="headingonAddlist">End Date :</div><div>{endDate}</div>
                                <div className="headingonAddlist">Total Cost :</div><div>{totalCost}</div>
                            </div>

                            <div className="part1">
                                {checkedbox?
                                <div ><div>Full:</div><img src={FullFill} className="Filledimages"/></div>
                                
                                :
                                <div><div>Half:</div><img src={HalfFill} className="Filledimages"/></div>
                                }
                            </div>
                        </div>
                        </div>
                        
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdvertisementBooking;