import React from 'react'
import { VideoItem } from '../VideoItem'
import  getVideo  from '../../../api/getVideo'
import { Ouroboro } from 'react-spinners-css'

export const ListVideo = (video) => {
    const [loading, setLoading] = React.useState(true);
    const a = video
    const [time, setTime] = React.useState(new Date());
    const [dataVd, setDa] = React.useState({})
    React.useEffect((
        ()=>{
            (async()=>{
                const res = await getVideo.suggested(a.video);
                console.log("videos",res)
                setDa(e =>  res.data);
                setLoading(false)
                try{
                }catch(error){
                    console.log('Get Error:',error)
                }
            })()
        }
    ),[])

    return (
        <div>
         
            {loading ? <Ouroboro className='loading'/> :  <VideoItem listData={dataVd} timer={time}/>   }                
         
        </div>
    )
}
