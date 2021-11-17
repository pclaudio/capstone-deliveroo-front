import * as yup from "yup";

const schema = yup.object().shape({
  theme: yup.string().nullable().required("Theme is required"),
});

export default schema;
