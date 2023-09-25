import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenu, setSubmenu] = useState(null);

  const handleMenuOpen = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenu(null);
  };

  const navLinks = [
    { label: 'Home', submenu: null },
    { label: 'About', submenu: ['Team', 'History'] },
    { label: 'Contact', submenu: ['Email', 'Phone'] },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        {navLinks.map((item, index) => (
          <div key={index}>
            <Button
              aria-controls={`submenu-${index}`}
              aria-haspopup="true"
              onClick={(e) => handleMenuOpen(e, item.submenu)}
              color="inherit"
            >
              {item.label} 
            </Button>
            <Menu
              id={`submenu-${index}`}
              anchorEl={anchorEl}
              open={submenu === item.submenu}
              onClose={handleMenuClose}
            >
              {item.submenu &&
                item.submenu.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} onClick={handleMenuClose}>
                    {subItem}
                  </MenuItem>
                ))}
            </Menu>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
