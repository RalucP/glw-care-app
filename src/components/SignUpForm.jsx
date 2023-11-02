import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase';

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
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="">Display Name</label>
      <input 
        type="text" 
        name='displayName' 
        onChange={handleTextChange} 
        value={displayName} 
        required
      />

      <label htmlFor="">E-mail</label>
      <input 
        type="email" 
        name='email' 
        onChange={handleTextChange} 
        value={email} 
        required
      />

      <label htmlFor="">Password</label>
      <input 
        type="password" 
        name='password' 
        onChange={handleTextChange} 
        value={password} 
        required
      />

      <label htmlFor="">Confirm password</label>
      <input 
        type="password" 
        name='confirmedPassword' 
        onChange={handleTextChange} 
        value={confirmedPassword} 
        required
      />

      <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default SignUpForm;