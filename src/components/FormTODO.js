import {
  TextField,
  Button,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { teal, common } from "@material-ui/core/colors";
import Translate from "../i18n/Translate";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF",
    color: common["black"],
  },
});

function FormTODO(props) {
  const classes = useStyles();
  const [description, setDescription] = useState("");

  const { handleAddItem } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });

    setDescription("");
  };

  return (
    <Typography variant="caption" display="block" align="center">
      <Grid container justify="center" alignItems="center">
        <FormGroup row="true">
          <TextField
            variant="outlined"
            placeholder="Add Task"
            inputProps={{ "aria-label": "add task" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={classes.root}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{
              backgroundColor: teal[400],
              color: common["white"],
              fontWeight: "bold",
            }}
            disabled={description ? "" : "disabled"}
          >
            {Translate("add")}
          </Button>
        </FormGroup>
      </Grid>
    </Typography>
  );
}

export default FormTODO;
