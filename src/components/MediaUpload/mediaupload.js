import react from 'react'
import { DatePicker, Space, Input, Layout, Menu, message, Modal, Button, Form, Checkbox } from 'antd';
const { Search } = Input;

function MediaUpload() {
    return (
        <div>
            <div className="headercontent">
                <div className="headermanage">MANAGE UPLOAD</div>
                <div className="searchmanage">
                    <div>
                        <Space direction="vertical"><Search placeholder="search"  style={{ width: 150 }} /></Space>

                    </div>
                    <div>
                        <div className="Addedfeilds"  >+</div>
                        
                    </div>

                </div>
            </div>
            </div>
            )
        }
export default MediaUpload;