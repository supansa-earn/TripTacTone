import axios from "axios"

const CreatePlan = async (data) => {
  try {
    let endpoint =  `${process.env.baseAPI}/myplan`
    const res = await axios.post(endpoint,data )

    return res.data
  } catch (error) {
    throw error
  }
}

export { CreatePlan }
