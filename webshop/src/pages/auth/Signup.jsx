import AuthForm from './AuthForm';

function Signup() {

  return (
    <div>
      <AuthForm 
        action="signUp" 
        buttonText="Registreeru"
        repeatPassword={true}  
      />
    </div>
  )
}

export default Signup