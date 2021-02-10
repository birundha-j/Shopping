
import React, { useState } from 'react';
// import HeaderDesign from '../HeaderDesign/headerdesign'
// function ManageTest() {
//     return (
//         <div>
//             <div><HeaderDesign /></div>

//         </div>
//     )
// }
// export default ManageTest;
import { DatePicker, Space, Input, Select, InputNumber, message, Modal, Button, Form, Checkbox, Tabs } from 'antd';
import './manageTest.css';
// import InputStr from '../INPUTS/inputs.js';
import NewTable from '../NewTable/newTable'
import HeaderDesign from '../HeaderDesign/headerdesign';
import XImage from '../../image/Ximage.png'
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';


const { Option } = Select;
const { TabPane } = Tabs;
let A = [];
let B = [];
var d;

const headCells = [
    { id: 'sno', numeric: false, disablePadding: true, label: 'S.No' },
    { id: 'testname', numeric: false, disablePadding: false, label: 'Test' },
    { id: 'costkwd', numeric: true, disablePadding: false, label: 'Cost KWD' },
    { id: 'createdate', numeric: true, disablePadding: false, label: 'Created Date' },
    { id: 'actions', numeric: true, disablePadding: false, label: 'Action' },
];

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

function ManageTestPage(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [changeentrytest, setchangeentrytest] = useState(true)
    const [category, setCategory] = useState([])
    const [testName, setTestName] = useState([])
    const [cost, setCost] = useState([])
    const [instruction, setInstruction] = useState([])
    const [fulldata, setFulldata] = useState([])
    const [keytest, setKeytest] = useState(false)
    const [checkboxes, setCheckboxes] = useState(false)
    const [addrow, setAddrow] = useState(true)
    const [currentdate, setCurrentdate] = useState([])
    const [actionsicons, setActionicons] = useState()
    const [isModalVisibles, setIsModalVisibles] = useState(false)
    const [indexrow, setIndexrow] = useState()
    const [selectrow, setSelectrow] = useState([])
    const [displayRow, setDisplayRow] = useState(false)
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [editrow, setEditrow] = useState([])
    const [editid,setEditid]=useState()
    //edit

    const [testNameedit,setTestNameedit]=useState([])




    var dateFormat = require("dateformat");
    d = dateFormat(d, "dd mmm yyyy")

    console.log(A, "rowdata")

    const [rowdata, setRowdata] = React.useState([




        // { testname: B[1], costkwd: "cost", Checkboxvalue: "checkboxes", Instructionval: "instruction", testval: "category" },
    ]
    )



    // tab function

    function callback(key) {
        console.log(key);

    }

    function handleChange(value) {
        setCategory(value)
        console.log(`selected ${value}`);
    }


    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // inputs on change:

    function TestNameChange(e) {
        setTestName(e.target.value)
    }

    function ChangeCost(e) {
        setCost(e)
    }
    function changeInstruction(e) {
        setInstruction(e.target.value)
    }
    function Activecheckbox() {
        // setCheckboxes(!checkboxes)
        setCheckboxes(!checkboxes)

    }

    function AddingTableData() {

        // setActionicons(probs.icons)
        message.success('Test Added Successfully');
        setCurrentdate()
        setRowdata([...rowdata, { sno: rowdata.length + 1, testname: testName, costkwd: cost, createdate: d }])
        A.push(rowdata)
        B.push(testName)

        setFulldata([...fulldata, { testnames: testName, costkwds: cost, code: "KWD", Checkboxvalues: checkboxes, Instructionvals: instruction, testvals: category }])



    }
    console.log(rowdata, "headrow")


    // delete:
    function DeleteRow(id) {
        alert("dehjhdjf")
        if (id > -1) {
            fulldata.splice(id, 1);
        }
        setFulldata([...fulldata])
    }

    // ViewTestDetails





    // visible model:
    const showModalVisible = (x) => {
        console.log(x, "Index")
        setIndexrow(x)
        setSelectrow([...selectrow, fulldata[x]])

        setIsModalVisibles(true);


    };
    const handleCancels = () => {
        setIsModalVisibles(false);
        setSelectrow([])

    };
    // edit model

    function EditTestEntry(id) {
        setEditid(id)
        setEditrow([...editrow, fulldata[id]])
        setIsModalVisibleEdit(true);
    }

    function handleCancelEdit() {
        setIsModalVisibleEdit(false)
    }

    // delete model:

    function DeleteTestEntry() {
        setIsModalVisibleDelete(true)
    }

    function handleCancelDelete() {
        setIsModalVisibleDelete(false)

    }
    function HandleNoDelete() {
        setIsModalVisibleDelete(false)

    }
    // update row:

    function UpdateRow() {
        rowdata.map((data,index)=>{
            
                if(editid == index){
                    setTestNameedit(rowdata[editid]={sno: rowdata.length + 1,testname:testName,costkwd: cost, createdate: d})


                }
                console.log(testNameedit,"testNameedit")
            
        })
        
        // setRowdata([...rowdata,{sno: rowdata.length + 1,testname:testName,costkwd: cost, createdate: d}])

    }
    //edit onchange function:
    function TestNameChanges(e){
        
        setTestName(e.target.value)
    }
    console.log(testName,"testNametestName")


    return (
        <div>

            <HeaderDesign modelOpen={showModal} value={"MANAGE TEST"} /> <div>
                <Modal visible={isModalVisible} onCancel={handleCancel} width={"60%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                    <div className="ManagePopup">
                        <div className="popupheader">TEST ENTRY </div>
                        <div>

                            <Tabs defaultActiveKey="1" onChange={callback} centered>

                                <TabPane tab="Entry" key="1">
                                    <div className="EntryPage">
                                        <div className="SelectBox">
                                            <div>Test Category</div>
                                            <Select defaultValue="General Scan 1" style={{ width: "90%", padding: "2%" }} onChange={handleChange} >
                                                <Option value="General Scan 1">General Scan 1</Option>
                                                <Option value="BloodTest">BloodTest</Option>
                                                <Option value="Ultrasound whole abdomen">Ultrasound whole abdomen</Option>
                                                <Option value="Pregnency Scan" > Pregnency Scan</Option>
                                                <Option value="Check one">Check one</Option>
                                                <Option value="Endoscopy">Endoscopy</Option>
                                                <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
                                        </div>
                                        <div className="EntryFeilds">

                                            <div className="EntryNamecost">
                                                <div className="EntryTest">
                                                    <div>Test Name</div>
                                                    <div><Input style={{ width: "100%" }} onChange={TestNameChange} /></div>
                                                </div>
                                                <div className="EntryCostNumber">
                                                    <div>Cost KWD</div>
                                                    <div><InputNumber style={{ width: "100%" }} onChange={ChangeCost} /></div>
                                                </div>

                                            </div>
                                            <div className="entryinstruction">
                                                <div>Patient Instruction</div>
                                                <div><textarea name="Text1" cols="40" rows="5" style={{ width: "100%", height: "80px" }} onChange={changeInstruction} /></div>

                                            </div>
                                            <div className="Activecheckbox">
                                                <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                                <div className="Addbutton" onClick={AddingTableData}>Add</div>
                                            </div>
                                        </div>
                                    </div>

                                </TabPane>
                                <TabPane tab="Preview" key="2">
                                    {keytest ? <div >
                                        {fulldata.map((data, index) => {
                                            return (


                                                <div className="PreviewPage" >
                                                    <div className="PreviewLeft">
                                                        <div>{data.testnames}</div>
                                                        <div>{data.costkwds} KWD</div>
                                                    </div>
                                                    <div className="PreviewRight">
                                                        <div className="DeleteList"><img src={XImage} onClick={() => DeleteRow(index)} className="CloseImage" /></div>
                                                        <div className="InstructActive">

                                                            <div className="Instruction">{data.Instructionvals}</div>
                                                            <div className="ActiveStatus">
                                                                {data.Checkboxvalues ?
                                                                    "Active"
                                                                    :
                                                                    "Inactive"
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                        :
                                        <div>No Found Data</div>}
                                </TabPane>

                            </Tabs>
                        </div>


                    </div>
                </Modal>


            </div>
            {/* {rowdata.map((data, index) => {
                return ( */}



            <NewTable headCell={headCells} rows={rowdata} addrows={"false"} Visibles={(index) => showModalVisible(index)} EditIcon={(index) => EditTestEntry(index)} DeleteIcon={(index) => DeleteTestEntry(index)} viewOpen={false} />

            {/* 
                )
            })} */}
            <Modal visible={isModalVisibles} onCancel={handleCancels} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">TEXT DETAILS</div><br />
                <div className="ModelGeneral">
                    <div className="ModelGeneralScan">General Scan 1</div>


                    <div>
                        {selectrow.map((datas) => {
                            return (



                                <div className="PreviewPage">
                                    <div className="PreviewLeft">
                                        <div>{datas.testnames}</div>
                                        <div className="PreviewSide">{datas.costkwds}
                                            <div> {datas.code}</div></div>

                                    </div>
                                    <div className="InstructActives">
                                        <div className="Instructions">{datas.Instructionvals}</div>


                                        <div className="ActiveStatuss">

                                            {datas.Checkboxvalues ?
                                                "Active"
                                                :
                                                "Inactive"
                                            }
                                        </div>

                                    </div>


                                </div>
                            )
                        })

                        }





                    </div>

                </div>
            </Modal>
            <Modal visible={isModalVisibleEdit} onCancel={handleCancelEdit} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <Tabs defaultActiveKey="1" onChange={callback} centered>
                    {editrow.map((data) => {
                        return (
                            <TabPane tab="Entry" key="1">
                                <div className="EntryPage">
                                    <div className="SelectBox">
                                        <div>Test Category</div>
                                        <Select defaultValue="General Scan 1" style={{ width: "90%", padding: "2%" }} onChange={handleChange}  >
                                            <Option value="General Scan 1">General Scan 1</Option>
                                            <Option value="BloodTest">BloodTest</Option>
                                            <Option value="Ultrasound whole abdomen">Ultrasound whole abdomen</Option>
                                            <Option value="Pregnency Scan" > Pregnency Scan</Option>
                                            <Option value="Check one">Check one</Option>
                                            <Option value="Endoscopy">Endoscopy</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </div>
                                    <div className="EntryFeilds">

                                        <div className="EntryNamecost">
                                            <div className="EntryTest">
                                                <div>Test Name</div>
                                                <div><Input style={{ width: "100%" }} onChange={TestNameChanges} value={testName}/></div>
                                            </div>
                                            <div className="EntryCostNumber">
                                                <div>Cost KWD</div>
                                                <div><InputNumber style={{ width: "100%" }} onChange={ChangeCost} /></div>
                                            </div>

                                        </div>
                                        <div className="entryinstruction">
                                            <div>Patient Instruction</div>
                                            <div><textarea name="Text1" cols="40" rows="5" style={{ width: "100%", height: "80px" }} onChange={changeInstruction} /></div>

                                        </div>
                                        <div className="Activecheckbox">
                                            <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                                            <div className="Addbutton" onClick={UpdateRow}>Update</div>
                                        </div>
                                    </div>
                                </div>

                            </TabPane>

                        )
                    })}




                </Tabs>

            </Modal>
            <Modal visible={isModalVisibleDelete} onCancel={handleCancelDelete} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">Delete</div>
                <div className="ModelDeleteLine">Are You Sure Want to Delete This Record?</div>
                <div className="Buttondelete"><div className="Cancelbutton" onClick={HandleNoDelete}>No</div>
                    <div className="Deletebutton">Yes</div></div>
            </Modal>





        </div>
    )
}
export default ManageTestPage;
/*
{rowdata.map((data, index) => {
    return (

        <div className="ViewTable">

            <NewTable headCell={headCells} rows={rowdata} addrows={"false"} Visible={() => showModalVisible(index)} EditIcon={() => EditTestEntry()} DeleteIcon={() => DeleteTestEntry()} />
            <Modal visible={isModalVisibles} onCancel={handleCancels} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">TEXT DETAILS</div><br />
                <div className="ModelGeneral">
                {selectrow.map((datas) => {
                            return (
                    <div>
                    <div className="ModelGeneralScan">{datas.testvals}</div>
                    <div>


                                <div className="PreviewPage">
                                    <div className="PreviewLeft">
                                        <div>{datas.testnames}</div>
                                        <div className="PreviewSide">{datas.costkwds}
                                            <div> {datas.code}</div></div>

                                    </div>
                                    <div className="InstructActive">
                                        <div className="Instruction">{datas.Instructionvals}</div>


                                        <div>

                                            {data.Checkboxvalues ?
                                                "Active"
                                                :
                                                "Inactive"
                                            }
                                        </div>

                                    </div>


                                </div>





                    </div>
                    </div>
                    )
                })

                }
                </div>
            </Modal>



        </div>
    )
})}*/