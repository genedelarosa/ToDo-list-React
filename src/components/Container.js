import React, {useState} from 'react'
import TaskList from './TaskList'
import FormTODO from './FormTODO'
import { Box } from '@material-ui/core'



function Container() {
    const [list, setList] = useState([])

    const handleAddItem = addItem => {
    setList([...list, addItem])
    }
    
    return (
        <Box>
           <FormTODO handleAddItem={handleAddItem} />
           <TaskList list={list} setList={setList} /> 
        </Box>
        
    )
};
export default Container
