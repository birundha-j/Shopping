import react from 'react'
import App from './App'
import './logout.css'
import Doctor from './doctor.jpg'
import CircleLogo from './image/logo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '0ch',
        },
    },
}));
function LogoutPage() {
    const classes = useStyles();

    return (
        <div className="mainlogoutpage">
            <img src={Doctor} className="DoctorImage" />
            <div className="loginPage">
                <div><img src={CircleLogo} className="circleLogo" /></div>
                <div className="loginHeader">WELCOMES YOU</div>
                <div className="emailbox">
                    <form className={`${classes.root} inputbox`} noValidate autoComplete="off">
                        <TextField  label="Email" style={{height:30}} width={500} placeholder={"birundha@gmail.com"}/>
                        
                    </form>
                    <EmailIcon className="mailicon"/>

                </div>
                <div className="emailbox">
                    <form className={`${classes.root} inputbox`} noValidate autoComplete="off">
                        <TextField type="password" label="Password" style={{height:30}} width={500} />
                        
                    </form>
                    <VisibilityIcon className="mailicon"/>

                </div>
                <div className="Loginbutton">
                    Login
                </div>
                <div className="forgetcontent">Forget Password?</div>
            </div>
        </div>
    )
}
export default LogoutPage;