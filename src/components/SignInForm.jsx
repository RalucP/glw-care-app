import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase'
import FormInput from "./FormInput"
import Button from "./Button"

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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
            buttonType='google'
            type='button'
            onClick={signInWithGoogle}
          >Google sign in</Button>
        </div>        
      </form>
    </div>
  )
}

export default SignInForm;