import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const Context = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function ContextProvider(props){ 
  const [inventoryCollection, setInventoryCollection] = useState([])
  const [cartCollection, setCartCollection] = useState([])
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: "" 
  }
  const [userState, setUserState] = useState(initState)

  function handleAuthErr(errMsg){
    setUserState(prev => ({
      ...prev,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prev => ({
      ...prev,
      errMsg: ""
    }))
  }

  const signup = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/signup', credentials)
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prev => ({
        ...prev,
        user, 
        token
      }))
    } catch (err) {
      handleAuthErr(err.response.data.errMsg)   
    }
  }

  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials)
      const {user, token, admin} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prev => ({
        ...prev,
        user, 
        token
      }))
    } catch (err) {
      handleAuthErr(err.response.data.errMsg)   
    }
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user") 
    setUserState({
      user: {},
      token: ""
    })   
  }

  const getInventory = async () => {
    try {
      const res = await axios.get('/api/get/inventory')
      setInventoryCollection(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const addProduct = async (newProduct) => {
    try {
      const res = await userAxios.post('/api/admin/inventory', newProduct)  
      setInventoryCollection(prev => [...prev, res.data])
    } catch (err) {
      console.log(err.response.data.errMsg)  
    }
  }

  const deleteProduct = async (productId) => {
    try {
      const res = await userAxios.delete(`/api/admin/inventory/${productId}`)
      setInventoryCollection(prev => prev.filter(product => product._id !== productId))
    } catch (err) {
      console.log(err.response.data.errMsg)  
    }
  }

  const editProduct = async (updates, productId) => {
    try {
      const res = await userAxios.put(`/api/admin/inventory/${productId}`, updates)
      setInventoryCollection(prev => prev.map(product => product._id !== productId ? product : res.data))
    } catch (err) {
      console.log(err.response.data.errMsg)  
    }
  }

  useEffect(() => {
    getInventory() 
  }, []) 

  return(
    <Context.Provider value={{
        ...userState,
        inventoryCollection,
        cartCollection,
        setCartCollection,
        resetAuthErr,
        signup,
        login,
        logout,
        addProduct,
        deleteProduct,
        editProduct
    }}>
      {props.children}
    </Context.Provider>
  )
} 