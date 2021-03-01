import { InputBase,Button, FormGroup, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React , {useState} from 'react'
import { red, teal, common } from '@material-ui/core/colors'
import Translate from '../i18n/Translate'



const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF',
    margin: '0',
  },
  input: {
    color: teal[700],
  },  
});

function FormTODO(props) {
    const classes = useStyles()

    const [description, setDescription] = useState('')
    
    const { handleAddItem } = props
    
    const handleSubmit = e => {
        e.preventDefault()

        handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
        })
        
        setDescription('')
    };
  
    return (
        <Typography variant="caption" display="block" align='center'>
           <Grid md={8} container justify="center" alignItems="center">
            <FormGroup row='true'>
                <Paper elevation={24} className={classes.root}>
                    <InputBase 
                        className={classes.input}
                        placeholder='Add Task'
                        inputProps={{ 'aria-label': 'add task'}}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        style={{ backgroundColor: red[600], color: common['white'] }}
                        disabled={description ? '' : 'disabled'}
                        >
                        {Translate('add')}
                    </Button>
                </Paper>  
                </FormGroup> 
            </Grid> 
        </Typography>
        
    )
}

export default FormTODO
