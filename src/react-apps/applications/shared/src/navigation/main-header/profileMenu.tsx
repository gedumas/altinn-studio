import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';

export interface IProfileMenuComponentProps {
  showlogout?: boolean;
  classes?: any;
}

export interface IProfileMenuComponentState {
  anchorEl: any;
  open: boolean;
}

const styles = ({
  paperStyle: {
    borderRadius: 1,
    minWidth: 150,
    padding: 0,
    top: 80,
    right: 25,
  },
  menuItem: {
    fontSize: 16,
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
});

class ProfileMenuComponent extends React.Component<IProfileMenuComponentProps, IProfileMenuComponentState> {
  public state = {
    anchorEl: null as any,
    open: false,
  };

  public handleToggle = () => {
    this.setState((state) => ({ open: !state.open }));
  }

  public handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  public handleClose = () => {
    this.setState({ anchorEl: null });
  }

  public handleLogout = () => {
    this.setState({ anchorEl: null });
    if (window) {
      window.location.href = '/Home/Logout';
    }
    return true;
  }

  public render() {
    const { anchorEl } = this.state;
    const { classes, showlogout } = this.props;

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorReference='none'
          elevation={1}
          classes={{ paper: classes.paperStyle }}
        >
          {showlogout && (
            <MenuItem onClick={this.handleLogout} className={classes.menuItem}>Logout</MenuItem>
          )}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileMenuComponent);
