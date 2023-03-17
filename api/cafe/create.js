import axios from "axios"

export const createCafes = async (data) => {
  try {
    let endpoint =  `${process.env.baseAPI}/cafe`
    const res = await axios.post(endpoint, data)

    return res.data
  } catch (error) {
    throw error
  }
}
