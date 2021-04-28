
// import React  from 'react';
// import  React , {useState} from 'react';
import clsx from 'clsx';
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
import DashboardIcon from '@material-ui/icons/DashboardSharp'
import UserIcon from '@material-ui/icons/GroupAddSharp'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeopleSharp';
import PermissionsIcon from '@material-ui/icons/VpnKeySharp';
import NewsIcon from '@material-ui/icons/CasinoSharp';
import PagesIcon from '@material-ui/icons/FileCopySharp';
import MenusIcon from '@material-ui/icons/ListSharp';
import AdvancedIcon from '@material-ui/icons/SettingsSharp';
import LogoutIcon from '@material-ui/icons/ExitToAppSharp';


import Table from './table'
import Student from '../Components/SimpleCrudApplication/student';
import  React,{useState} from 'react';







import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './routing/Dasbboard';
import User from './routing/User';
import Roles from './routing/Roles';
import Permissions from './routing/Permissions';
import News from './routing/News';
import Pages from './routing/Pages';
import Menu from './routing/Menu';
import Advanced from './routing/Advanced';
import Logout from './routing/Logout';



import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (

    
    <Router>
    <div className={classes.root}>
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
          <Typography variant="h6" noWrap>
            <strong>Crud Operations</strong>
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-label="main mailbox folders"  >
        
                    <ListItem button >
                    
                        <ListItemIcon  style={{color:"#0000CD"}}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <Link to="/Dashboard">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Dashboard" />
                        </Link>
                    </ListItem>
        
                    <ListItem button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <UserIcon />
                        </ListItemIcon>
                        <Link to="/User">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="User" />
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <EmojiPeopleIcon />
                        </ListItemIcon>
                        <Link to="/Roles">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Roles" />
                        </Link>
                    </ListItem>

                    <ListItem  button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <PermissionsIcon />
                        </ListItemIcon>
                        <Link to="/Permissions">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Permissions" />
                        </Link>
                     </ListItem>

                    
                    <ListItem  button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <NewsIcon />
                        </ListItemIcon>
                        <Link to="/News">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="News" />
                        </Link>
                    </ListItem>
                    
                    <ListItem  button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <PagesIcon />
                        </ListItemIcon>
                          <Link to="/Pages">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Pages" />
                         </Link>
                    </ListItem>
                    <ListItem  button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <MenusIcon />
                        </ListItemIcon>
                        <Link to="/Menu">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Menu" />
                        </Link>
                    </ListItem>
                    <ListItem  button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <AdvancedIcon />
                        </ListItemIcon>
                        <Link to="/Advanced">
                        <ListItemText disableTypography className={classes.SideBarFont}  primary="Advanced" />
                        </Link>
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon >
                            
                        </ListItemIcon>

                        <ListItemText disableTypography className={classes.SideBarFont}  primary="" />
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon>
                            
                        </ListItemIcon>

                        <ListItemText disableTypography className={classes.SideBarFont}  primary="" />
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon>
                            
                        </ListItemIcon>

                        <ListItemText disableTypography className={classes.SideBarFont}  primary="" />
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon>
                            
                        </ListItemIcon>

                        <ListItemText disableTypography className={classes.SideBarFont}  primary="" />
                    </ListItem>
                
                </List>
                
                
          
        <Divider />
        <List button>
        <Link to="/Logout">
                    <ListItem button>
                        <ListItemIcon style={{color:"#0000CD"}}>
                            <LogoutIcon />
                        </ListItemIcon>
                        
                        <ListItemText disableTypography className={classes.SideBarFont} primary="Logout" />
                       
                    </ListItem>
          </Link>           
         </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>


        <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>< Table/></Paper>
        </Grid>
        </Grid>

        </Typography>

        <Typography paragraph>

        <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>< Student/></Paper>
        </Grid>
        </Grid>


            
        </Typography>
        
      </main>

      <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route >
          <Route path="/User">
            <User />
          </Route>
          <Route path="/Roles">
            <Roles />
          </Route>
          <Route path="/Permissions">
            <Permissions />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Pages">
            <Pages />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/Advanced">
            <Advanced />
          </Route>
          <Route path="/Logout">
            <Logout />
          </Route>

          
        </Switch>

    </div>
    </Router>

  );
}


