import React, { useState } from 'react';
import { DatePicker, Space, Input, Select, InputNumber, message, Modal, Button, Form, Checkbox } from 'antd';
import './manageTest.css';
// import InputStr from '../INPUTS/inputs.js';
import NewTable from '../NewTable/newTable'


const { Search } = Input;
const onSearch = value => console.log(value);
const { Option } = Select;



function ManageTestPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [changeentrytest, setchangeentrytest] = useState(true)
    const [category, setCategory] = useState([])
    const [testName, setTestName] = useState([])
    const [cost, setCost] = useState([])
    const [instruction, setInstruction] = useState([])
    const [checkboxes, setCheckboxes] = useState(true)
    const [fulldata, setFulldata] = useState([])





    const showModal = () => {
        setIsModalVisible(true);
    };




    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function changepreview() {
        setchangeentrytest(false)
    }
    function changeentry() {
        setchangeentrytest(true)
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    // inputs on change:

    function TestNameChange(e) {
        setTestName(e.target.value)
    }

    function ChangeCost(e) {
        setCost(e)
    }
    function changeInstruction(e) {
        setInstruction(e)
    }
    function Activecheckbox() {
        setCheckboxes()
    }
    function AddingTableData() {
        setFulldata([...fulldata, { testname: testName, costkwd: cost }])
    }

    return (
        <div>
            <div>
                <div className="headercontent">
                    <div className="headermanage">MANAGE TEST</div>
                    <div className="searchmanage">
                        <div>
                            <Space direction="vertical"><Search placeholder="search" onSearch={onSearch} style={{ width: 150 }} /></Space>

                        </div>
                        <div>
                            <div className="Addedfeilds" onClick={showModal} >+</div>
                            <Modal visible={isModalVisible} onCancel={handleCancel} width={900} bodyStyle={{ height: 500, marginTop: 100 }} footer={null}>
                                <div className="ManagePopup">
                                    <div className="popupheader">TEST ENTRY </div>
                                    <div className="bodycontainer">

                                        <div className="EntryPreviwe">{changeentrytest ?
                                            <div className="changebuttons">
                                                <div className="uploadingbutton1">Entry</div>
                                                <div className="pendingbutton1" onClick={changepreview}>Preview</div>
                                            </div>
                                            :
                                            <div className="changebuttons">
                                                <div className="uploadingbutton2" onClick={changeentry}>Entry</div>
                                                <div className="pendingbutton2" >Preview</div>
                                            </div>


                                        }
                                        </div>
                                        <div>
                                            {changeentrytest ?
                                                <div className="EntryPage">
                                                    <div className="EntryTestCategory">
                                                        <div>Test Category</div>
                                                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                                            <Option value="jack">Jack</Option>
                                                        </Select>
                                                        {/* <Select defaultValue="All" style={{ width: 300 }} onChange={handleChange} >
                                                            <Option value="All">All</Option>
                                                            <Option value="MRI Scan">MRI Scan</Option>
                                                            <Option value="Pregnency Scan" > Pregnency Scan</Option>
                                                            <Option value="Check one">Check one</Option>
                                                            <Option value="Endoscopy">Endoscopy</Option>
                                                            <Option value="Blood">Blood</Option>
                                                            <Option value="Ct Scan">Ct Scan</Option>
                                                            <Option value="Thyrod Panel">Thyrod Panel</Option>
                                                            <Option value="Scan">Scan</Option>
                                                            <Option value="Blood Test">Blood Test</Option>
                                                            <Option value="Normal Checkup">Normal Checkup</Option>
                                                        </Select> */}
                                                    </div>
                                                    <div className="EntryFeilds">
                                                        <div className="EntryNamecost">
                                                            <div>
                                                                <div>Test Name</div>
                                                                <div><Input style={{ width: 200 }} onChange={TestNameChange} /></div>
                                                            </div>
                                                            <div className="EntryCostNumber">
                                                                <div>Cost KWD</div>
                                                                <div><InputNumber style={{ width: 210 }} onChange={ChangeCost} /></div>
                                                            </div>

                                                        </div>
                                                        <div className="entryinstruction">
                                                            <div>Patient Instruction</div>
                                                            <div><Input style={{ width: 435, height: 80 }} onChange={changeInstruction} /></div>

                                                        </div>
                                                        <div className="Activecheckbox">
                                                            <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                                            <div className="Addbutton" onClick={AddingTableData}>Add</div>
                                                        </div>
                                                    </div>


                                                </div>
                                                :
                                                <div className="Preview"> 
                                                    No Records Found
                                                </div>}
                                        </div>
                                    </div>

                                </div>
                            </Modal>


                        </div>

                    </div>
                </div>
                <div className="ViewTable">
                    hu
                {fulldata.map((data) => {
                        return (
                            <div>
                                <div>{data.testname}</div>
                                <div>{data.costkwd}</div>
                                <NewTable/>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default ManageTestPage;

