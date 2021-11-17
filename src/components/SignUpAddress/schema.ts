import * as yup from "yup";

const schema = yup.object().shape({
  cep: yup
    .string()
    .trim()
    .required("CEP is required")
    .min(8, "CEP must be at least 8 digits long"),
  address1: yup.string().trim().required("Address 1 is required"),
  address2: yup.string().trim().notRequired(),
  number: yup.string().trim().required("Number is required"),
  district: yup.string().trim().required("District is required"),
  city: yup.string().trim().required("City is required"),
  state: yup.string().trim().required("State is required"),
});

export default schema;
