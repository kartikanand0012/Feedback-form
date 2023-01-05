import "./form.css";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { React, useState } from "react";
import { Slider } from "@material-ui/core";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const [service, setService] = useState("");
  const [rating, setRating] = useState("");

  const handleRating = (e, val) => {
    setRating(val);
  };

  const handleService = (e, val) => {
    setService(val);
  };

  const mark = [
    {
      value: 0,
      label: "Bad",
    },
    {
      value: 2.5,
      label: "Fair",
    },
    {
      value: 5,
      label: "Good",
    },
    {
      value: 7.5,
      label: "Excellent",
    },
  ];
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Yes", value: "yes" },
    { key: "No", value: "no" },
    { key: "Maybe", value: "maybe" },
    { key: "wait for result", value: "result" },
  ];

  const radioOptions = [
    { key: "Yes", value: "yes" },
    { key: "No", value: "no" },
  ];

  const initialValues = {
    email: "",
    comment: "",
    refer: "",
    usage: "",
    sideEffects: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    comment: Yup.string().required("Required"),
    refer: Yup.string().required("Required"),
    usage: Yup.string().required("Required"),
    sideEffects: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    let data = {
      service: service,
      rating: rating,
      ...values,
    };

    const config = {
      method: "post",
      url: "http://localhost:4001/api/feedback-form",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="phone"
            label="Phone"
            name="phone"
          />

          <FormikControl
            control="radio"
            label="Do you use traya products regularly?"
            name="usage"
            options={radioOptions}
          />
          <FormikControl
            control="radio"
            label="Did you have any side affects ?"
            name="sideEffects"
            options={radioOptions}
          />

          <div className="rating slider">
            <label>Rate traya products</label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "95%",
              }}
            >
              <Slider
                name="rating"
                max={10}
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                onChange={handleRating}
              />
            </div>
          </div>

          <div className="service slider">
            <label>How do you like the service from you Hair coach?</label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "95%",
              }}
            >
              <Slider
                name="service"
                max={7.5}
                step={2.5}
                marks={mark}
                onChange={handleService}
              />
            </div>
          </div>
          <FormikControl
            control="select"
            label="Would you refer traya to any one?"
            name="refer"
            options={dropDownOptions}
          />
          <FormikControl control="textarea" label="Comment" name="comment" />
          <div className="button-container">
            <button className="form-submit-button" type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
