import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase'
import SignUpForm from '../components/SignUpForm';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <div>Sign in page</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </>
  )
}

export default SignIn;