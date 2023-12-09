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
				<div className="loader-container">
				<div className="spinner"></div>
			</div>
			):
			(
				<div className='container-Login'>
			<div className='content-Login'>
				<div className='logo-Login'>
					<img src={logo} alt="" className='logo-Log'/>
				</div>
				<form action="" className='form-Login'>
					<div className='fields-login'>
						<label htmlFor="email">Email</label>
						<br />
						<input type="text" id="email" />
					</div>
					<div className='fields-login'> 
						<label htmlFor="password">Mot de passe</label> <br />
						<input type="text" id='password' />
					</div>
					<div className='fields-login'>
						<button onClick={clickHome} >Se connecter</button>
					</div>
					<div className='field-Login-info'>
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