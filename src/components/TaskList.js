import { Button, Paper, Grid, Typography } from "@material-ui/core"
import React from "react"
import CheckBox from "./Checkbox"
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { teal,common } from '@material-ui/core/colors'
import Translate from '../i18n/Translate'



const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF',
    margin: '20px',
    color: '#000',
  },
  button: {
    fontSize: 15,
    border: '2px solid',    
  },
  
});

function TaskList(props) {

    const classes = useStyles()

    const { list, setList } = props
    
    const onChangeStatus = e => {
        
        const { name, checked } = e.target
        
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }))
        setList(updateList)
    }
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    }
    const chk = list.map(item => (
        <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
    ))
    
    return (
        <Typography variant="caption" display="block" gutterBottom align='center'>
            <Grid container  justify="center" >
                <Paper elevation={24} className={classes.root}>
                    {list.length ? chk : 'No tasks' }
                    {list.length ? (
                    <p>
                        <Button 
                            variant='outlined'
                            className={classes.button} 
                            style={{ backgroundColor: teal[400], color: common['white'] }}
                            onClick={onClickRemoveItem} 
                            startIcon={<DeleteIcon />}
                        >
                            {Translate('delete task done')}
                        </Button>
                    </p>
                    ) : null}  
                </Paper>
            </Grid>  
        </Typography>
        
  )
}

export default TaskList
