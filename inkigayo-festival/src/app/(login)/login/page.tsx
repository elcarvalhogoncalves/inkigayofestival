'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/components/login/Login.module.css'
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import Loading from "@/app/loading";

type loginUser = {
  email: string,
  password: string
}
export default function Login() {
  const { push } = useRouter();

  const searchParams = useSearchParams()
  const callback = searchParams.get('callback')
  const register = searchParams.get('registerSuccess')
  const session = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // if(session.status === "authenticated"){
  //   if(callback){
  //     redirect('../ingressos')
  //   } else {
  //     redirect('../')
  //   }
  // }

  async function handleLogin(){
    push('../');
    // const status = await signIn('credentials', {
    //   redirect: false,
    //   email: email,
    //   password: password,
    //   callbackUrl: "/"
    // })
    // if(status.error){
    //   setError(status.error);
    // } else {
    //   setError("");
    // }
  }

  // async function handleGoogleLogin(){
  //   signIn('google', {callbackUrl: '../'})
  // }

  // async function handleFacebookLogin(){
  //   signIn('facebook', {callbackUrl: '../'})
  // }

  // if(session.status === "loading"){
  //   return <Loading />
  // }

      return (
      <>
      <main className={styles.login_main}>
        <section className={styles.login_section}>


          <Link href={"../"}><figure className={styles.logo} /></Link>
          <p className={styles.title}>Login</p>

          <form className={styles.form} onSubmit={
            (e) => {
              e.preventDefault(); 
              handleLogin();
            }}
            >
            {/* {error &&
              <span className={styles.error}>
                {error}
              </span>
            } */}
            {register &&
              <span className={styles.sucess}>
                <p>Usuário cadastrado com sucesso.</p>
              </span>
            }
            <label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className={styles.input} placeholder="E-mail" type="text" name="e-mail" autoComplete="off" />
            </label>
            <label className={styles.password}>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className={styles.input} placeholder="Senha" type={`${showPassword ? "text" : "password"}`} name="password" />
              <span onClick={() => setShowPassword(!showPassword)} className={styles.eye}>
                {showPassword === true ?
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
            <p className={styles.forgot}>Esqueci minha senha.</p>
            <button type="submit" className={styles.login}>Entrar</button>
            <p> 
              Não tem uma conta? <span className={styles.create_span}><Link href="./cadastro" className={styles.create_link}>Criar uma agora.</Link></span>
            </p>
          </form>

          <footer className={styles.footer}>
            <hr className={styles.divider}/>
            <div className={styles.icons}>
              <figure className={styles.fb_icon} />
              <figure className={styles.gg_icon} />
            </div>

          </footer>

        </section>
      </main>
    </>
  )
}
