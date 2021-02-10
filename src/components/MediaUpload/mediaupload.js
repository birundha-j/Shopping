import react, { useState } from 'react'
import './mediaupload.css'
import $ from "jquery";
import IRound from './iround.jpg'
import GreenCircle from './greencircle.png'
import { UploadOutlined } from '@ant-design/icons';
import HeaderDesign from '../HeaderDesign/headerdesign';
import { DatePicker, Space, Input, Layout, Upload, message, Modal, Button, Form, Checkbox } from 'antd';
import NewTable from '../NewTable/newTable'


const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'mediatitles', numeric: false, disablePadding: false, label: 'Media Title' },
    { id: 'mediatype', numeric: true, disablePadding: false, label: 'Media Type' },
    { id: 'uploadon', numeric: true, disablePadding: false, label: 'Upload On' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },

];


const { Search } = Input;

function MediaUpload() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mediaTitle, setMediaTitle] = useState([])
    const [Allmedia, setAllmedia] = useState([])
    const [image, setImage] = useState([])
    const [media,setMedia]=useState([])
    const [Description,setDescription]=useState([])
    const [Checkboxes, setCheckboxes] = useState(true);
    const [imageView, setImageView] = useState([])
    const [allimages, setAllimages] = useState(false)
    const [rowdata, setRowdata] = useState([
        // { testname: B[1], costkwd: "cost", Checkboxvalue: "checkboxes", Instructionval: "instruction", testval: "category" },
    ]
    )

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
        setRowdata([...rowdata,{sno: rowdata.length + 1,mediatitles:mediaTitle,mediatype:"Image",uploadon:"Date",status:"Active"}])
        setAllmedia([...Allmedia, { MediaTitle: mediaTitle, img: image ,descriptval:Description,Checkboxvalue: Checkboxes}])


        setAllimages(true)
        // setAllmedia([...Allmedia, { MediaTitle: media, Imageval: allimages,img:imageView}])
        // setAllmedia([...Allmedia, { MediaTitle: media, Imageval: allimages}])

        // setImageView([...imageView])
// setImageView({AllIMM:event.target.files[0]})
        console.log(imageView,"imageView")
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

    function changeMedia(e) {
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


    function changeMedia(e) {
        setMedia(e.target.value)
    }

    // upload image:

    $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };

    //image:

    function changeimage(e) {

        setImageView(e.target.value)
    }

    function changedescription(e){
        setDescription(e.target.value)
    }
    //actie check box

    function Activecheckbox() {
        setCheckboxes(!Checkboxes)
    }

    return (
        <div>
            <HeaderDesign value={" MEDIA UPLOADS"} modelOpen={showModal}/>
            <NewTable headCell={headCells} rows={rowdata}/>
            <Modal header={null} visible={isModalVisible} zIndex={10000} onOk={handleOk} onCancel={handleCancel} width={850} bodyStyle={{ height: 400 }} okText={"Update"} onOk={handleupdate}>
                            <div>
                                <div className="mediapopupHeader">New Media Uploads</div>
                                <div className="mediainputs">
                                    <div>
                                        <div>Media title</div>
                                        <Input style={{ width: 350 }} onChange={changeMedia} />

                                    </div>
                                    <div>
                                        <div>Upload <img src={IRound} className="IroundImage" onClick={showModalnew}></img>
                                            <Modal visible={isModelVisible} zIndex={10000} onOk={handleOknew} onCancel={handleCancelnew} header={null} width={900} bodyStyle={{ height: 220 }} footer={null}>
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
                                        {/* <Upload {...props}>
                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                        </Upload> */}
                                        <Input type='file' onChange={changeimage} style={{ color: "gray" }} id="sampleFile" />

                                    </div>
                                </div>
                                <div className="mediadescription">
                                    <div>Description</div>
                                    <textarea name="Text1" cols="40" rows="5" style={{ width: "100%", height: "80px" }} onChange={changedescription} />
                                </div>
                                <div className="mediaActive">
                                    <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                </div>
                            </div>
                        </Modal>

           
    {/* {
        Allmedia.map((data) => {
            return (
                <div>
                    <div>{data.MediaTitle}</div>
                    <div>{data.descriptval}</div>
                    {data.Checkboxvalue ?
                                        "InActive"
                                        :
                                        "Active"
                                    }

                </div>
            )
        })
    } */}
            {/* <div>
                {Allmedia.map((data) => {
                    return (
                        <div>
                            <div>{data.MediaTitle}</div>
                            <div><img id="myImg" src={data.img} alt="your image" accept="image/*"/></div>


                        </div>
                    )
                })}

            </div> */}
            {/* {allimages &&
                                <img id="myImg" src={imageView} alt="your image" accept="image/*"/>
                            } */}
          

        </div >
    )
}
export default MediaUpload;