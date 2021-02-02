import react from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
function Inputrequired() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    
                    rules={[
                        {
                            required: true,
                            message: 'required field',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                

                

                
            </Form>
        </div>
    )
}
export default Inputrequired;