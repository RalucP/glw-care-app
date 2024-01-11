import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmedPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleTextChange = (event) => {
    const {name, value} = event.target;
    
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmedPassword) {
      alert('Passwords do not match!!');
      return;
    }

    
    try{
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user,{ displayName });
      resetFormFields();
    }
    catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user. E-mail already in use.')
      }
    }
  }

  return (
    <div className="authentication-container">
      <h2>Do not have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text" 
          name='displayName' 
          onChange={handleTextChange} 
          value={displayName} 
          required
        />
        <FormInput 
          label="E-mail"
          type="email" 
          name='email' 
          onChange={handleTextChange} 
          value={email} 
          required
        />
        <FormInput 
          label="Password"
          type="password" 
          name='password' 
          onChange={handleTextChange} 
          value={password} 
          required
        />
        <FormInput 
          label="Confirmed Password"
          type="password" 
          name='confirmedPassword' 
          onChange={handleTextChange} 
          value={confirmedPassword} 
          required
        />
        <Button
          type='submit'
        >Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;