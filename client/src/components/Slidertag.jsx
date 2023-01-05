import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import TextError from "./TextError";
import { Slider, Box } from "@material-ui/core";
import { useState } from "react";

function Slidertag(props) {
  const { label, name, ...rest } = props;

  const [service, setService] = useState("");
  const [rating, setRating] = useState("");

  const handleChange = (e, val) => {
    if (name === "service") {
      console.log("SERVICE--->", val);
      setService(val);
    }
    if (name === "rating") {
      console.log("RATING--->", val);
      setRating(val);
    }
  };
  return (
    <div className="form-control">
      <Form>
        
          <label htmlFor={name}>{label}</label>
          <Field
            component={Slider}
            id={name}
            name={name}
            {...rest}
            onChange={handleChange}
          />
      </Form>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Slidertag;
