
import React, { useEffect, useState } from 'react';
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
    const [category, setCategory] = useState([])
    const [fulldata, setFulldata] = useState([])
    const [keytest, setKeytest] = useState(false)
    const [checkboxes, setCheckboxes] = useState(false)
    const [addrow, setAddrow] = useState([])
    const [currentdate, setCurrentdate] = useState([])
    const [isModalVisibles, setIsModalVisibles] = useState(false)
    const [indexrow, setIndexrow] = useState()
    const [selectrow, setSelectrow] = useState([])
    const [displayRow, setDisplayRow] = useState(true)
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [editrow, setEditrow] = useState([])
    const [editfulldata, setEditifulldata] = useState()
    const [updateid,setUpdateid] = useState()
    const [deleteid, setDeleteid] = useState()
    //edit

    const [testNameedit, setTestNameedit] = useState([])
    // const [editfullrow,setEditfullrow] =useState()

    // single on change:

    const [state, setState] = React.useState({
        txtname: "",
        costkwd: "",
        instruction: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }



    var dateFormat = require("dateformat");
    d = dateFormat(d, "dd mmm yyyy")

    console.log(A, "rowdata")

    const [rowdata, setRowdata] = React.useState([]
    )



    // tab function

    function callback(key) {
        console.log(key);

    }

    function handleChanges(value) {
        setCategory(value)
        console.log(`selected ${value}`);
    }


    const showModal = (a) => {
        setIsModalVisible(true);
        setUpdateid(a)
        console.log(a,"index")
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // inputs on change:

    useEffect(() => {
        setEditrow(editrow)
    }, [])

    /*function TestNameChange(e,id) {
        console.log(e.target.value,"e.target.value")
        if(id){
            // editrow.map((data,index)=>{
            //     if(id === index){
                    
            //     }
            // })
            editrow[id].testName = e.target.value
            setEditrow(editrow)
        }else
        setTestName(e.target.value)

    }*/


    function Activecheckbox() {
        // setCheckboxes(!checkboxes)
        setCheckboxes(!checkboxes)

    }

    function AddingTableData() {
        setKeytest(true)

        message.success('Test Added Successfully');
        setCurrentdate()
        setRowdata([...rowdata, { testname: state.txtname, costkwd: state.costkwd, createdate: d }])
        A.push(rowdata)
        setFulldata([...fulldata, { testnames: state.txtname, costkwds: state.costkwd, code: "KWD", Checkboxvalues: checkboxes, Instructionvals: state.instruction, testvals: category }])
    }
    console.log(category, "category")


    // delete:
    function DeleteRow(id) {
        alert("dehjhdjf")
        if (id > -1) {
            fulldata.splice(id, 1);
        }
        setFulldata([...fulldata])
    }
    // visible model:
    const showModalVisible = (x) => {
        console.log(x, "Index")
        setIndexrow(x)
        setSelectrow([...selectrow, rowdata[x]])
        setAddrow([...addrow, fulldata[x]])
        setIsModalVisibles(true);


    };
    const handleCancels = () => {
        setIsModalVisibles(false);
        setSelectrow([])
        setAddrow([])

    };
    // edit model

    // function EditTestEntry(id) {

    //     setEditid(id)
    //     setEditrow([...editrow, rowdata[id]])
    //     setIsModalVisibleEdit(true);
    // }

    // function handleCancelEdit() {
    //     setIsModalVisibleEdit(false)
    //     setEditrow([])
    // }

    // delete model:

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
    // update row:

    function updateTabledata() {
        rowdata.map((data, index) => {
            if (updateid == index) {
                setTestNameedit(rowdata[updateid] = { testname: state.txtname, costkwd: state.costkwd, createdate: d })
                setEditifulldata(fulldata[updateid]={Checkboxvalues: checkboxes, Instructionvals: state.instruction, testvals: category})
            }
         })
         setIsModalVisible(false);
         message.success('Updated Successfully');



    }
    
    console.log(editrow, "testNametestName")


    return (
        <div>

            <HeaderDesign modelOpen={() => showModal(setDisplayRow(true))} value={"MANAGE TEST"} /> <div>
                <Modal visible={isModalVisible} onCancel={handleCancel} width={"60%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                    <div className="ManagePopup">
                        <div className="popupheader">TEST ENTRY </div>
                        <div>

                            <Tabs defaultActiveKey="1" onChange={callback} centered>

                                <TabPane tab="Entry" key="1">
                                    <div className="EntryPage">
                                        <div className="SelectBox">
                                            <div>Test Category</div>
                                            <Select defaultValue="General Scan 1" name="textcategory" style={{ width: "90%", padding: "2%" }} onChange={handleChanges} >
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
                                                    <div><Input style={{ width: "100%" }} name="txtname" onChange={handleChange} value={state.txtname} /></div>
                                                </div>
                                                <div className="EntryCostNumber">
                                                    <div>Cost KWD</div>
                                                    <div><input style={{ width: "100%" }} name="costkwd" onChange={handleChange} value={state.costkwd} /></div>
                                                </div>

                                            </div>
                                            <div className="entryinstruction">
                                                <div>Patient Instruction</div>
                                                <div><textarea name="Text1" cols="40" rows="5" name="instruction" style={{ width: "100%", height: "80px" }} onChange={handleChange} /></div>

                                            </div>
                                            <div className="Activecheckbox">
                                                <Checkbox onChange={Activecheckbox} name="activecheck">Active</Checkbox>
                                                {displayRow ? <div className="Addbutton" onClick={AddingTableData}>Add</div>
                                                    :
                                                    <div className="Addbutton" onClick={updateTabledata}>Update</div>}
                                            </div>
                                        </div>
                                    </div>

                                </TabPane>
                                {displayRow && <TabPane tab="Preview" key="2">
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
                                }
                            </Tabs>
                        </div>


                    </div>
                </Modal>


            </div>
            <NewTable headCell={headCells} rows={rowdata} addrows={"false"} Visibles={(index) => showModalVisible(index)} EditIcon={(index) => showModal(index, setDisplayRow(false))} DeleteIcon={(index) => DeleteTestEntry(index)} viewOpen={false} />
            <Modal visible={isModalVisibles} onCancel={handleCancels} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">TEXT DETAILS</div><br />
                <div className="ModelGeneral">
                    {addrow.map((data) => {
                        return (
                            <div className="ModelGeneralScan">{data.testvals}</div>

                        )
                    })}


                    <div>
                        <div className="PreviewPage">
                            {selectrow.map((data) => {
                                return (
                                    <div className="PreviewLeft">
                                        <div>{data.testname}</div>
                                        <div className="PreviewSide"><div>{data.costkwd}</div>

                                            KWD</div>

                                    </div>
                                )
                            })

                            }
                            {addrow.map((data, index) => {
                                return (
                                    <div className="InstructActives">
                                        <div className="Instructions">{data.Instructionvals}</div>


                                        <div className="ActiveStatuss">

                                            {data.Checkboxvalues ?
                                                "Active"
                                                :
                                                "Inactive"
                                            }
                                        </div>

                                    </div>

                                )
                            })}



                        </div>



                    </div>

                </div>
            </Modal>
            
            <Modal visible={isModalVisibleDelete} onCancel={handleCancelDelete} width={"45%"} bodyStyle={{ marginTop: 45 }} footer={null}>
                <div className="ModelTitle">Delete</div>
                <div className="ModelDeleteLine">Are You Sure Want to Delete This Record?</div>
                <div className="Buttondelete"><div className="Cancelbutton" onClick={HandleNoDelete}>No</div>
                    <div className="Deletebutton" onClick={() => Deleterow()}>Yes</div></div>
            </Modal>





        </div>
    )
}
export default ManageTestPage;
