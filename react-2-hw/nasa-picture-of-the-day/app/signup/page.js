"use client";

import React, { useRef, useState } from "react";
import { Box, Button, Typography, Paper, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const SignUpForm = () => {
  const router = useRouter();

  // Refs for input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // State for input validation
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleKeyPress = (e, nextFieldRef) => {
    if (e.key === "Enter" && nextFieldRef?.current) {
      e.preventDefault();
      nextFieldRef.current.focus();
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Form validation function
  const validate = () => {
    const newErrors = {};
    if (!values.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!values.email.trim() || !/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Enter a valid email";
    if (!values.phone.trim() || !/^\d{10}$/.test(values.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push("/");
    }
  };

  return (
    <div>
      <Navbar />
      <Box
        component={Paper}
        elevation={3}
        sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="First Name"
            name="firstName"
            inputRef={firstNameRef}
            value={values.firstName}
            onChange={handleChange}
            onKeyPress={(e) => handleKeyPress(e, lastNameRef)}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Last Name"
            name="lastName"
            inputRef={lastNameRef}
            value={values.lastName}
            onChange={handleChange}
            onKeyPress={(e) => handleKeyPress(e, emailRef)}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Email"
            name="email"
            inputRef={emailRef}
            value={values.email}
            onChange={handleChange}
            onKeyPress={(e) => handleKeyPress(e, phoneRef)}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Phone Number"
            name="phone"
            inputRef={phoneRef}
            value={values.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignUpForm;
