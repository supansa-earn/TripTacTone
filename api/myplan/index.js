import axios from "axios"

const getPlan = async (id) => {
  try {
    if(!id) return []
    let endpoint =  `${process.env.baseAPI}/myplan/${id}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

// const getSuggestPlan = async(id) => {
//   try {
//     if(!id) return []
//     let endpoint =  `${process.env.baseAPI}/myplan/${id}`
//     const res = await axios(endpoint)

//     return res.data

//   } catch (error) {
//     throw error
//   }

// }



export { getPlan }
