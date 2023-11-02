import {PropTypes} from 'prop-types'

const FormInput = ({ label, ...otherProps }) => {
  return(
    <div className='form-field-container'>
      <input className='form-input' {...otherProps} />
      {label && <label className={`${otherProps.value.length > 0 ? 'shrink ' : ''}form-label`}>{label}</label>}
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object
}

export default FormInput;