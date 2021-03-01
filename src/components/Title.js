import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Translate from '../i18n/Translate'



const useStyles = makeStyles({
  root: {
    paddingTop: '10%',
  },
});

const Title = () => {
    const classes = useStyles() 
    return (
        <Typography className={classes.root} variant="h3" gutterBottom align='center' >
          {Translate('pending task')}
        </Typography>
    )
}

export default Title
