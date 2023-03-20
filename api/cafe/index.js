import axios from "axios"

const getCafes = async (id = null) => {
  try {
    let endpoint = `${process.env.baseAPI}/cafe`
    if (id) endpoint = `${endpoint}/${id}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getStyles = async (id = null) => {
  try {
    let endpoint = `${process.env.baseAPI}/cafe`
    if (id) endpoint = `${endpoint}/${id}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getWithStyles = async (style) => {
  try {
    const endpoint = `${process.env.baseAPI}/cafe/style/${style}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getWithTones = async (tone) => {
  try {
    const endpoint = `${process.env.baseAPI}/cafe/tone/${tone}`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const getAllDetailCafes = async (id = null) => {
  try {
    let endpoint = process.env.baseAPI
    if (id) endpoint = `${endpoint}/${id}`
    endpoint = `${endpoint}/cafe?allDetails=true`
    const res = await axios(endpoint)

    return res.data
  } catch (error) {
    throw error
  }
}

const updateCafe = async (data,id = null) => {
  try {
    let endpoint =  `${process.env.baseAPI}/cafe/${id}`
    const res = await axios.put(endpoint, data)
    console.log(data)
    return res.data
  } catch (error) {
    throw error
  }
}



export { getCafes, getAllDetailCafes, updateCafe, getStyles, getWithStyles, getWithTones }
