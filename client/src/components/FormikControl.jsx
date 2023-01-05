import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import Slidertag from "./Slidertag";
import Range from "./Range";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "slider":
      return <Slidertag {...rest} />;
    case "range":
      return <Range {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
