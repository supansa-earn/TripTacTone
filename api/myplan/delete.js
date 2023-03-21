import axios from "axios"
const deletePlan = async (id) => {
  try {
    const endpoint =  `${process.env.baseAPI}/myplan/${id}`
    const res = await axios.delete(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}
export { deletePlan }
