import PropTypes from 'prop-types'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button 
      className={`button ${BUTTON_TYPE_CLASSES[buttonType] ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}
    >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  otherProps: PropTypes.object
}

export default Button;