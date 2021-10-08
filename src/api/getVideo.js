import axios from 'axios'
import option from './videoAPI'

const getVideo = {
    suggested:(videoId)=>{
        const paramss = {
            relatedToVideoId: videoId ? videoId : '7ghhRHRP6t4',
            part : 'id,snippet',
            type: 'video',
            maxResult: 50
        }
        const method = 'search'
        return axios.request(option(method,paramss));
    },
    detail:async(videoId)=>{
        const paramss = {
            part:'contentDetails,snippet,statistics',
            id: videoId
        }
        const detail = await axios.request(option('videos',paramss));
        const paramssCMT = {
            part:'snippet',
            videoId: videoId,
            maxResult: 40
        }
        const comment = await axios.request(option('commentThreads',paramssCMT))
        return{
            detail: detail,
            comment:comment
        } 
    },

} 

export default getVideo