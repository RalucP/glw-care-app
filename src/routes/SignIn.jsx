import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <div>Sign in page</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  )
}

export default SignIn;