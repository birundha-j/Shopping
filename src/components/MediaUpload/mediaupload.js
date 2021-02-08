import react, { useState } from 'react'
import './mediaupload.css'
import IRound from './iround.jpg'
import GreenCircle from './greencircle.png'
import { UploadOutlined } from '@ant-design/icons';

import { DatePicker, Space, Input, Layout, Upload, message, Modal, Button, Form, Checkbox } from 'antd';
const { Search } = Input;

function MediaUpload() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mediaTitle,setMediaTitle]=useState([])
    const [Allmedia,setAllmedia]=useState([])
    const [image,setImage]=useState([])

    

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
        setAllmedia([...Allmedia,{MediaTitle:mediaTitle,img:image}])

        
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

    function changeMedia(e){
        setMediaTitle(e)
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    
    //upload image
    

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
                                        <Input style={{ width: 350 }} onChange={changeMedia} />

                                    </div>
                                    <div>
                                        <div>Upload <img src={IRound} className="IroundImage" onClick={showModalnew}></img>
                                            <Modal visible={isModelVisible} onOk={handleOknew} onCancel={handleCancelnew} header={null} width={900} bodyStyle={{ height: 220 }} footer={null}>
                                                <div>
                                                    <div className="uploadinstruction">Upload Instruction</div>
                                                    <div className="threepoints">
                                                        <div><img src={GreenCircle} className="circleImage" />Please Upload Image in JPG or PNG format</div>
                                                        <div><img src={GreenCircle} className="circleImage" />For Image,Image Size Should be 1080px by 566px</div>
                                                        <div><img src={GreenCircle} className="circleImage" />For Video, Video Size Should be less than 10 MB</div>
                                                    </div>
                                                </div>

                                            </Modal>
                                        </div>
                                        <Upload {...props}>
                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                        </Upload>



                                    </div>
                                </div>
                                <div className="mediadescription">
                                    <div>Description</div>
                                    <Input style={{ width: 800, height: 80 }} />
                                </div>
                                <div className="mediaActive">
                                    <Checkbox>Active</Checkbox>
                                </div>
                            </div>
                        </Modal>

                    </div>

                </div>
            </div>
            {Allmedia.map((data)=>{
                return(
                    <div>
                        <div>{data.MediaTitle}</div>
                      
                    </div>
                )
            })}
        </div>
    )
}
export default MediaUpload;