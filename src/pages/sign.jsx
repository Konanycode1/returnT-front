import '../assets/css/login.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
function Sign(){
	let navigate = useNavigate();

	const clickForgot= ()=>{
		navigate('/forgot')
	}
    const clickLogin= ()=>{
		navigate('/')
	}
	return(
		<div classNameName='container-Login'>
			<div classNameName='content-Sign'>
				<div classNameName='logo-Login'>
					<img src={logo} alt="" classNameName='logo-Log'/>
				</div>
				<form action="" classNameName='form-Login'>
                <div classNameName="fields-Sign">
                    <div classNameName='fields-login'>
						<label htmlFor="email">Nom & Prénom</label>
						<br />
						<input type="text" id="email" />
					</div>
					<div classNameName='fields-login'>
						<label htmlFor="email">Email</label>
						<br />
						<input type="text" id="email" />
					</div>
                </div>
                   
                <div classNameName="fields-Sign">
                    <div classNameName='fields-login'>
                        <label htmlFor="lien">lien linkedln</label>
                        <br />
                        <input type="text" id="lien" />
                    </div> 
                    <div classNameName='fields-login'>
                        <label htmlFor="contact">Contact</label>
                        <br />
                        <input type="text" id="contact" />
                    </div>
                 </div>
                <div classNameName="fields-Sign">
                    <div classNameName='fields-login'> 
						<label htmlFor="password">Mot de passe</label> <br />
						<input type="password" id='password' />
					</div>
                    <div classNameName='fields-login'> 
						<label htmlFor="password">Confirmer Mot de passe</label> <br />
						<input type="password" id='password' />
					</div>
                </div>
					<div classNameName='fields-login'>
						<button >S'inscrire</button>
					</div>
					<div classNameName='field-Login-info'>
						<a href="" onClick={clickForgot}>Mot de passe oublié ?</a>
						<a href="" onClick={clickLogin}>se connecter</a>
					</div>
				</form>
			</div>
		</div>
		)
}

export default Sign;