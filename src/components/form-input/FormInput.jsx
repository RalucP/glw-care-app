import {PropTypes} from 'prop-types'
import { FormFieldContainer, Input, FormLabel } from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {
  return(
    <FormFieldContainer>
      <Input {...otherProps} />
      {label && <FormLabel $shrink={otherProps.value.length}>{label}</FormLabel>}
    </FormFieldContainer>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object
}

export default FormInput;