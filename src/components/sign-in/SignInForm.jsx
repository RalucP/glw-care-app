import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase'
import FormInput from "../form-input/FormInput"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"

const defaultValues = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultValues);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultValues);
  }

  const handleTextChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    }
    catch(error){
      if(error.code === 'auth/invalid-login-credentials'){
        alert('Wrong email or password');
      } 
    }

  }

  return (
    <div className="authentication-container">
      <h2>Already have an account?</h2>
      <span>Log in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          type='email'
          name='email'
          value={email}
          onChange={handleTextChange}
          required
        />
        <FormInput 
          label="Password"
          type='password'
          name='password'
          value={password}
          onChange={handleTextChange}
          required
        />
        <div className="buttons-container">
          <Button
            type='submit'
          >Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >Google sign in</Button>
        </div>        
      </form>
    </div>
  )
}

export default SignInForm;