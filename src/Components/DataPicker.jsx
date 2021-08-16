import React, { useState, forwardRef } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const MaterialUIPickers = ({ ...props }, ref) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        margin="normal"
        inputRef={ref}
        id="date-picker-dialog"
        label="Data acces"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        color="secondary"
        // KeyboardButtonProps={{
        //   "aria-label": "change date",
        // }}
      />
    </MuiPickersUtilsProvider>
  );
};
export default forwardRef(MaterialUIPickers);
