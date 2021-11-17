import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("It's not a valid email"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(5, "Password must be at least 5 digits long"),
});

export default schema;
