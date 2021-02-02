import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './profile.css';
import Prince from './princess.jpg'
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';

function ProfilePage() {
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
            <div className="HeaderProfile">
                <div>PROFILE</div>
            </div>
            <div className="Profilecontainer">
                <img src={Prince} className="Profileimage" />
                <div className="ProfileDetails">
                    <div>
                        <div className="ProfileEdit"  onClick={showModal}>✎</div>
                        <Modal title={<img src={Prince} className="Profileimagepopup" />} visible={isModalVisible}  onCancel={handleCancel} width={1000} bodyStyle={{ height: 500, marginTop: 100 }} footer={null} >
                            <div className="Popupmaincontent">
                                <div></div>
                            </div>
                        </Modal>
                    </div>
                    <div className="Labheading">Lina clinical lab</div>
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

                    <div>Working Hours</div>
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
                            <div>Jabriya</div>
                            <div>967364906</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;