import { useState } from "react";

export default function useForm(defaultCategoryValues) {
  const [value, setValue] = useState(defaultCategoryValues);

  const setValues = (key, inValue) => {
    setValue({ ...value, [key]: inValue });
  };

  const onChangeHandler = (eventName) => {
    setValues(eventName.target.getAttribute("name"), eventName.target.value);
  };

  const clearForm = () => {
    setValues(defaultCategoryValues);
  };

  return {
    onChangeHandler,
    value,
    clearForm,
  };
}
