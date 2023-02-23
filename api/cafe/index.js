import axios from "axios"

const getCafes = async (id=null) => {
  try {
    let endpoint =  `${process.env.baseAPI}/cafe`
    if(id) endpoint = `${endpoint}/${id}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getAllDetailCafes = async (id=null) => {
  try {
    let endpoint =  process.env.baseAPI
    if(id) endpoint = `${endpoint}/${id}`
    endpoint = `${endpoint}/cafe?allDetails=true`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const createCafes = async (id=null) => {
  try {
    let endpoint =  `${process.env.baseAPI}/cafe`
    if(id) endpoint = `${endpoint}/${id}`
    const res = await axios.post(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const updateCafe = async () => {

}

const deleteCafe = async () => {

}

export { getCafes, getAllDetailCafes, createCafes, updateCafe, deleteCafe }
