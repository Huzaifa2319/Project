import axios from 'axios';

const Url = 'http://localhost:8000/';

export const addStock = async (data) => {
    try{
       return await axios.post(`${Url}/add`, data);
    }catch(error){
        console.log('Error in calling api', error)
    }
}