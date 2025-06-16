import { storiesService } from "../services/storiesService"
import { useEffect, useState } from "react"

export function useStories() {
    const [storiesData, setStoriesData] = useState([])
    async function fetchReportsData() {
        try {
            const reports = await storiesService()
            setStoriesData(reports.data)
        } catch (error) {
            console.error('error inesperado: ',error)
        }
    }
    useEffect(() =>{
      fetchReportsData() 
    },[])
  return {
    storiesData
  }
    
}
