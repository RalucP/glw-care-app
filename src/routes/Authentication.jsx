import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const Authentication = () => {
  return (
    <div className='authentication-main-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;