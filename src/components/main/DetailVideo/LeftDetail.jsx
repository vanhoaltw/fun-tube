import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//dislike
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import SortIcon from '@mui/icons-material/Sort';

import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Avatar, Button, Chip, TextField } from '@mui/material';

import { Comment } from './Comment'

export const LeftDetail = (props) => {
    const [external , setExternal] = React.useState(true)
    const {dataCmt, dataVideo} = props
    const formatTag = (num)=>{
        if(!num)return
        return num.length > 5 ? num.slice(0,6) : num
        
    }
    const formatTime = (timer)=>{
        const t = timer.split(/T|Z|-|:/g);
        return `${t[2]} thg ${t[1]}, ${t[0]}`
    }
    const formatCount = (count)=>{
        const countStr = count.toString()
        if(count >= 1000){
            return countStr.slice(0,2) + ' N'
        }else if( count >= 1000000){
            return countStr.slice(0,2) +' M'
        }else return count
    }
    const formatViewCount = (view)=>{
            if (!view) return 0
            view = view.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(view))
                view = view.replace(pattern, "$1,$2");
            return view;
    }
    return (
        <div className='left'>
            <div className='left_video' style={{
                backgroundImage:`url(${dataVideo.data.items[0].snippet.thumbnails.standard.url ? dataVideo.data.items[0].snippet.thumbnails.standard.url : dataVideo.data.items[0].snippet.thumbnails.medium.url})`
            }}></div>
            <div>
                <div>
                    {dataVideo.data.items[0].snippet.tags ? formatTag(dataVideo.data.items[0].snippet.tags).map(tag =>(
                        <Chip size='small' label={`#${tag}`} /> 
                    )) : ''}
                </div>
                <h3>{dataVideo.data.items[0].snippet.title}</h3>
            </div>
            
            <div className='left_emotion'>
                <p>{formatViewCount(dataVideo.data.items[0].statistics.viewCount)} lượt xem -{formatTime(dataVideo.data.items[0].snippet.publishedAt)}</p>
                <span className='left_emotion_like'>
                    <span>
                        <ThumbUpAltOutlinedIcon/>
                        <p>{formatCount(dataVideo.data.items[0].statistics.likeCount) }</p>
                    </span>
                    <span>
                        <ThumbDownAltOutlinedIcon/>
                        <p>{formatCount(dataVideo.data.items[0].statistics.dislikeCount)}</p>
                    </span>
                    <span>
                        <ShareIcon/>
                        <p>CHIA SE</p>                   
                    </span>
                    <span>
                        <SaveAltIcon/>
                        <p>LUU</p>
                    </span>
                </span>


            </div>
            <div className='left_info'>
                <div className='left_info_left'>
                    <Avatar sx={{width:'45px', height:'45px'}} src={dataVideo.data.items[0].snippet.thumbnails.high.url}>A</Avatar>
                </div>
                <div className='left_info_right'>
                    <div className='left_info_right_top'>
                        <span>
                            <h4>{dataVideo.data.items[0].snippet.channelTitle}</h4>
                            <p>{formatViewCount(dataVideo.data.items[0].statistics.viewCount)}</p>    
                        </span>
                        <Button variant='contained' color='error'>Đăng kí</Button>
                    </div>
                    <div>
                        <div style={{
                            overflow:'hidden',
                            height:`${external ? '40px' : '100%'}`
                        }}>
                            <p>{dataVideo.data.items[0].snippet.description}</p>
                        </div>
                        <Button variant='text' color='inherit' sx={{textTransform:'none', fontWeight:'600'}} onClick={()=> setExternal(e => !e)}>{external ? 'Hiện thêm' : 'Ẩn bớt'}</Button>
                    </div>
                </div>
            </div>
            <div className='left_cmt'>
                    <div className='left_cmt_t'>
                        <p>{formatViewCount(dataVideo.data.items[0].statistics.commentCount)} bình luận</p>
                        <Button variant='text' startIcon={<SortIcon/>} color='inherit'> sắp xếp </Button>
                    </div>
                    
                    <div className='left_cmt_b'>
                        <Avatar src={dataVideo.data.items[0].snippet.thumbnails.high.url}>{!dataVideo.data.items[0].snippet.thumbnails.high.url ? dataVideo.data.items[0].snippet.channelTitle.charAt(0) : dataVideo.data.items[0].snippet.thumbnails.high.url}</Avatar>
                        <span>
                            <TextField
                                id='standard-search'
                                label='Bình luận ở đây...'
                                variant='standard'
                                fullWidth
                            />
                                <Button variant='contained' size='small'> Bình luận </Button>
                                <Button disabled size='small'> Hủy </Button>
                        </span>
                    </div>
                    {formatViewCount(dataVideo.data.items[0].statistics.commentCount) == 0 ? '' : 
                        <Comment dataCmt={dataCmt} img={dataVideo.data.items[0].snippet.thumbnails.default.url}/>
                    }
            </div>
        </div>
    )
}
