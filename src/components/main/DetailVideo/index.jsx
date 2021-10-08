import React,{useState} from 'react'
import { LeftDetail } from './LeftDetail'
import getVideo from '../../../api/getVideo'
import { ListVideo } from '../ListVideo/ListVideo'
import { useParams } from 'react-router'
import { Ouroboro } from 'react-spinners-css'


const DetailVideo = () => {
    const {videoId} = useParams()
    const [loading,setLoading] = useState(true)
    const [dataVideo,setDataVideo] = useState({})
    const [cmt , setCmt]=useState({})
    
    React.useEffect((
        ()=>{
            (async()=>{
                try{
                    setLoading(true)
                    const data = await getVideo.detail(videoId)
                    const { detail, comment} =data
                    setCmt(comment);
                    setDataVideo(detail);
                    setLoading(false)
                }catch(error){
                    console.log('lay video bi loi', error);
                }
            })()
        }
    ),[videoId])
    return (
        <div>
            {loading ? <Ouroboro className='loading'/> : 
            <div className='detail_container'>
                <LeftDetail dataCmt={cmt} dataVideo={dataVideo}/>
                <ListVideo video={videoId}/>
            </div>
            }
    </div>
)}

export default DetailVideo
