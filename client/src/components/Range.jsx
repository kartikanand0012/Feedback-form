import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

function Range(props) {
  const { label, name,marks, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        return(
            <React.Fragment key={marks.value}>
                <input
                type="range"
                id={marks.value}
                {...rest}
                />

            </React.Fragment>
        ) </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Range;
