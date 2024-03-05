import {PropTypes} from 'prop-types'
import { FormFieldContainer, Input, FormLabel } from './FormInput.styles';

const FormInput = ({ label, id, ...otherProps }) => {
  return(
    <FormFieldContainer>
      <Input id={id} {...otherProps} />
      {label && <FormLabel htmlFor={id} shrink={otherProps.value.length}>{label}</FormLabel>}
    </FormFieldContainer>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  otherProps: PropTypes.object
}

export default FormInput;