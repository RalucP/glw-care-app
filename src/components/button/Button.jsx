import PropTypes from 'prop-types'
import { BaseButton, GoogleButton, InvertedButton } from './Button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
}

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton className='button' {...otherProps}>{children}</CustomButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  otherProps: PropTypes.object
}

export default Button;