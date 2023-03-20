import axios from "axios"

const getPlan = async (userId) => {
  try {
    if(!userId) return []
    let endpoint =  `${process.env.baseAPI}/myplan/${userId}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getSuggestPlan = async(id) => {
  try {
    let endpoint =  `${process.env.baseAPI}/myplan/id`
    if (id) endpoint = `${endpoint}/${id}`
    const res = await axios.get(endpoint)

    return res.data

  } catch (error) {
    throw error
  }

}



export { getPlan, getSuggestPlan }
