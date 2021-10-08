
const option=(method, paramss)=>{
  return{
      method:'get',
      url:`https://youtube-v31.p.rapidapi.com/${method}`,
      params: paramss,
      headers: {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': '3a7d69f1a7msh94493200be81e8cp19fdf7jsndb0ea0c33791'
      }
    }
} 

export default option
