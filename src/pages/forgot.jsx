import '../assets/css/login.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
function Forgot(){
    let navigate = useNavigate();
    const clickLogin= ()=>{
		navigate('/')
	}
	const clickSign= ()=>{
		navigate('/sign')
	}
	return(
		<div classNameName='container-Login'>
			<div classNameName='content-Login'>
				<div classNameName='logo-Login'>
					<img src={logo} alt="" classNameName='logo-Log'/>
				</div>
				<form action="" classNameName='form-Login'>
					<div classNameName='fields-login'>
						<label htmlFor="email">Nouveau mot de passe</label>
						<br />
						<input type="text" id="email" />
					</div>
					<div classNameName='fields-login'> 
						<label htmlFor="password">Confirmer Mot de passe</label> <br />
						<input type="text" id='password' />
					</div>
					<div classNameName='fields-login'>
						<button >Modifier</button>
					</div>
					<div classNameName='field-Login-info'>
						<a href="" onClick={clickLogin}>se connecter</a>
						<a href="" onClick={clickSign}>Créer un compte !</a>
					</div>
				</form>
			</div>
		</div>
		)
}

export default Forgot;