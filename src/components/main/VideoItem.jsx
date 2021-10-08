import React from 'react'
import { Avatar } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


export const VideoItem = (props) => {
    const {items} = props.listData
    const times = props.timer
    var gettime = '06 : 15'
    const formatTime = (timer)=>{
        const t = timer.split(/T|Z|-|:/g);
        const begin = new Date(times);
        const toTime = new Date(t[0],t[1],t[2],t[3],t[4],t[5]); 
        gettime = `0${toTime.getHours()}`.slice(-2) +' : '+ `0${toTime.getMinutes()}`.slice(-2)
        // year
        const year = begin.getYear() - toTime.getYear();
        if(year >= 1) return year + ' năm trước'
        //month
        const month = begin.getMonth() - toTime.getMonth();
        if(month >=1) return month + ' tháng trước'
        //day
        const day = begin.getDay() - toTime.getDay();
        if(day >= 1) return day + ' ngày trước';
        //hour

        const hour = begin.getHours() - toTime.getHours();
        if(hour >= 1) return hour + ' giờ trước'
        //minute
        const minute = begin.getMinutes() - toTime.getMinutes();
        return minute + ' phút trước'
        
    }   
    return (
        <div  className='wrap_body_right' >
        {items.map((data,i) => (
            data.snippet ?
            <div className='video_item' key={data.id.videoId}>
                <Link to={`/detail/${data.id.videoId}`} style={{textDecoration:'none', color:'black'}}>
              <div 
                className='video_item_thumnail'
                style={{ backgroundImage: `url(${data.snippet.thumbnails.high.url || data.snippet.thumbnails.medium.url || data.snippet.thumbnails.default.url})`}}
              >
                  
                  <span className='video_item_thumnail_timer'> 
                      {gettime}
                  </span>
                  <span className='video_item_thumnail_option'>
                      <div>
                          <div>
                              <span className='a'>XEM SAU</span>
                              <AccessTimeIcon fontSize='small'/>
                          </div>
                      </div>
                      <div>
                          <div>
                              <span className='a'>THÊM VÀO DANH SÁCH CHỜ</span>
                              <PlaylistAddIcon fontSize='small'/>
                          </div>
                      </div>
                  </span>
              </div>
              <span className='video_item_bottom'>
                        <div>
                            <Avatar src={data.snippet.thumbnails.high.url}> {!data.snippet.thumbnails.high.url ?  data.snippnet.channelTitle.charAt(0) : ''}</Avatar>
                        </div>                                 
                  <div className='video_item_bottom_description'>
                      <MoreVertIcon className='video_item_bottom_description_option'/>
                      <h4>{data.snippet.title}</h4>
                      <p>{data.snippet.channelTitle}</p>
                      <div>
                          <p>1,335,000</p>
                          <FiberManualRecordIcon/>
                          <p>{formatTime(data.snippet.publishedAt)}</p>
                      </div>
                  </div>    
              </span>
            </Link>
          </div>
            : ''
        ))}

        </div>
      
    )
}
