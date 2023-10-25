import axios from 'axios'
import { baseUrl, detailUrl } from '../Main_Api'

export const getVideos=async()=>{
  return await axios.get('../api/videos.json')
    .then(resp=>{
        return resp.data
    })
}


export const getPopularMovie=async()=>{
    return await axios.get(`${baseUrl}hard`)
      .then(resp=>{
        //   console.log(resp.data.results);
          return resp.data.results
      })
  }


export const getBestComedies = async()=>{
    return await axios.get(`${baseUrl}comedy`)
    .then(resp=>{
       return resp.data.results
    })
}

export const getActionAdventure = async()=>{
    return await axios.get(`${baseUrl}action`)
    .then(resp=>{
        return resp.data.results
    })
}


export const getMyList = async()=>{
  return await axios.get(detailUrl)
  .then(resp=>{
    return resp.data.results
  })
}
  


