import React, { useState } from "react";

/**
 * @param {Object} initialValue
 * @param {Object.Shape} validationSchema (Optional)
 */
const useForm = (initialValue, validationSchema) => {
  const [data, setData] = useState(initialValue);

  const setValue = (key, value) => setData({ ...data, [key]: value });

  return [data, { setValue }];
};

export default useForm;
