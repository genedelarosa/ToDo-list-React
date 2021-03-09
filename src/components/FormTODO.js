import {
  TextField,
  Button,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { red, common } from "@material-ui/core/colors";
import Translate from "../i18n/Translate";

function FormTODO(props) {
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
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{ backgroundColor: red[600], color: common["white"] }}
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
