import react from 'react';
import './managecategory.css';
import { DatePicker,Space, Input, Layout, Menu, Breadcrumb } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
function ManageCategory(){
    const onSearch = value => console.log(value);
    return(
        <div>
            <div className="maincontent">
                <div className="headermanage">MANAGE CATEGORY</div>
                <div className="searchmanage">
                <Space direction="vertical">
                    <Search placeholder="Search" onSearch={onSearch} style={{ width: 150 }} />
                    </Space>
                    <div className="Addedfeilds">+</div>

                </div>
            </div>
        </div>
    )
}
export default ManageCategory;