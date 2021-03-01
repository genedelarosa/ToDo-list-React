import React, {useContext} from 'react';
import{ MenuItem, IconButton, Menu, Typography} from '@material-ui/core'
import {Context} from '../i18n/Wrapper'
import LanguageIcon from '@material-ui/icons/Language'
import { red } from '@material-ui/core/colors'




function MenuLang(props) {
  const context = useContext(Context)
  const [ anchorEl,setAnchorEl ] = React.useState(null)

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (locale) => {
    setAnchorEl(null);
context.selectLanguage(locale)
  };


  return (
    <Typography align='right'>
      <IconButton 
        variant='contained' 
        aria-controls="simple-menu" 
        aria-haspopup="true"
        onClick={openMenu}
        >
        <LanguageIcon style={{ color: red[700] }}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
        <MenuItem onClick={() => handleClose('es')}>Español</MenuItem>
      </Menu>
    </Typography>
  );
}
export default MenuLang;