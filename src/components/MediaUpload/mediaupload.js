import react, { useState } from 'react'
import './mediaupload.css'
import IRound from './iround.jpg'
import GreenCircle from './greencircle.png'

import { DatePicker, Space, Input, Layout, Menu, message, Modal, Button, Form, Checkbox } from 'antd';
const { Search } = Input;

function MediaUpload() {
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

    function handleupdate() {

    }
    // inside popup:
    const [isModelVisible, setIsModelVisible] = useState(false);

    const showModalnew = () => {
        setIsModelVisible(true);
    };

    const handleOknew = () => {
        setIsModelVisible(false);
    };

    const handleCancelnew = () => {
        setIsModelVisible(false);
    };

    return (
        <div>
            <div className="headercontent">
                <div className="headermanage">MANAGE UPLOAD</div>
                <div className="searchmanage">
                    <div>
                        <Space direction="vertical"><Search placeholder="search" style={{ width: 150 }} /></Space>

                    </div>
                    <div>
                        <div className="Addedfeilds" onClick={showModal} >+</div>
                        <Modal header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={850} bodyStyle={{ height: 400 }} okText={"Update"} onOk={handleupdate}>
                            <div>
                                <div className="mediapopupHeader">New Media Uploads</div>
                                <div className="mediainputs">
                                    <div>
                                        <div>Media title</div>
                                        <Input style={{ width: 350 }} />

                                    </div>
                                    <div>
                                        <div>Upload <img src={IRound} className="IroundImage" onClick={showModalnew}></img>
                                            <Modal visible={isModelVisible} onOk={handleOknew} onCancel={handleCancelnew} header={null} width={900} bodyStyle={{ height: 220 }} footer={null}>
                                                <div>
                                                    <div className="uploadinstruction">Upload Instruction</div>
                                                    <div className="threepoints">
                                                        <div><img src={GreenCircle} className="circleImage"/>Please Upload Image in JPG or PNG format</div>
                                                        <div><img src={GreenCircle} className="circleImage"/>For Image,Image Size Should be 1080px by 566px</div>
                                                        <div><img src={GreenCircle} className="circleImage"/>For Video, Video Size Should be less than 10 MB</div>
                                                    </div>
                                                </div>
                                                
                                            </Modal>
                                        </div>
                                        <Input style={{ width: 350 }} />
                                    </div>
                                </div>
                                <div className="mediadescription">
                                    <div>Description</div>
                                    <Input style={{ width: 800, height: 100 }} />
                                </div>
                                <div className="mediaActive">
                                    <Checkbox>Active</Checkbox>
                                </div>
                            </div>
                        </Modal>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default MediaUpload;