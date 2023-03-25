import Button from 'components/common/Button';
import {
  COMMENT,
  DATE,
  EMAIL,
  FULL_NAME,
  PHONE,
  SIZE,
} from 'constant/form.constant';
import './booking.css';
const BookingForm = ({ data, errors, handleSubmit, handleChange }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='wrapper'>
        <div className='element'>
          <label htmlFor={FULL_NAME}>Name</label>
          <input
            id={FULL_NAME}
            name={FULL_NAME}
            value={data[FULL_NAME] || ''}
            onChange={(e) => handleChange(FULL_NAME, e.target.value)}
          />
          {!!errors[FULL_NAME] && <p className='error'>{errors[FULL_NAME]}</p>}
        </div>
        <div className='element'>
          <label htmlFor={EMAIL}>Email</label>
          <input
            id={EMAIL}
            name={EMAIL}
            value={data[EMAIL] || ''}
            onChange={(e) => handleChange(EMAIL, e.target.value)}
          />
          {!!errors[EMAIL] && <p className='error'>{errors[EMAIL]}</p>}
        </div>
        <div className='element'>
          <label htmlFor={PHONE}>Phone</label>
          <input
            id={PHONE}
            name={PHONE}
            value={data[PHONE] || ''}
            onChange={(e) => handleChange(PHONE, e.target.value)}
          />
          {!!errors[PHONE] && <p className='error'>{errors[PHONE]}</p>}
        </div>
        <div className='element'>
          <label htmlFor={DATE}>DATE</label>
          <input
            id={DATE}
            type='date'
            name={DATE}
            value={data[DATE] || ''}
            onChange={(e) => handleChange(DATE, e.target.value)}
          />
          {!!errors[DATE] && <p className='error'>{errors[DATE]}</p>}
        </div>
        <div className='element'>
          <label htmlFor={SIZE}>Number of people</label>
          <select
            className='control'
            id={SIZE}
            name={SIZE}
            onChange={(e) => handleChange(SIZE, e.target.value)}
          >
            <option defaultValue={''}>Select size</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          {!!errors[SIZE] && <p className='error'>{errors[SIZE]}</p>}
        </div>
        <div className='element'>
          <label htmlFor={COMMENT}>Comment</label>
          <textarea
            id={COMMENT}
            name={COMMENT}
            rows={5}
            cols={20}
            value={data[COMMENT] || ''}
            onChange={(e) => handleChange(COMMENT, e.target.value)}
          />
          {!!errors[COMMENT] && <p className='error'>{errors[COMMENT]}</p>}
        </div>

        <Button label='Send' type='submit' />
      </div>
    </form>
  );
};

export default BookingForm;
