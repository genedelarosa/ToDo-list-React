import { Button, Paper, Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import CheckBox from "./Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { teal, common } from "@material-ui/core/colors";
import Translate from "../i18n/Translate";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF",
    margin: "20px",
    color: "#000",
  },
  button: {
    fontSize: 15,
    border: "2px solid",
    fontWeight: "bold",
  },
  box: {
    display: "flex",
  },
  icon: {
    color: teal[400],
  },
});

function TaskList(props) {
  const classes = useStyles();

  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };
  const chk = list.map((item) => (
    <Box className={classes.box}>
      <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
      {item.done ? (
        <IconButton
          aria-label="delete"
          onClick={onClickRemoveItem}
          className={classes.icon}
        >
          <DeleteIcon />
        </IconButton>
      ) : null}
    </Box>
  ));

  return (
    <Typography variant="caption" display="block" gutterBottom align="center">
      <Grid container justify="center">
        <Paper elevation={24} className={classes.root}>
          {list.length ? chk : "No tasks"}
          {list.length > 1 ? (
            <Button
              variant="outlined"
              className={classes.button}
              style={{ backgroundColor: teal[400], color: common["white"] }}
              onClick={onClickRemoveItem}
              startIcon={<DeleteIcon />}
            >
              {Translate("delete task done")}
            </Button>
          ) : null}
        </Paper>
      </Grid>
    </Typography>
  );
}

export default TaskList;
