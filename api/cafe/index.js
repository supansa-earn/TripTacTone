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
}

const updateCafe = async () => {

}

const deleteCafe = async () => {

}

export { getCafes, createCafes, updateCafe, deleteCafe }
