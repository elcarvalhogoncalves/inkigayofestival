'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from "@/styles/components/login/Cadastro.module.css";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { SyntheticEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react"
import Loading from "@/app/loading";

export default function Cadastro() {
	const session = useSession();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [cPasswordError, setConfirmPasswordError] = useState("");
	const [registerError, setRegisterError] = useState("");
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	async function handleSubmit (e: SyntheticEvent) {
		e.preventDefault();
		
		if(!name) {
			setNameError("Digite seu nome.");
		} else{
			setNameError("");
		}
		if(!email) {
			setEmailError("Digite seu e-mail.");
		} else{
			setEmailError("");
		}
		if(!password) {
			setPasswordError("Digite sua senha.");
		} else{
			setPasswordError("");
		}

		if(nameError || emailError || passwordError || cPasswordError) {
			return;
		}
		setLoading(true);
		const userData = await fetch("../api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });

        if(!userData.ok) {
            const error = await userData.json();
            setRegisterError(error.message);
			setLoading(false);
			return;
        } else {
			const data = await userData.json();
			setRegisterError("");
			handleLogin(data.user.email, password);
		}
	}
	async function handleLogin( loginEmail: string, loginPassword: string ){
		const status = await signIn('credentials', {
		  redirect: false,
		  email: loginEmail,
		  password: loginPassword,
		  callbackUrl: "/"
		})
		if(status.error){
			setRegisterError(status.error);
			setLoading(false);
		}		
	}

	if(session.status === "authenticated"){
		  redirect('../')
	  }

	useEffect(() => {
		if(password !== confirmPassword) {
			setConfirmPasswordError("As senhas não são iguais.");
		} else {
			setConfirmPasswordError("");
		}
		
	}, [confirmPassword]);

	if(loading) {
		return <Loading />
	}
  	return (
    <>
      	<main className={styles.registro_main}>
        <section className={styles.registro_section}>
          	<Link href={"../"}><figure className={styles.logo} /></Link>
          	<p className={styles.title}>Cadastro</p>

          	<form className={styles.form} onSubmit={handleSubmit}>
				<fieldset className={styles.fieldset}>
					{nameError &&
						<span className={styles.error_span}>
							{nameError}
						</span>
					}
					{registerError &&
						<span className={styles.error_span}>
							{registerError}
						</span>
					}
					<label htmlFor="email">
					
						<input
							onChange={(e) => setName(e.target.value)}
							className={`${styles.input} ${nameError && styles.error}`}
							placeholder="Nome completo"
							type="text"
							name="name"
							autoComplete="off"
						/>
						
					</label>
					{emailError &&
						<span className={styles.error_span}>
							{emailError}
						</span>
					}
					<label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							className={`${styles.input} ${emailError && styles.error}`}
							placeholder="E-mail"
							type="text"
							name="e-mail"
							autoComplete="off"
						/>
					</label>
					{passwordError &&
						<span className={styles.error_span}>
							{passwordError}
						</span>
					}
					<label className={styles.password}>
						<input
							onChange={(e) => setPassword(e.target.value)}
							className={`${styles.input} ${passwordError && styles.error}`}
							placeholder="Senha"
							type={`${showPassword ? "text" : "password"}`}
							name="password"
						/>
						<span onClick={() => setShowPassword(!showPassword)} className={styles.eye}>
							{!showPassword === true ?
								<>
									<FontAwesomeIcon icon={faEyeSlash} style={{height: '3.4rem', width: '3.4rem'}}/>
								</>
								:
								<>
									<FontAwesomeIcon icon={faEye} style={{height: '3.4rem', width: '3.4rem'}}/>								
								</>
							}
						</span>
					</label>
					<label className={styles.cpassword}>
						<input
							onChange={(e) => setConfirmPassword(e.target.value)}
							className={`${styles.input} ${cPasswordError && styles.error}`}
							placeholder="Repetir senha"
							type={`${showConfirmPassword ? "text" : "password"}`}
							name="password"
						/>
						<span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eye}>
							{!showConfirmPassword === true ?
								<>
									<FontAwesomeIcon icon={faEyeSlash} style={{height: '3.4rem', width: '3.4rem'}}/>
								</>
								:
								<>
									<FontAwesomeIcon icon={faEye} style={{height: '3.4rem', width: '3.4rem'}}/>								
								</>
							}
						</span>
					</label>
				</fieldset>
					<button type="submit" className={styles.create}>
						Criar conta
					</button>
          	</form>
			<footer className={styles.footer}>
				<p>
					Já tem uma conta?  
					<span className={styles.login_span}>
						<Link href="../login" className={styles.login_link}> 
							Fazer login.
						</Link>
					</span>			
				</p>
			</footer>
        </section>
      </main>
    </>
  );
}
