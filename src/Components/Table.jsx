import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ rows, tableHead, ...props }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} {...props}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((cell, idx) => (
              <TableCell key={idx}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
            const keys = Object.keys(row);
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row[keys[0]]}
                </TableCell>
                {keys
                  .filter((key, idx) => idx > 0)
                  .map((key, idx) => (
                    <TableCell key={key[idx]}>{row[key]}</TableCell>
                  ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
