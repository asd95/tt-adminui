import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import HeaderContainer from "../Components/HeaderContainer";
import BasicTable from "../Components/Table";
import DataPicker from "../Components/DataPicker";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const useStyles = makeStyles((theme) => {
  return {
    title: {
      padding: "14px 0px",
    },
    container: {
      padding: "0 1em",
      marginTop: "1em",
    },
    form: {
      display: "flex",
      alignItems: "center",
      marginTop: ".3em",
      "& > *": {
        margin: "0 .3em",
        "min-width": "150px",
      },
    },
    searchResults: {
      margin: "2em 0",
    },
  };
});

const rows = [
  {
    name: "John Doe",
    idnp: "20542345876542",
    tel: "373794456969",
    "pan card": "2019 3820 2323 4477",
    "last transaction": "14:45 12/12/18",
  },
  {
    name: "John Doe",
    idnp: "20542345876542",
    tel: "373794456969",
    "pan card": "2019 3820 2323 4477",
    "last transaction": "14:45 12/12/18",
  },
  {
    name: "John Doe",
    idnp: "20542345876542",
    tel: "373794456969",
    "pan card": "2019 3820 2323 4477",
    "last transaction": "14:45 12/12/18",
  },
];
const tableHead = [
  "Nume Prenume",
  "IDNP",
  "Nr. Telefon",
  "PAN Card",
  "Last transaction",
];

const schema = yup.object().shape({
  idnp: yup.string().matches(/(^$)|^[0-9]{14}$/, "Input 14 numbers"),
  tel: yup
    .string()
    .matches(/(^$)|^((3737|3736)([0-9]){7})$/, "input valid phone number"),
});

const Suport = () => {
  const classes = useStyles();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <HeaderContainer>
        <Typography variant="h6" component="h1" className={classes.title}>
          Suport
        </Typography>
      </HeaderContainer>

      <div className={classes.container}>
        <Typography
          variant="subtitle1"
          component="h2"
          color="initial"
          style={{ fontWeight: "500" }}
        >
          Cauta Utilizator:
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-basic"
            label="IDNP"
            color="secondary"
            {...register("idnp", { required: true })}
            error={!!errors.idnp}
            // helperText={errors?.idnp?.message}
          />

          <TextField
            label="Nr. telefon"
            color="secondary"
            name="phone"
            {...register("tel", { required: true })}
            error={!!errors.tel}
          />
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value = null } }) => (
              <DataPicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
              />
            )}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            size="medium"
            style={{ color: "#fff" }}
          >
            Cauta
          </Button>
        </form>

        <div className={classes.searchResults}>
          <Typography
            variant="subtitle1"
            component="h3"
            color="initial"
            style={{ fontWeight: "500" }}
          >
            Rezultate cautare: John Doe
          </Typography>

          <BasicTable
            rows={rows}
            tableHead={tableHead}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Suport;
