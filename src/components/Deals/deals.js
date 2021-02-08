import react, { useState } from 'react';
import './deals.css'
import CalenderRange from '../Calender/calender.js'
import { Select, Input, DatePicker, Space, Radio,InputNumber,Checkbox, message,Button,Modal} from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';


const { Option } = Select;



function DealsList() {
    const[AllDeals,setAllDeals]=useState([])
    const [CreateDeals, setCreateDeals] = useState(true);
    const [Radiobutons, setRadiobuttons] = useState(true)
    const [TestName,setTestName]=useState([])
    const [DealTitle,setDealTitle]=useState([])
    const [ValidateFrom,setValidateFrom]=useState([])
    const [ValidateTo,setValidateTo]=useState([])
    const [checkboxes, setCheckboxes] = useState(false)
    const [dealamount,setdealamount]=useState([])
    const [Percentage,setPercentage]=useState([])
    const [Amt,setAmt]=useState(false)
    const [per,setPer]=useState(false)
    const [deleterow,setDeleterow] = useState();




    function changeAdlist() {

        setCreateDeals(false)
    }
    function changeCreatelist() {

        setCreateDeals(true)
    }
    function handleChange(value) {
        setTestName(value)

    }
    console.log(TestName,"TestName")
    // Radio buttons

    const [value, setValue] = useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    function changeAmount(){
        setRadiobuttons(true)
       setAmt(true)
        setPer(false)
    }

    function changePercentage(){
        setRadiobuttons(false)
        setAmt(false)
        setPer(true)

    }

    function Dealtitlechange(e){
        setDealTitle(e.target.value)
    }


    function SaveDealsDetails(){
        message.success('Advertisement Added Successfully');
        let a=document.getElementById("validatefrom").value
        let b=document.getElementById("validateTo").value
        setValidateFrom(a)
        setValidateTo(b)
        setAllDeals([...AllDeals,{testname:TestName,dealtite:DealTitle,vdateFrom:a,VdateTo:b,Checkboxvalue:checkboxes,DealAmountvalue:dealamount,Percentagevalue:Percentage ,AMT:Amt,PER:per}])
        setCheckboxes(false)
        setdealamount([])
        setPercentage([])
    }
    function Activechange(){
        setCheckboxes(true)

    }
    function ChangeDealAmount(e){
        setdealamount(e)
        setAmt(true)
        setPer(false)
    }

    function changeDealPercentage(e){
        setPercentage(e)
        setPer(true)
        setAmt(false)
    }

    function warning() {
        message.warning("Deals Experiod");
    };
    // popup model

    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal (id){
        console.log(id,"id")
        setDeleterow(id)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (deleterow > -1) {
            AllDeals.splice(deleterow, 1);
          }
          setAllDeals([...AllDeals])
          message.success(' Removed Successfully');

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);

    };

    
    return (
        <div className="DealsMaster">
            <div className="content">
                <div className="topcontent">DEALS</div>
            </div>
            <div className="DealListcontent">
                <div className="DealsCalender">
                    <CalenderRange />
                </div>

                <div className="CreateDealsList">
                    <div className="rightsidecontent">
                        {CreateDeals ? <div className="Changetwobuttons">
                            <div className="CreateDealbutton1">Create Deals</div>
                            <div className="Deallistbutton1" onClick={changeAdlist}>Deals List</div>
                        </div>
                            :
                            <div className="Changetwobuttons">
                                <div className="CreateDealbutton2" onClick={changeCreatelist}>Create Deals</div>
                                <div className="Deallistbutton2">Deals List</div>
                            </div>
                        }
                    </div>
                    <div>
                        {CreateDeals ?
                            <div className="CreateDealsPage">
                                <div className="TestTitle">
                                    <div className="DealstestName">
                                        <div>Test Name</div>
                                        <Select defaultValue="All" style={{ width: 300 }} onChange={handleChange}>
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
                                        </Select>
                                    </div>
                                    <div className="DealstestName">
                                        <div>Deal Title</div>
                                        <Input style={{ width: 300 }} onChange={Dealtitlechange}/>
                                    </div>
                                </div>
                                <div className="TestTitle">
                                    <div className="ValidDates">
                                        <div>Valid From</div>
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="validatefrom" /> </Space>
                                    </div>
                                    <div className="ValidDates">
                                        <div> Valid To</div>
                                        <Space direction="vertical" > <DatePicker style={{ width: 300 }} id="validateTo" /> </Space>
                                    </div>

                                </div>
                                <div className="TestTitle">
                                    <div className="Dealsradios">
                                        <div>Deals Option</div>
                                        <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Radio value={1} onClick={changeAmount}>Amount</Radio>
                                                <Radio value={2} onClick={changePercentage}>Percentage</Radio>

                                            </Radio.Group>

                                        </div>
                                    </div>
                                    <div className="Dealsradios">
                                        {Radiobutons ?
                                            <div>
                                               <div>Deal Amount</div>
                                               <InputNumber style={{ width: 250 ,height:33}} onChange={ChangeDealAmount} />    KWD

                                            </div>
                                            :
                                            <div>
                                                <div>Deal Percentage</div>
                                               <InputNumber style={{ width: 250 ,height:33}} onChange={changeDealPercentage} />    %
                                                
                                            </div>
                                        }

                                    </div>
                                    

                                </div>
                                <div className="ActiveRadio">
                                <div className="DealActiveCheck">
                                    <Checkbox onChange={Activechange} >Deal Active</Checkbox>

                                </div>
                                <div className="CancelSaveButtons">
                                    <Button className="DealsCancelbutton" >Cancel</Button>
                                    <Button type="primary" onClick={SaveDealsDetails}>Save</Button>
                                </div>
                                    
                                </div>
                            </div>
                            :
                            <div>
                               {AllDeals.map((data,index)=>{
                                   return(
                                    <div className="dealsActivetable">
                                        <div className="rows">
                                            <div>
                                                <div>Test Name</div>
                                                <div>{data.testname}</div>
                                            </div>
                                            <div>
                                                <div>Deal Title</div>
                                                <div>{data.dealtite}</div>
                                            </div>
                                        </div>
                                        <div className="rows">
                                            <div>
                                                <div>Start Date</div>
                                                <div>{data.vdateFrom}</div>
                                            </div>
                                            <div>
                                                {data.Checkboxvalue?
                                                    <div>
                                                        <div>Deal</div>
                                                        <div>Active</div>
                                                    </div>:
                                                    <div>
                                                        <div>Deal</div>
                                                        <div>InActive</div>
                                                     </div>
                                            }
                                            </div>
                                        </div>
                                        <div className="rows">
                                            <div>End Date</div>
                                            <div>{data.VdateTo}</div>
                                        </div>
                                        <div className="rows">
                                                {data.Amt &&<div>Amount :{data.DealAmountvalue} KWD</div>}
                                                {data.per &&<div>Percent:{data.Percentagevalue} %</div>}
                                        <div>

                                            <button className="ManageEdit" onClick={warning}>✎</button>
                                            <Button className="ManageDelete"><DeleteIcon onClick={()=>showModal(index)}/></Button>
                                                <Modal title="Delete Advertisement"zIndex={10000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                                    <p>Are You Sure Do You Want To Delete This Deal?</p>
                                                                    
                                                                </Modal>
                                            </div>

                                        </div>
                                    </div>

                                   )
                               })

                               }
                            </div>

                        }
                    </div>
                </div>


            </div>

        </div>
    )
}
export default DealsList;