import AuthForm from './AuthForm';

function Login() {
  return (
    <div>
      <AuthForm 
        action="signInWithPassword" 
        buttonText="Logi sisse"
        repeatPassword={false}
        />
    </div>
  )
}

export default Login