import PropTypes from 'prop-types'
import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from './Button.styles'

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

const Button = ({children, buttonType, isLoading, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} className='button' {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  isLoading: PropTypes.bool,
  otherProps: PropTypes.object
}

export default Button;