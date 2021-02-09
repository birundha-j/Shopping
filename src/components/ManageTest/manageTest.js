
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

const { Option } = Select;
const { TabPane } = Tabs;

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert' },
    { id: 'calories', numeric: false, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  ];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

function ManageTestPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [changeentrytest, setchangeentrytest] = useState(true)
    const [category, setCategory] = useState([])
    const [testName, setTestName] = useState([])
    const [cost, setCost] = useState([])
    const [instruction, setInstruction] = useState([])
    const [fulldata, setFulldata] = useState([])
    const [keytest,setKeytest]=useState(false)
    const [checkboxes, setCheckboxes] = useState(false)
    const [rowdata,setRowdata] = React.useState([
        {name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3},//send data in object
            createData('Donut', 5, 25.0, 51, 4.9),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Honeycomb', 408, 3.2, 87, 6.5),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Jelly Bean', 375, 0.0, 94, 0.0),
            createData('KitKat', 518, 26.0, 65, 7.0),
            createData('Lollipop', 392, 0.2, 98, 0.0),
            createData('Marshmallow', 318, 0, 81, 2.0),
            createData('Nougat', 360, 19.0, 9, 37.0),
            createData('Oreo', 437, 18.0, 63, 4.0),
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
        setCheckboxes(!checkboxes)
    }
    function AddingTableData() {
        message.success('Test Added Successfully');
        setKeytest(true)
        setFulldata([...fulldata, { testname: testName, costkwd: cost,Checkboxvalue:checkboxes,Instructionval:instruction ,testval:category}])
        setTestName([])
        setCost([])
        setInstruction([])
        

    }
    // delete:
    function DeleteRow(id){
        alert("dehjhdjf")
        if (id > -1) {
            fulldata.splice(id, 1);
          }
          setFulldata([...fulldata])
    }

    return (
        <div>
            
            <HeaderDesign modelOpen={showModal} value={"MANAGE TEST"} /> <div>
                <Modal visible={isModalVisible} zIndex={10000} onCancel={handleCancel} width={"60%"} bodyStyle={{marginTop: 45} } footer={null}>
                    <div className="ManagePopup">
                        <div className="popupheader">TEST ENTRY </div>
                        <div>

                            <Tabs defaultActiveKey="1" onChange={callback} centered>

                                <TabPane tab="Entry" key="1">
                                    <div className="EntryPage">
                                        <div className="SelectBox">
                                            <div>Test Category</div>
                                            <Select defaultValue="lucy" style={{ width: "90%", padding: "2%" }} onChange={handleChange} >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
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
                                                    <div><Input style={{ width:"100%" }} onChange={TestNameChange} /></div>
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
                                    {keytest?<div >
                                {fulldata.map((data,index) => {
                                    return (
                                       
                                            
                                            <div className="PreviewPage" >
                                                <div className="PreviewLeft">
                                                    <div>{data.testname}</div>
                                                    <div>{data.costkwd} KWD</div>
                                                </div>
                                                <div className="PreviewRight">
                                                <div className="DeleteList"><img src={XImage} onClick={()=>DeleteRow(index)} className="CloseImage"/></div>
                                                <div className="InstructActive">

                                                    <div className="Instruction">{data.Instructionval}</div>
                                                    <div className="ActiveStatus">
                                                    {data.Checkboxvalue?
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

            <div className="ViewTable">
                <NewTable headCell={headCells} rows={rowdata} />
                {keytest &&  fulldata.map((data,index) => {
                                    return (
                                       
                                            <div>
                                            
                                                    <div>{data.testname}</div>
                                                    <div>{data.costkwd} KWD</div>
                                                

                                                    <div>{data.Instructionval}</div>
                                                    {data.Checkboxvalue?
                                                        "Active"
                                                        :
                                                        "Inactive"
                                                     }
                                                     {data.testval}
                                            
                                        </div>       
                )
            })}

            </div>
        </div>
    )
}
export default ManageTestPage;


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





                        //                                 <div className="bodycontainer">

                        //     <div className="EntryPreviwe">{changeentrytest ?
                        //         <div className="changebuttons">
                        //             <div className="uploadingbutton1">Entry</div>
                        //             <div className="pendingbutton1" onClick={changepreview}>Preview</div>
                        //         </div>
                        //         :
                        //         <div className="changebuttons">
                        //             <div className="uploadingbutton2" onClick={changeentry}>Entry</div>
                        //             <div className="pendingbutton2" >Preview</div>
                        //         </div>


                        //     }
                        //     </div>
                        //     <div>
                        //         {changeentrytest ?
                        //             <div className="EntryPage">
                        //                 <div className="EntryTestCategory">
                        //                     <div>Test Category</div>
                        //                     <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        //                         <Option value="jack">Jack</Option>
                        //                     </Select>

                        //                 </div>
                        //                 <div className="EntryFeilds">
                        //                     <div className="EntryNamecost">
                        //                         <div>
                        //                             <div>Test Name</div>
                        //                             <div><Input style={{ width: 200 }} onChange={TestNameChange} /></div>
                        //                         </div>
                        //                         <div className="EntryCostNumber">
                        //                             <div>Cost KWD</div>
                        //                             <div><InputNumber style={{ width: 210 }} onChange={ChangeCost} /></div>
                        //                         </div>

                        //                     </div>
                        //                     <div className="entryinstruction">
                        //                         <div>Patient Instruction</div>
                        //                         <div><Input style={{ width: 435, height: 80 }} onChange={changeInstruction} /></div>

                        //                     </div>
                        //                     <div className="Activecheckbox">
                        //                         <Checkbox onChange={Activecheckbox}>Active</Checkbox>
                        //                         <div className="Addbutton" onClick={AddingTableData}>Add</div>
                        //                     </div>
                        //                 </div>


                        //             </div>
                        //             :
                        //             <div className="Preview">
                        //                 No Records Found
                        //                         </div>}
                        //     </div>
                        // </div>