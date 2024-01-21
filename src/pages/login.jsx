import '../assets/css/login.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
function Login(){
	let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
     useEffect(() => {
        setLoading(true);
        setTimeout(() => {
                setLoading(false);
        }, 5000);
     }, []);

	const clickForgot= ()=>{
		navigate('/forgot')
	}
	const clickSign= ()=>{
		navigate('/sign')
	}
	const clickHome= ()=>{
		navigate('/home')
	}
	return(
		<>
		{
			loading ? (
				<div classNameName="loader-container">
				<div classNameName="spinner"></div>
			</div>
			):
			(
				<div classNameName='container-Login'>
			<div classNameName='content-Login'>
				<div classNameName='logo-Login'>
					<img src={logo} alt="" classNameName='logo-Log'/>
				</div>
				<form action="" classNameName='form-Login'>
					<div classNameName='fields-login'>
						<label htmlFor="email">Email</label>
						<br />
						<input type="text" id="email" />
					</div>
					<div classNameName='fields-login'> 
						<label htmlFor="password">Mot de passe</label> <br />
						<input type="text" id='password' />
					</div>
					<div classNameName='fields-login'>
						<button onClick={clickHome} >Se connecter</button>
					</div>
					<div classNameName='field-Login-info'>
						<a href="" onClick={clickForgot}>Mot de passe oublié ?</a>
						<a href="" onClick={clickSign}>Créer un compte !</a>
					</div>
				</form>
			</div>
		</div>
			)
		}
		</>
		
		)
}

export default Login;