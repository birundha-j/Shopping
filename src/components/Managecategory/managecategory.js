import React, { useState } from 'react';
import './managecategory.css';
import { DatePicker, Space, Input, Layout, Menu, message, Modal, Button, Form, Checkbox } from 'antd';
import { AudioOutlined, DeleteRowOutlined } from '@ant-design/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import HeaderDesign from '../HeaderDesign/headerdesign';
import NewTable from '../NewTable/newTable'

const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
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
    const onSearch = value => console.log(value);
    const [rowdata, setRowdata] = React.useState([
        // { testname: B[1], costkwd: "cost", Checkboxvalue: "checkboxes", Instructionval: "instruction", testval: "category" },
    ]
    )


    //popup:


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filedRequired, setfiledRequired] = useState(true)

    const showModal = () => {
        setIsModalVisible(true);

    };


    const handleOk = () => {
        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // Edit Model show:

    const [isModelVisible, setIsModelVisible] = useState(false);
    const [deleteId, setdeleteId] = useState()


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
        setRowdata([...rowdata, { sno: rowdata.length + 1, testname: AddingCategory, status: checkboxes?"Active":"inactive" }])

        // if (AddingCategory.length > 0) {

        //     setAllrows([...Allrows, { AddFields: AddingCategory, Checkboxvalue: checkboxes }])
        //     setAddingCategory([])
        // } else {
        //     setfiledRequired(false)
        // }

    }
    function Activecheckbox() {
        setCheckboxes(!checkboxes)
    }
    // message:


    function addChangedata() {

    }





    // delete popup:
    const [isModalsVisible, setIsModalsVisible] = useState(false)

    const showModaldelete = (id) => {
        alert(id)
        setIsModalsVisible(true);
        setdeleteId(id)

        console.log(indexnum, "indexnum")
    };

    const handleOkdelete = () => {
        if (deleteId > -1) {
            Allrows.splice(deleteId, 1);
        }
        setAllrows([...Allrows])
        setIsModalsVisible(false);

    };

    const handleCanceldelete = () => {
        setIsModalsVisible(false);
    };


    return (
        <div className="maincontent">

            <div >
                <HeaderDesign value={"MANAGE CATEGORY"} modelOpen={showModal} />
                <NewTable headCell={headCells} rows={rowdata} viewOpen={true} />

                <Modal visible={isModalVisible} zIndex={10000} onOk={submitbutton} okText={"Submit"} onCancel={handleCancel} onClick={success}>
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
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                </Form.Item>
                            </div>


                        </div>
                    </div>
                </Modal>

            </div>

            {isModelVisible && <Modal zIndex={10000} visible={isModelVisible} onOk={handleOknew} okText={"Upgrade"} onCancel={handleCancelnew} header={null} width={900} bodyStyle={{ height: 220 }} >
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
            </Modal>}

            {
                setIsModalsVisible && <Modal title="Delete Advertisement" visible={isModalsVisible} onOk={handleOkdelete} onCancel={handleCanceldelete}>
                    <p>Are You Sure  Want To Delete Record</p>

                </Modal>
            }


        </div>


    )
}
export default ManageCategory;





{/* <table>

<th className="TopHeader">S.No</th>
<th className="TopHeader">Test Category</th>
<th className="TopHeader">Status</th>
<th className="TopHeader">Action</th>

{Allrows.map((data,index) => {

    return (
        <tr className="ManageTableRows">
            <td className="TableDatas"></td>
            <td className="TableDatas">{data.AddFields}</td>
            <td className="TableDatas">
                {data.Checkboxvalue ?
                    "Active"
                    :
                    "InActive"
                }
            </td>
            <td className="managechangebuttons">
                <div onClick={showModalnew}><button className="ManageEdit" onClick={()=>showModalnew()} >✎ </button></div>
                
                <Button className="ManageDelete"><DeleteIcon onClick={()=>showModaldelete(index)}/></Button>
            </td>
        </tr>

    )
})}

</table> */}