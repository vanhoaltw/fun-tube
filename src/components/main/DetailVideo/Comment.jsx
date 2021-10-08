import { Avatar, Badge } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Comment = (props) => {
    const {dataCmt, img} = props
    return (
        <div>
            {dataCmt.data.items.map(cmt=>(
                <div className='comment_container' key={cmt.id}>
                    <Avatar src={cmt.snippet.topLevelComment.snippet.authorProfileImageUrl}>N</Avatar>
                    <span>
                        <h5>{cmt.snippet.topLevelComment.snippet.authorDisplayName}<span> 2 gio truoc</span></h5>
                        <p>
                        {cmt.snippet.topLevelComment.snippet.textDisplay}
                        </p>
                        <div className='comment_container_end' >
                            <ThumbDownAltIcon /> <span className='a'>{cmt.snippet.topLevelComment.snippet.likeCount}</span>
                            <ThumbUpIcon/> 
                            <Badge
                                overlap='circular'
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <FavoriteIcon color='error' sx={{width:'12px', height:'12px'}}/>
                                }
                            >
                                <Avatar sx={{width:'15px', height:'15px'}} src={img}>A</Avatar>
                            </Badge>
                        </div>
                    </span>
                </div>
            ))}
        </div>
    )
}
