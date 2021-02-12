import React, { useState } from 'react'
import './mediaupload.css'
import $ from "jquery";
import IRound from './iround.jpg'
import GreenCircle from './greencircle.png'
import { UploadOutlined } from '@ant-design/icons';
import HeaderDesign from '../HeaderDesign/headerdesign';
import { DatePicker, Space, Input, Layout, Upload, message, Modal, Button, Form, Checkbox } from 'antd';
import NewTable from '../NewTable/newTable'


const headCells = [
    { id: 'mediatitles', numeric: false, disablePadding: false, label: 'Media Title' },
    { id: 'mediatype', numeric: true, disablePadding: false, label: 'Media Type' },
    { id: 'uploadon', numeric: true, disablePadding: false, label: 'Upload On' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },

];
let d;


const { Search } = Input;

function MediaUpload() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mediaTitle, setMediaTitle] = useState([])
    const [Allmedia, setAllmedia] = useState([])
    const [image, setImage] = useState([])
    const [media, setMedia] = useState([])
    const [Description, setDescription] = useState([])
    const [Checkboxes, setCheckboxes] = useState(true);
    const [imageView, setImageView] = useState([])
    const [updateid, setUpdateid] = useState()
    const [editrow, setEditrow] = useState([])
    const [rowdata, setRowdata] = useState([])
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [isModalVisibles, setIsModalVisibles] = useState(false)
    const [displayRow, setDisplayRow] = useState(true)
    const [deleteid, setDeleteid] = useState()
    const [changerow, setChangerow] = useState([])
    const [editid, setEditid] = useState()




    var dateFormat = require("dateformat");
    d = dateFormat(d, "dd mmm yyyy")



    const showModal = (id) => {
        setUpdateid(id)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    function handleupload() {
        setRowdata([...rowdata, { mediatitles: mediaTitle, mediatype: "Image", uploadon: d, status: "Active" }])
        setAllmedia([...Allmedia, { MediaTitle: mediaTitle, img: image, descriptval: Description, Checkboxvalue: Checkboxes ? "active" : "inactive" }])
    }

    function handleupdate() {
        rowdata.map((data, index) => {
            if (updateid == index) {
                setEditrow(rowdata[updateid] = { mediatitles: mediaTitle, mediatype: "Image", uploadon: d, status: "Active" })
                // setAllmedia([...Allmedia, { MediaTitle: mediaTitle, img: image, descriptval: Description, Checkboxvalue: Checkboxes }])
            }
        })
        setIsModalVisible(false);
        message.success('Updated Successfully');

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

    function changeMediainput(e) {
        setMediaTitle(e.target.value)
    }
    console.log(mediaTitle, "meduatitle")

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

    function changedescription(e) {
        setDescription(e.target.value)
    }
    //actie check box

    function Activecheckbox() {
        setCheckboxes(!Checkboxes)
    }
    // visible model:

    const showModalVisible = (x) => {
        console.log(x, "Index")
        setEditid(x)
        setChangerow([rowdata[x] = { MediaTitle: mediaTitle, img: image, descriptval: Description, Checkboxvalue: Checkboxes ? "active" : "inactive" }])
        setIsModalVisibles(true);


    };
    const handleCancels = () => {
        setIsModalVisibles(false);

    };

    // edit model



    // delete rows:
    function DeleteTestEntry(id) {
        setDeleteid(id)
        setIsModalVisibleDelete(true)
    }

    function handleCancelDelete() {
        setIsModalVisibleDelete(false)

    }
    function HandleNoDelete() {
        setIsModalVisibleDelete(false)

    }
    function Deleterow() {
        if (deleteid > -1) {
            rowdata.splice(deleteid, 1);
        }
        setRowdata([...rowdata])
        setIsModalVisibleDelete(false)

    }

    return (
        <div>
            <HeaderDesign value={" MEDIA UPLOADS"} modelOpen={() => showModal(setDisplayRow(true))} />
            <NewTable headCell={headCells} rows={rowdata} Visibles={(index) => showModalVisible(index)} EditIcon={(index) => showModal(index, setDisplayRow(false))} DeleteIcon={(index) => DeleteTestEntry(index)} viewOpen={false} />

            <Modal header={null} visible={isModalVisible} zIndex={10000} onOk={handleOk} onCancel={handleCancel} width={850} bodyStyle={{ height: 400 }} okText={displayRow ? "Upload" : "update"} onOk={displayRow ? () => handleupload() : () => handleupdate()}>
                <div>
                    <div className="mediapopupHeader">New Media Uploads</div>
                    <div className="mediainputs">
                        <div>
                            <div>Media title</div>
                            <Input style={{ width: 350 }} onChange={changeMediainput} />

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

            <Modal visible={isModalVisibles} onCancel={handleCancels} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="Modelmediaview">VIEW MEDIA</div>
                <div className="ModelmediaContent">
                    {changerow.map((data) => {
                        return (
                            <div>
                                <div>{data.descriptval}</div>
                                <div>{data.Checkboxvalue}</div>
                            </div>
                        )
                    })}

                </div>


            </Modal>



            <Modal visible={isModalVisibleDelete} onCancel={handleCancelDelete} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">Delete</div>
                <div className="ModelDeleteLine">Are You Sure Want to Delete This Record?</div>
                <div className="Buttondelete"><div className="Cancelbutton" onClick={HandleNoDelete}>No</div>
                    <div className="Deletebutton" onClick={() => Deleterow()}>Yes</div></div>
            </Modal>




        </div >
    )
}
export default MediaUpload;