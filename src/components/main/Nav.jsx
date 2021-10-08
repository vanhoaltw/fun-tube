import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Nav = () => {
    return (
        <div className='wrap_body_left'>
            <div>
                <span><HomeIcon/></span>
                <p>Trang chủ</p>
            </div>
            <div>
                <span><ExploreIcon/></span>
                <p>Khám phá</p>
            </div>
            <div>
                <span><OndemandVideoIcon/></span>
                <p>Kênh đăng kí</p>
            </div>
            <br/>
            <div>
                <span><VideoLibraryIcon/></span>
                <p>Thư viện</p>
            </div>
            <div>
                <span><HistoryIcon/></span>
                <p>Video đã xem</p>
            </div>
            <div>
                <span><VideoSettingsIcon/></span>
                <p>Video của bạn</p>
            </div>
            <div>
                <span><ThumbUpIcon/></span>
                <p>Video đã thích</p>
            </div>

            <div>
                <span><KeyboardArrowDownIcon/></span>
                <p>Xem thêm</p>
            </div>

        </div>
    )
}
