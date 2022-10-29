import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useState } from 'react';
import { addStock } from '../service/api.js';


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}
`
const defaultValue= {
    name:'', 
    id:'',
    quantity:'',
    cost:''
}




const AddStock = () => {

    const [user, setUser] = useState(defaultValue);
    

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const addStockDetails = async (user) => {
        await addStock(user);
    } 

    return(
        <Container>
            <Typography variant="h4">Add Stock</Typography>
            <FormControl>
                <InputLabel>
                Name
                </InputLabel>
                <Input onChange={(e) => onValueChange(e) } name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel>
                Id
                </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="id"/>
            </FormControl>

            <FormControl>
                <InputLabel>
                Quantity
                </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="quantity"/>
            </FormControl>

            <FormControl>
                <InputLabel>
                Cost
                </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="cost"/>
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick={() => addStockDetails()}>Add Stock</Button>
            </FormControl>
        </Container>
    )
}

export default AddStock