import axios from "axios"
const deleteCafe = async (id) => {
  try {
    const endpoint =  `${process.env.baseAPI}/cafe/${id}`
    const res = await axios.delete(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}
export { deleteCafe }
