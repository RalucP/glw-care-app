import SignInForm from '../../components/sign-in/SignInForm';
import SignUpForm from '../../components/sign-up/SignUpForm';

const Authentication = () => {
  return (
    <div className='authentication-main-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;