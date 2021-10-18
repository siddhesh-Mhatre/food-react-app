import Popover from "@material-ui/core/Popover";
import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
const Pop = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button type="submit" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Book now 
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorPosition={{ top: 150, left: 700 }}
          anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
          transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
        >
          <Typography className={classes.typography}> {props.Date_}  at time {props.Time} are Reserved</Typography>
        </Popover>
      </div>
    );
};

export default Pop;