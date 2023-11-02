import PropTypes from 'prop-types'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({value, buttonType, ...otherProps}) => {
  return (
    <button 
      className={`button ${BUTTON_TYPE_CLASSES[buttonType] ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}
    >{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  otherProps: PropTypes.object
}

export default Button;