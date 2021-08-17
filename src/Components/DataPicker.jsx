import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const MaterialUIPickers = ({ onChange, onBlur, selected }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Data acces"
        format="MM/dd/yyyy"
        value={selected}
        onChange={onChange}
        onBlur={onBlur}
        color="secondary"
      />
    </MuiPickersUtilsProvider>
  );
};
export default MaterialUIPickers;
