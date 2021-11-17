import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  mobileNumber: yup.string().trim().required("Mobile number is required"),
});

export default schema;
