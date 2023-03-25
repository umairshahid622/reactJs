import BookingForm from 'components/BookingForm';
import {
  COMMENT,
  DATE,
  EMAIL,
  FULL_NAME,
  PHONE,
  SIZE,
} from 'constant/form.constant';
import { useState } from 'react';
import * as Yup from 'yup';
let bookingSchema = Yup.object({
  [EMAIL]: Yup.string().email().required().label('Email'),
  [FULL_NAME]: Yup.string().required().label('Full name'),
  [PHONE]: Yup.string().label('Phone').required(),
  [DATE]: Yup.string().label('Event date').required(),
  [COMMENT]: Yup.string().label('Your comment').required(),
  [SIZE]: Yup.string().label('Number of people').required(),
});
const initialValues = {
  [FULL_NAME]: '',
  [EMAIL]: '',
  [SIZE]: '',
  [PHONE]: '',
  [DATE]: '',
};
const initialErrors = {
  [FULL_NAME]: '',
  [EMAIL]: '',
  [SIZE]: '',
  [PHONE]: '',
  [DATE]: '',
};
const formatError = (e) => {
  let errors = {};
  e.inner.forEach((err) => {
    errors[err.path] = err.message;
  });

  return {
    valid: false,
    errors,
  };
};
const ReserveTable = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const handleChange = (name, value) => {
    setFormErrors((data) => ({ ...data, [name]: '' }));
    setFormValues((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const d = await bookingSchema.validate(
        { ...formValues },
        { abortEarly: false, converse: true, stripUnknown: true }
      );
      alert(JSON.stringify(d, 4));
    } catch (e) {
      const { errors: validationErrors } = formatError(e);
      setFormErrors((data) => ({ ...data, ...validationErrors }));
      return;
    }
  };
  return (
    <div>
      <div
        style={{
          width: '100%',
          padding: '3rem',
          display: 'grid',
          background: '#000500',
          color: '#f8f8f8',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.85rem',
            fontWeight: 'bolder',
          }}
        >
          Reserve table
        </p>
      </div>

      <BookingForm
        data={formValues}
        errors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ReserveTable;
