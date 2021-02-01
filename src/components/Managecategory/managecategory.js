import React, { useState } from 'react';
import './managecategory.css';
import { DatePicker, Space, Input, Layout, Menu, Breadcrumb, Modal, Button, Form, Checkbox } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import DeleteIcon from '@material-ui/icons/Delete';

// import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';

const { Search } = Input;
function ManageCategory() {
    const [AddingCategory, setAddingCategory] = useState([])
    const [Allrows, setAllrows] = useState([])
    const [checkboxes, setCheckboxes] = useState(true)
    const onSearch = value => console.log(value);
    //popup:


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filedRequired,setfiledRequired] = useState(true)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
        if(AddingCategory.length>0){
        setAllrows([...Allrows, { AddFields: AddingCategory,Checkboxvalue:checkboxes }])
        setAddingCategory([])
        }else{
            setfiledRequired(false)
        }

    }
    function Activecheckbox() {
        setCheckboxes(!checkboxes)
    }

    return (
        <div className="maincontent">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div >
                    <div className="headercontent">
                        <div className="headermanage">MANAGE CATEGORY</div>
                        <div className="searchmanage">
                            <div>
                                <Space direction="vertical"><Search placeholder="search" onSearch={onSearch} style={{ width: 150 }} /></Space>

                                </div>
                            <div>
                                <div className="Addedfeilds" onClick={showModal} >+</div>
                                <Modal visible={isModalVisible} onOk={submitbutton} okText={"Submit"} onCancel={handleCancel} >
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
                                            <Input className={filedRequired?"inputbox":"showRed"} onChange={addChange} value={AddingCategory}/>
                                            <br />
                                            <div className="activebox">
                                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                                    <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                                </Form.Item>
                                            </div>
                                            {/* <div className="submitButton">
                                                <Button className="cancelbutton">Cancel</Button>
                                                <Button type="primary" onClick={submitbutton}>Submit</Button>
                                            </div> */}

                                        </div>
                                    </div>
                                </Modal>

                            </div>

                        </div>
                    </div>
                </div>
            </Form>
            <div className="Tablecontent">

                <table>

                    <th className="TopHeader">S.No</th>
                    <th className="TopHeader">Test Category</th>
                    <th className="TopHeader">Status</th>
                    <th className="TopHeader">Action</th>

                    {Allrows.map((data) => {

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
                                    <button className="ManageEdit">✎</button>
                                    <Button className="ManageDelete"><DeleteIcon /></Button>
                                </td>
                            </tr>

                        )
                    })}

                </table>
            </div>


        </div>


    )
}
export default ManageCategory;