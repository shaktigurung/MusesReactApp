import React from 'react'

const required = value => (value ? undefined : 'Required')

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const minLength = min => value =>
value && value.length < min ? `Must be ${min} characters or more` : undefined

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
  ? 'Only alphanumeric characters'
  : undefined

const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'Invalid phone number, must be 10 digits'
  : undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} autoComplete="off"/>
        {touched &&
          ((error && <span className="red"><i class="fas fa-exclamation-circle"></i>{error}</span>) ||
          (warning && <span><i class="fas fa-exclamation-circle"></i>{warning}</span>))}
      </div>
    </div>
  )

export {
  required,
  maxLength,
  minLength,
  number,
  minValue,
  email,
  alphaNumeric,
  phoneNumber,
  renderField
}