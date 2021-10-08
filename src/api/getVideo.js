import axios from 'axios'
import option from './videoAPI'

const getVideo = {
    suggested:(videoId)=>{
        const a = typeof videoId != 'undefined' ? videoId : 'qjc1XWH9kUU'
        const paramss = {
            relatedToVideoId: a ,
            part : 'id,snippet',
            type: 'video',
            maxResults: '20',
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