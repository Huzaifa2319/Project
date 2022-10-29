import mongoose from "mongoose"



const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@managestock.gqyi2vo.mongodb.net/?retryWrites=true&w=majority`

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
       console.log("Database connected Successfully")
    }catch(error){
        console.log('Error while connecting with DB', error)
    }
}


export default Connection;