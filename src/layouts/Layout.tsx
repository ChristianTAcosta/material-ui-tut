import {
  makeStyles,
  Drawer,
  Typography,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { format } from "date-fns";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
  };
});

export const Layout = ({ children }: any) => {
  const classes = useStyles();
  const history = useHistory();
  const [selected, setSelected] = useState(0);

  const handleListItemClick = (event: any, path: string, index: number) => {
    setSelected(index);
    history.push(path);
  };
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>Today is {format(new Date(), "do MMM Y")}</Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>

      {/* SideDrawer */}
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
        </div>

        {/* Nav Links */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              onClick={(e) => handleListItemClick(e, item.path, index)}
              selected={selected === index}
              key={item.text}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
