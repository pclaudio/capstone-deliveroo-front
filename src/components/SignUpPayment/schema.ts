import * as yup from "yup";

const schema = yup.object().shape({
  payment: yup.string().nullable().required("Payment is required"),
});

export default schema;
