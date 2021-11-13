import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().trim().required("*Digite um email"),
  password: yup.string().trim().required("*Digite uma senha"),
});

export default schema;
