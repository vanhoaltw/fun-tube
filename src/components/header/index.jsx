import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import { ShowContext } from '../../App';


export const Header = () => {
    const {setShow, show } = React.useContext(ShowContext) 
    console.log('setShow', show )
    return (
        <div className='wrap_header'>
            <div className='wrap_header_logo'>
                <IconButton onClick={()=> setShow(e => !e)}>
                    <MenuIcon/>
                </IconButton>
                <span>
                    <YouTubeIcon sx={{ fontSize:'2.3rem', color:'red'}}/>
                    
                    <Link to='/' ><h3 >FunTube</h3></Link>
                </span>
            </div>
            <div className='wrap_header_search'>
                <div className="wrap_header_search_input">
                    <input
                        placeholder='Tìm kiếm'
                    />
                        <KeyboardAltIcon/>
                    <button>
                        <SearchIcon/>
                    </button>
                </div>
                <IconButton size='small' color='default'>
                    <MicIcon/>
                </IconButton>
            </div>
            <div className='wrap_header_user'>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <VideoCallIcon/>
                </IconButton>
                <IconButton>
                    <BlurOnIcon/>
                </IconButton>
                <Avatar sizes='small' >A</Avatar>
            </div>
        </div>
    )
}
