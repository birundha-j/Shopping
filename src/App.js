import logo from './logo.svg';
import './default.css';
import './App.css';
import clsx from 'clsx';
import profile from './image/princess.jpg'
// material ui for sider list design :
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, { useState ,Component, useEffect } from 'react';
import { Modal, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import logoimage from './image/logo.jpg';
import { HomeOutlined } from '@ant-design/icons';


//Icons:
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PublishIcon from '@material-ui/icons/Publish';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PhoneBluetoothSpeakerIcon from '@material-ui/icons/PhoneBluetoothSpeaker';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CategoryIcon from '@material-ui/icons/Category';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReportIcon from '@material-ui/icons/Report';
// Router:
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Home from './components/Home/home.js';
import AppointmentList from './components/AppoinmentList/appointedlist';
import UploadResults from './components/UploadResults/uploadResult.js'
import CancelAppoinment from './components/Cancelled/cancelApponiment.js'
import AdvertisementBook from './components/Advertisement/Adbooking.js';
import DealsList from './components/Deals/deals.js';
import Revenueitems from './components/Revenue/revenue.js';
import ManageCategory from './components/Managecategory/managecategory.js';
import ManageTest from './components/ManageTest/manageTest.js';
import Profile from './components/Profile/profile'
import MediaUpload from './components/MediaUpload/mediaupload.js'
import Logout from './logout'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



export default function Apps() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dateform, setdateform] = useState();
  const [redirectPath,setRedirectPath] = useState("")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);

  };
  let d = new Date();
  let hours = d.getHours();
  let datestandard = "AM"
  if (hours >= 12) {
    hours = hours - 12;
    datestandard = "PM";
  }
  let minute = d.getMinutes();

  // function redirectFunc (path) {
  //   setRedirectPath(path)
  // }

  // useEffect(()=>{
  //   console.log("test")
  //   return <Redirect to={"/"}  />
  // })

  return (
    <div className={`${classes.root} drawerContainer`}>


      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar>


          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="hearderrightside" >
            <div className="headerdisplay">
              <div ><NotificationsIcon className="Belldesign" /></div>
              <div className="headerline"></div>
              <div>
                <div >
                  <Button onClick={showModal} className={`${classes.root} headerbutton`}>
                    Lina Clinical Lab <CaretDownOutlined />
                  </Button>

                    <Modal visible={isModalVisible} footer={null} width={380} bodyStyle={{ height: 350,paddingTop:30 }} header={null} style={{marginRight:"5px",paddingBottom:0}} zIndex={1111} maskClosable={false} onCancel={handleCancel}>
                      <div className="popupheader">
                        <div className="popupfirstrow">
                          <img src={profile} className="popupimage" />
                          <div className="labname">Lina Clinical Lab</div>
                          <div className="popupmail">birundhajayaraman@gmail.com</div>

                        </div>
                        <hr></hr>

                        <div className="popuplogout">
                          <div className="popupprofile"><a href={'/profile'}>Profile</a></div>
                          <div><Button className="popupbutton"><a href={'/logout'}>Logout</a></Button></div>

                        </div>
                        <hr />
                        <div className="popupprivacy">Privacy policy Terms of Service</div>
                      </div>
                    </Modal>


                </div>
                <div className="headerdateform">
                  {(d.getDate()) + "-" + (d.getMonth() + 1) + "-" + (d.getUTCFullYear()) + " " + hours + ":" + (minute < 10 ? "0" + minute : minute) + " " + datestandard}
                </div>
              </div>


              <img src={profile} className="profileimage" />

            </div>
            {/* Mini variant drawer */}
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <div className={`${classes.toolbar} logoonsider`}>


          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>



        <Divider />
  
        <List className={"iconView"} vlink="red">
          {/* <img src={logoimage} className="Logoimage" /> */}
          <a href={'/'} className="MenuList"  >
            <ListItem button key={"Home"} >
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            </a>
         
          
            <a href={'/appointedlist'} className="MenuList" >
            <ListItem button key={'Appoinment list'}  >
              <ListItemIcon> <ListAltIcon /> </ListItemIcon>
              <ListItemText primary={'Appoinment list'} />
            </ListItem>
            </a>
          
          <a href={'/uploadResult'}  className="MenuList" >
            <ListItem button key={'Upload Result'}>
              <ListItemIcon> <PublishIcon className="iconsize" /> </ListItemIcon>
              <ListItemText primary={'Upload Result'} />
            </ListItem>
            </a>
          <a href={'/cancelApponiment'} className="MenuList" >
            <ListItem button key={'Cancelled Appoinments'}>
              <ListItemIcon> <CancelPresentationIcon /> </ListItemIcon>
              <ListItemText primary={'Cancelled Appoinments'} />
            </ListItem>
            </a>
          <a href={'/Adbooking'}className="MenuList"  >
            <ListItem button key={'Advertisement Booking'}>
              <ListItemIcon> <PhoneBluetoothSpeakerIcon /> </ListItemIcon>
              <ListItemText primary={'Advertisement Booking'} />
            </ListItem>
            </a>
          
          <a href={'./deals'} className="MenuList" >
            <ListItem button key={'Deals'}>
              <ListItemIcon> <LibraryBooksIcon /> </ListItemIcon>
              <ListItemText primary={'Deals'} />
            </ListItem>
            </a>
          <a href={'./revenue'} className="MenuList" >
            <ListItem button key={'Revenue'}>
              <ListItemIcon> <EqualizerIcon /> </ListItemIcon>
              <ListItemText primary={'Revenue'} />
            </ListItem>
            </a>
          <a href={'./managecategory'} className="MenuList" >
            <ListItem button key={'Manage catogory'}>
              <ListItemIcon> <CategoryIcon /> </ListItemIcon>
              <ListItemText primary={'Manage catogory'} />
            </ListItem>
            </a>
          <a href={'./manageTest'}  className="MenuList" >
            <ListItem button key={'Manage Test'}>
              <ListItemIcon> <HourglassEmptyIcon /> </ListItemIcon>
              <ListItemText primary={'Manage Test'} />
            </ListItem>
            </a>
            <a href={'./mediaupload'} className="MenuList" >
            <ListItem button key={'Media Upload'}>
              <ListItemIcon> <CloudUploadIcon /> </ListItemIcon>
              <ListItemText primary={'Media Upload'} />
            </ListItem>
            </a>

            <a href={'./profile'}className="MenuList" >
            <ListItem button key={'Profile'}>
              <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItem>
            </a>
          
            <ListItem button key={'Report'} className="MenuList" >
              <ListItemIcon> <ReportIcon /> </ListItemIcon>
              <ListItemText primary={'Report'} />
            </ListItem>
          
        </List>

      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div >
          <Router >
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/appointedlist' component={AppointmentList} />
                <Route path='/uploadResult'  component={UploadResults} />
                <Route path='/cancelApponiment' component={CancelAppoinment} />
                <Route path='/Adbooking'  component={AdvertisementBook}/>
                <Route path='/deals' component={DealsList} />
                <Route path='/revenue' component={Revenueitems}/>
                <Route path='/managecategory' component={ManageCategory}/>
                <Route path='/manageTest' component={ManageTest}/>
                <Route path='/mediaupload' component={MediaUpload}/>
                <Route path='/profile' component={Profile}/>
                {/* <Route path='/logout' component={Logout} /> */}
              </Switch>
          </Router>

        </div>

      </main>
    </div>
  );
}