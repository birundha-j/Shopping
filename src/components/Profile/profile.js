import React, { useState } from 'react';
import Times from '../TimePicker/timepicker';

import { Modal, Button, Input, InputNumber,message } from 'antd';
import './profile.css';
import Prince from './princess.jpg'
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
let a = 5;

// range picker:

function ProfilePage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [changeprofile, setchangeprofile] = useState(true)
    const [allProfiledatas, setAllProfiledatas] = useState([])
    const [address, setAddress] = useState()
    const [person, setPerson] = useState()
    const [website, setWebsite] = useState()
    const [since, setSince] = useState()
    const [email, setEmail] = useState()
    const [mobilenumber, setMobilenumber] = useState()
    const [valueinput1, setValueinput1] = useState(true)
    const [valueinput2, setValueinput2] = useState(true)
    const [valueinput3, setValueinput3] = useState(true)
    const [valueinput4, setValueinput4] = useState(true)
    const [valueinput5, setValueinput5] = useState(true)
    const [valueinput6, setValueinput6] = useState(true)

    const [display, setDisplay] = useState(true)


    const showModal = () => {
        setIsModalVisible(true);
    };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function changeworking() {
        setchangeprofile(false)
    }

    function changebasics() {
        setchangeprofile(true)

    }
    // function handleCancel(){
    //     setIsModalVisible(false);
    // }
    function handleupdate() {
        // setAllProfiledatas([...allProfiledatas, {
        //     address,
        //     person,
        //     website,
        //     since,
        //     mobilenumber,
        //     email
        // }])

        // setAllProfiledatas([...allProfiledatas, { Addressval: address, personval: person, websiteval: website, sinceval: since, mobileval: mobilenumber, emailval: email }])
        message.success(' Updated Successfully');

        setDisplay(false)
        setIsModalVisible(false);


    }
    // onchange inputs
    function changeaddress(e) {
        setValueinput1(false)
        setAddress(e.target.value)

    }
    function changepersons(e) {
        setValueinput2(false)
        setPerson(e.target.value)
    }
    function changewebsite(e) {
        setValueinput3(false)
        setWebsite(e.target.value)
    }
    function changesince(e) {
        setValueinput4(false)
        setSince(e)
    }
    function changemobile(e) {
        setValueinput5(false)
        setMobilenumber(e)
    }
    function changemail(e) {
        setValueinput6(false)
        setEmail(e.target.value)
    }

    return (
        <div>
            <div className="HeaderProfile">
                <div>PROFILE</div>
            </div>
            <div className="Profilecontainer">
                <img src={Prince} className="Profileimage" />
                <div className="ProfileDetails">
                    <div>
                        {/* title={} */}
                        <div className="ProfileEdit" onClick={showModal}>✎</div>
                        <Modal visible={isModalVisible} width={1000} onCancel={handleCancel} bodyStyle={{ height: 430, marginTop: 100 }} okText={"Update"} onOk={handleupdate} >

                            <div className="Popupmaincontent">
                                <div><img src={Prince} className="Profileimagepopup" /></div>
                                <div className="Profilechanging">
                                    {changeprofile ? <div className="changeprofiledetails">
                                        <div className="basicbutton1">Basic Details</div>
                                        <div className="workingbutton1" onClick={changeworking}>working Hours</div>
                                    </div>
                                        :
                                        <div className="changeprofiledetails">
                                            <div className="basicbutton2" onClick={changebasics}>Basic Details</div>
                                            <div className="workingbutton2" >working Hours</div>
                                        </div>
                                    }

                                </div>
                                <div>
                                    {changeprofile ?
                                        <div>
                                            <div className="BasicProfileDetails">
                                                <div className="BasicLfet">
                                                    <div>
                                                        <div>Address</div>
                                                        <Input style={{ width: 450 }} onChange={changeaddress} name="hi" value={valueinput1 ? "Kuwaits" : address} />
                                                    </div>
                                                    <div>
                                                        <div>Contact Person</div>
                                                        <Input style={{ width: 450 }} onChange={changepersons} value={valueinput2 ? "Jabariya" : person} />
                                                    </div>
                                                    <div>
                                                        <div>Website</div>
                                                        <Input style={{ width: 450 }} onChange={changewebsite} value={valueinput3 ? "www.lbsite.com" : website} />
                                                    </div>
                                                </div>
                                                <div className="Basicright">
                                                    <div>
                                                        <div>Since</div>
                                                        <InputNumber style={{ width: 450 }} onChange={changesince} value={valueinput4 ? "2015" : since} />
                                                    </div>
                                                    <div>
                                                        <div>Mobile Number</div>
                                                        <InputNumber style={{ width: 450 }} onChange={changemobile} value={valueinput5 ? "9790007056" : mobilenumber} />
                                                    </div>
                                                    <div>
                                                        <div>Email Id</div>
                                                        <Input style={{ width: 450 }} onChange={changemail} value={valueinput6 ? "lab1@gmail.com" : email} />
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div className="basicButtons">
                                                <Button onCancel={handleCancel}>Cancel</Button>
                                                <Button type="primary">Update</Button>

                                            </div> */}
                                        </div>
                                        :
                                        <div className="Timepicker">
                                            <div>
                                                <div>From Time</div>
                                                <Times />
                                            </div>
                                            <div>
                                                <div>To Time</div>
                                                <Times />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="Labheading">Lina clinical lab</div>
                    {display ?
                        <div className="changeProfilecontent">
                            <div className="StartYear">Started Since 2015</div>
                            <div className="ProfileField">
                                <RoomIcon />
                                <div>Kuwaits</div>
                            </div>
                            <div className="ProfileField">
                                <CallIcon />
                                <div>9790007056</div>
                            </div>
                            <div className="ProfileField">
                                <EmailIcon />
                                <div>lab1@gmail.com</div>
                            </div>
                            <div className="ProfileField">
                                <LanguageIcon />
                                <div>www.lbsite.com</div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="changeProfilecontent">
                    <div className="StartYear">Started Since    {valueinput4?"2015":<div className="SinceEntry"> {since}</div>}</div>
                                <div className="ProfileField">
                                    <RoomIcon />{valueinput1 ?
                                        <div>Kuwaits</div> : <div>{address}</div>}


                                </div>
                                <div className="ProfileField">
                                    <CallIcon />{valueinput5 ?
                                        <div>9790007056</div> :
                                        <div>{mobilenumber}</div>

                                    }


                                </div>
                                <div className="ProfileField">
                                    <EmailIcon />{valueinput6 ?
                                        <div>lab1@gmail.com</div> :
                                        <div>{email}</div>}
                                </div>
                                <div className="ProfileField">
                                    <LanguageIcon />
                                    {valueinput3 ?
                                        <div>www.lbsite.com</div> :
                                        <div>{website}</div>}
                                </div>
                            </div>

                        </div>

                    }

                    <div><h3>Working Hours</h3></div>
                    <div className="workinghours">
                        <div className="Daysview">
                            <div>Sunday</div>
                            <div>Monday</div>
                            <div>Tuesday</div>
                            <div>Wednesday</div>
                            <div>Thursday</div>
                            <div>Friday</div>
                            <div>Saturday</div>
                        </div>
                        <div className="HoursView">
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>
                            <div>12:30 PM-07:30 PM</div>

                        </div>
                    </div>
                    <hr />
                    <div className="Footerprofile">
                        <div className="contactsfield">
                            <div>Contect Person</div>
                            <div>Mobile Number</div>
                        </div>
                        <div className="referfields">
                            {valueinput2 ?
                                <div>Jabriya</div>
                                :
                                <div>{person}</div>}
                            <div>967364906</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ProfilePage;


{/* <div>
                            {allProfiledatas.map((data) => {
                                return (
                                    <div className="changeProfilecontent">
                                        <div className="StartYear">Started Since {data.sinceval}</div>
                                        <div className="ProfileField">
                                            <RoomIcon />{valueinput1 ?
                                                <div>{data.Addressval}</div> :
                                                <div>Addressval</div>

                                            }

                                        </div>
                                        <div className="ProfileField">
                                            <CallIcon />
                                            {valueinput5 ?
                                                <div>{data.mobileval}</div>
                                                :
                                                <div>9790007056</div>

                                            }
                                        </div>
                                        <div className="ProfileField">
                                            <EmailIcon />
                                            {valueinput6 ?
                                                <div>{data.emailval}</div>
                                                :
                                                <div>lab1@gmail.com</div>
                                            }
                                            <div>{data.emailval}</div>
                                        </div>
                                        <div className="ProfileField">
                                            <LanguageIcon />
                                            {valueinput6 ?
                                                <div>{data.websiteval}</div>
                                                :
                                                <div>www.lbsite.com</div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div> */}