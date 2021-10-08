import React from 'react'
import { VideoItem } from '../VideoItem'
import  getVideo  from '../../../api/getVideo'
import { Ouroboro } from 'react-spinners-css'

export const ListVideo = (video) => {
    const [loading, setLoading] = React.useState(true);
    const { videoId } = video
    const [time, setTime] = React.useState(new Date());
    const [data, setData] = React.useState({})
    React.useEffect((
        ()=>{
            (async()=>{
                try{
                    const respone = await getVideo.suggested(videoId);
                    console.log('data: ', respone.data);
                    setData(respone.data);
                    setLoading(false)
                }catch(error){
                    console.log('Get Error:',error)
                }
            })()
        }
    ),[])

    return (
        <div>
            {loading ? <Ouroboro/> :  <VideoItem listData={data} timer={time}/> }                       
        </div>
    )
}
