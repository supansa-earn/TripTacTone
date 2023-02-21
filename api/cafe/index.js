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

const createCafes = async () => {
  // try {
  //   // let endpoint =  `${process.env.baseAPI}/cafe`
  //   // if(id) endpoint = `${endpoint}/${id}`
  //   // const res = await axios(endpoint)

  //   // return res.data
  // } catch (error) {
  //   throw error
}

const updateCafe = async () => {

}

const deleteCafe = async () => {

}

export { getCafes, createCafes, updateCafe, deleteCafe }
