import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "./constants";

export default function ContactForm({ onClose, constants }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Form has been successfully saved.");
  };

  return (
    <Formik
      initialValues={constants}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full">
              <Input
                label="First Name"
                name="firstname"
                className="w-[50%]"
                required
              />
              <Input
                label="Last Name"
                name="lastname"
                className="ml-2"
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              className="w-full flex-grow-0"
              required
            />
            <Select
              name="role"
              label="Role"
              className="w-full flex-grow-0"
              options={[
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
                { value: "Dev", label: "Dev" },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
