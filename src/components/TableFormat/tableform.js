import react from 'react';
import './tableform.css'
import NoFound from './nofound.png';
const tableheader =["A","B","c"]


function TableFormat() {
    // function generatorheading(){
    //     let res=[]
    //     for(let i=0;i<tableheader.length;i++){
    //         res.push(<td>{tableheader[0]}</td>,
    //             <td>{tableheader[1]}</td>)
    //     }
    //     return res;
    // }
    return (
        <div>

            <div className="cancelTable">
                <div className="tableheader">
                        <div>S.No</div>
                        <div>Customer</div>
                        <div>Time</div>
                        <div>Charge</div>
                        <div>Action</div>
                       
                        </div>
                    {/* <tr>d</tr> */}
    {/* <tr className="heading">{generatorheading()}</tr>
    <tr>welcome</tr>
                    */}
                        
                        
                           
                <div className="tablescontent">

                    <div className="datafoundimage"><img src={NoFound} /></div>
                    <div className="datafoundtext">No data Found</div>
                </div>

            </div>
        </div>
    )
}
export default TableFormat;