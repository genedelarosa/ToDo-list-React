import { FormControlLabel, Checkbox, Grid } from "@material-ui/core"
import React, { Fragment } from "react"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckIcon from '@material-ui/icons/Check'
import { teal} from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    color: teal[400]

  },
});

function CheckBox(props) {
  const classes = useStyles()
  const {
    onChange,
    data: { id, description, done }
  } = props
  
  return (
    <Fragment>
      <Grid container direction="row" justify="center" alignItems="center" >
        <FormControlLabel 
          control={
            <Checkbox 
              checked={done} 
              onChange={onChange} 
              name={id}
              style={{ width: 36, height: 36}}
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 25, color: teal[400] }} />}
              checkedIcon={<CheckIcon style={{ fontSize: 25,color: teal[400] }} />}/> }
          label={description}
          className={classes.root}
        />
      </Grid>      
    </Fragment>
  )
}

export default CheckBox
