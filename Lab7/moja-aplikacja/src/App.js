import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NestedList from './Home.jsx';
import Form from './Form.jsx';
import TransferList from './Transfer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Form">Formularz</Link>
            </li>
            <li>
              <Link to="/Transfer">Transfer List</Link>
            </li>
          </ul>
        </nav>
        </Typography>
  </Toolbar>
</AppBar>

        <Switch>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Transfer">
            <TransferList />
          </Route>
          <Route path="/">
            <NestedList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
