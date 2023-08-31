import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CableIcon from '@mui/icons-material/Cable';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cartcontext from '../../context/Cartcontext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function Navbar() {
  const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const ItemQuantity=useContext(cartcontext);
  const {cartitem}=ItemQuantity
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CableIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Box sx={{width:"50%",display:"flex",justifyContent:"flex-start"}}>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Estore
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            LOGO
          </Typography>
          
            </Box>
          <Box sx={{ flexGrow: 0 ,width:"50%",display:"flex",justifyContent:"flex-end"}} >
            
              <IconButton  sx={{ p: 0 }}>

              <StyledBadge badgeContent={cartitem.length} color="secondary">
             <Link to={'/Products/Cart'} style={{color:"white"}}>
        <ShoppingCartIcon />
              </Link> 
      </StyledBadge> 
              </IconButton>
      <Button style={{color:"black",marginLeft:"20px",fontFamily:"monospace",fontWeight:"bold"}}  onClick={()=>navigate("/login")} variant="contained">Login</Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;