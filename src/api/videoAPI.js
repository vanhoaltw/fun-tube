
const option=(method, paramss)=>{
  return{
      method:'get',
      url:`https://youtube-v31.p.rapidapi.com/${method}`,
      params: paramss,
      headers: {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': '16ea4fca49msha173557c1ef55b1p19e1e8jsna8e2bf5b6549'
      }
    }
} 

export default option
