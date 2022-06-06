import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Toastr } from "neetoui";
import { Input, Textarea } from "neetoui/formik";

import { NOTES_FORM_VALIDATION_SCHEMA } from "./constants";

export default function NoteForm({ onClose, constants }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Form has been successfully saved.");
  };

  return (
    <Formik
      validateOnBlur={submitted}
      validateOnChange={submitted}
      initialValues={constants}
      onSubmit={handleSubmit}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              label="Title"
              name="title"
              className="w-full flex-grow-0"
            />
            <Textarea
              required
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              rows={8}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              disabled={isSubmitting}
              loading={isSubmitting}
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
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
