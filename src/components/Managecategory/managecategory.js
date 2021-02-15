import React, { useState } from 'react';
import './managecategory.css';
import { DatePicker, Space, Input, Layout, Menu, message, Modal, Button, Form, Checkbox } from 'antd';
import { AudioOutlined, DeleteRowOutlined } from '@ant-design/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import HeaderDesign from '../HeaderDesign/headerdesign';
import NewTable from '../NewTable/newTable'

const headCells = [
    { id: 'testname', numeric: false, disablePadding: false, label: 'Test Category' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'actions', numeric: true, disablePadding: false, label: 'Action' },
];



// import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';

const { Search } = Input;
function ManageCategory() {
    const [AddingCategory, setAddingCategory] = useState([])
    const [Allrows, setAllrows] = useState([])
    const [checkboxes, setCheckboxes] = useState(false)
    const [indexnum, setIndexnum] = useState()
    const [updateid, setUpdateid] = useState()
    const onSearch = value => console.log(value);
    const [deleteId, setDeleteId] = useState()

    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);

    const [rowdata, setRowdata] = React.useState([
        // { testname: B[1], costkwd: "cost", Checkboxvalue: "checkboxes", Instructionval: "instruction", testval: "category" },
    ]
    )
    const [displayRow, setDisplayRow] = useState(true)



    //popup:


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filedRequired, setfiledRequired] = useState(true)

    const showModal = (a) => {
        setUpdateid(a)
        setIsModalVisible(true);
        rowdata.filter((data, index) => {
            if (a === index) {
                setAddingCategory(data.testname)
                setCheckboxes(data.status)
               
            }
        })

    };


    const handleOk = () => {
        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // Edit Model show:

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


    const success = () => {

        message.success('This is a success message');
    };
    // required error box

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function addChange(e) {
        setAddingCategory(e.target.value)
        console.log(e, "eeee")


    }

    function submitbutton() {
        setRowdata([...rowdata, { testname: AddingCategory, status: checkboxes ? "Active" : "inactive" }])

        // if (AddingCategory.length > 0) {

        //     setAllrows([...Allrows, { AddFields: AddingCategory, Checkboxvalue: checkboxes }])
        //     setAddingCategory([])
        // } else {
        //     setfiledRequired(false)
        // }
        setAddingCategory([])
        setIsModelVisible(false);



    }
    function Activecheckbox() {
        setCheckboxes(!checkboxes)
    }
    // message:


    // delete popup:
    function DeleteTestEntry(id) {
        setDeleteId(id)
        setIsModalVisibleDelete(true)
    }

    function handleCancelDelete() {
        setIsModalVisibleDelete(false)

    }
    function HandleNoDelete() {
        setIsModalVisibleDelete(false)

    }
    function Deleterow() {
        if (deleteId > -1) {
            rowdata.splice(deleteId, 1);
        }
        setRowdata([...rowdata])
        setIsModalVisibleDelete(false)


    }


    // update button:
    function updatebutton() {
        rowdata.map((data, index) => {
            if (updateid == index) {
                setIndexnum(rowdata[updateid] = { testname: AddingCategory, status: checkboxes ? "Active" : "inactive" })
                // setEditifulldata(fulldata[updateid]={Checkboxvalues: checkboxes, Instructionvals: state.instruction, testvals: category})
            }
        })
        setIsModalVisible(false);
        message.success('Updated Successfully');
        setAddingCategory([])

    }

    // delete row:



    return (
        <div className="maincontent">

            <div >
                <HeaderDesign value={"MANAGE CATEGORY"} modelOpen={() => showModal(setDisplayRow(true))} />
                <NewTable headCell={headCells} rows={rowdata} viewOpen={true} EditIcon={(index) => showModal(index, setDisplayRow(false))} DeleteIcon={(index) => DeleteTestEntry(index)} />

                <Modal visible={isModalVisible} zIndex={10000} onOk={displayRow ? () => submitbutton() : () => updatebutton()} okText={displayRow ? "Submit" : "Update"} onCancel={handleCancel} onClick={success}>
                    <div className="ManagePopup">
                        <div className="popupheader">ADD CATEGORY </div>
                        <div>

                            <div className="categoryfield">
                                <Form.Item
                                    label="Test Category"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                </Form.Item>
                            </div>
                            <Input className={filedRequired ? "inputbox" : "showRed"} onChange={addChange} value={AddingCategory} />
                            <br />
                            <div className="activebox">
                                <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                            </div>


                        </div>
                    </div>
                </Modal>

            </div>

            {/* {isModelVisible && <Modal zIndex={10000} visible={isModelVisible} onOk={handleOknew} okText={"Upgrade"} onCancel={handleCancelnew} header={null} width={900} bodyStyle={{ height: 220 }} >
                <div className="ManagePopup">
                    <div className="popupheader">ADD CATEGORY </div>
                    <div>
                        <div className="categoryfield">
                            <Form.Item
                                label="Test Category"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                            </Form.Item>
                        </div>
                        <Input className={filedRequired ? "inputbox" : "showRed"} onChange={addChangedata} value={"guu"} />
                        <br />
                        <div className="activebox">
                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                            </Form.Item>
                        </div>


                    </div>
                </div>
            </Modal>} */}


            <Modal visible={isModalVisibleDelete} onCancel={handleCancelDelete} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">Delete</div>
                <div className="ModelDeleteLine">Are You Sure Want to Delete This Record?</div>
                <div className="Buttondelete"><div className="Cancelbutton" onClick={HandleNoDelete}>No</div>
                    <div className="Deletebutton" onClick={() => Deleterow()}>Yes</div></div>
            </Modal>



        </div>


    )
}
export default ManageCategory;





