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
		<div className='container-Login'>
			<div className='content-Login'>
				<div className='logo-Login'>
					<img src={logo} alt="" className='logo-Log'/>
				</div>
				<form action="" className='form-Login'>
					<div className='fields-login'>
						<label htmlFor="email">Nouveau mot de passe</label>
						<br />
						<input type="text" id="email" />
					</div>
					<div className='fields-login'> 
						<label htmlFor="password">Confirmer Mot de passe</label> <br />
						<input type="text" id='password' />
					</div>
					<div className='fields-login'>
						<button >Modifier</button>
					</div>
					<div className='field-Login-info'>
						<a href="" onClick={clickLogin}>se connecter</a>
						<a href="" onClick={clickSign}>Créer un compte !</a>
					</div>
				</form>
			</div>
		</div>
		)
}

export default Forgot;