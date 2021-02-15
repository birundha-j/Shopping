import react from 'react'
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

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
        name="username"
        rules={[
          {
            required: true,
            message: 'required Fields',
          },
        ]}
      >
        <Input width={"50%"}/>
      </Form.Item>

      {/* <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item> */}

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <button {...tailLayout} type="primary" htmlType="submit">yes</button>
    </Form>
  );
};

export default Demo;



/*
// import App from './App'
// import './logout.css'
// import Doctor from './doctor.jpg'
// import CircleLogo from './image/logo.jpg'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import EmailIcon from '@material-ui/icons/Email';
// import VisibilityIcon from '@material-ui/icons/Visibility';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '0ch',
//         },
//     },
// }));
function LogoutPage() {
    // const classes = useStyles();

    return (
        <div></div>
        // <div className="mainlogoutpage">
        //     <img src={Doctor} className="DoctorImage" />
        //     <div className="loginPage">
        //         <div><img src={CircleLogo} className="circleLogo" /></div>
        //         <div className="loginHeader">WELCOMES YOU</div>
        //         <div className="emailbox">
        //             <form className={`${classes.root} inputbox`} noValidate autoComplete="off">
        //                 <TextField  label="Email" style={{height:30}} width={500} placeholder={"birundha@gmail.com"}/>
                        
        //             </form>
        //             <EmailIcon className="mailicon"/>

        //         </div>
        //         <div className="emailbox">
        //             <form className={`${classes.root} inputbox`} noValidate autoComplete="off">
        //                 <TextField type="password" label="Password" style={{height:30}} width={500} />
                        
        //             </form>
        //             <VisibilityIcon className="mailicon"/>

        //         </div>
        //         <div className="Loginbutton">
        //             Login
        //         </div>
        //         <div className="forgetcontent">Forget Password?</div>
        //     </div>
        // </div>
    )
}
export default LogoutPage;
*/