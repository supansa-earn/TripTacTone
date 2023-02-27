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

<<<<<<< HEAD
const createCafes = async () => {
  axios.post('/login', {
    dialog: false,
    items: ["Dark", "Light", "Earthy", "Pastel"],
    styles: ["Minimal", "Japandi", "Loft", "Modern"],
    times: ["8.00-10.00", "11.00-13.00", "15.00-17.00"],
    image: "",
    imagePreview: "",
  });
  // try {
  //   // let endpoint =  `${process.env.baseAPI}/cafe`
  //   // if(id) endpoint = `${endpoint}/${id}`
  //   // const res = await axios(endpoint)

  //   // return res.data
  // } catch (error) {
  //   throw error
=======
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
>>>>>>> 1a472180a159dcc391d2896e27abd9da8cad3068
}

const updateCafe = async () => {

}

const deleteCafe = async () => {

}

export { getCafes, getAllDetailCafes, createCafes, updateCafe, deleteCafe }
