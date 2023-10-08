import React from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCaseId } from "state";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import { useSelector } from "react-redux";
import { send } from "utils/Push";

const caseSchema = yup.object().shape({
  name: yup.string().required("required"),
  userId: yup.string().required("required"),
  caseId: yup.string().required("required"),
  location: yup.string().required("required"),
  // picture: yup.string().required("required"),
  issues: yup.string().required("required"),
  laws: yup.string().required("required"),
  lawType: yup.string().required("required"),
  courtType: yup.string().required("required"),
  petitioners: yup.string().required("required"),
  respondents: yup.string().required("required"),
  precedents: yup.string().required("required"),
});
const initialValuesCaseFilling = {
  name: "",
  userId: "",
  caseId: "",
  location: "",
  // picture:"",
  issues: "",
  laws: "",
  lawType: "",
  courtType: "",
  petitioners: "",
  respondents: "",
  precedents: "",
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const Case = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const requestBody = JSON.stringify(values);
    // const formData = new FormData();
    // for (let value in values) {
    //   formData.append(value, values[value]);
    // }
    // formData.append("picturePath", values.picture.name);

    const savedCaseResponse = await fetch("http://localhost:5001/casecreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: requestBody,
    });
    const savedCase = await savedCaseResponse.json();
    console.log("savedCase", savedCase);
    dispatch(
      setCaseId({
        caseId: values.caseId,
      })
    );

    navigate("/dashboard");

    onSubmitProps.resetForm();
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("FormSubmit", values);
    if (true) await Case(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesCaseFilling}
      validationSchema={caseSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 4" }}
            />

            <TextField
              label="userId"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.userId}
              name="userId"
              error={Boolean(touched.userId) && Boolean(errors.userId)}
              helperText={touched.userId && errors.userId}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="caseId"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.caseId}
              name="caseId"
              error={Boolean(touched.caseId) && Boolean(errors.caseId)}
              helperText={touched.caseId && errors.caseId}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="location"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
              name="location"
              error={Boolean(touched.location) && Boolean(errors.location)}
              helperText={touched.location && errors.location}
              sx={{ gridColumn: "span 4" }}
            />

            <TextField
              label="issues"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.issues}
              name="issues"
              error={Boolean(touched.issues) && Boolean(errors.issues)}
              helperText={touched.issues && errors.issues}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="laws"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.laws}
              name="laws"
              error={Boolean(touched.laws) && Boolean(errors.laws)}
              helperText={touched.laws && errors.laws}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="lawType"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lawType}
              name="lawType"
              error={Boolean(touched.lawType) && Boolean(errors.lawType)}
              helperText={touched.lawType && errors.lawType}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="courtType"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.courtType}
              name="courtType"
              error={Boolean(touched.courtType) && Boolean(errors.courtType)}
              helperText={touched.courtType && errors.courtType}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="petitioners"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.petitioners}
              name="petitioners"
              error={
                Boolean(touched.petitioners) && Boolean(errors.petitioners)
              }
              helperText={touched.petitioners && errors.petitioners}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="respondents"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.respondents}
              name="respondents"
              error={
                Boolean(touched.respondents) && Boolean(errors.respondents)
              }
              helperText={touched.respondents && errors.respondents}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="precedents"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.precedents}
              name="precedents"
              error={Boolean(touched.precedents) && Boolean(errors.precedents)}
              helperText={touched.precedents && errors.precedents}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box
            gridColumn="span 4"
            border={`1px solid ${palette.neutral.medium}`}
            borderRadius="5px"
            p="0rem"
            paddingTop="1rem"
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setFieldValue("picture", acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!values.picture ? (
                    <p>Add Document Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{values.picture.name}</Typography>
                      <EditOutlinedIcon />
                    </FlexBetween>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>
          {/* BUTTONS */}
          <Button
            fullWidth
            type="submit"
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.secondary[100],
              color: "black",
              "&:hover": { color: palette.primary.main },
            }}
          >
            {"Submit"}
          </Button>
          {/* {setTimeout(() => {
            send("Case Filed", "Please check it out...");
          }, 40000)} */}
        </form>
      )}
    </Formik>
  );
};

export default Form;
