"use client"
import styles from "@/styles/components/profile/Profile.module.css"
// import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Image from "next/image"
import { useEffect, useState } from "react"
import Loading from "@/app/loading"
 
type Iuser = {
  name: string,
  email: string
}

export default function Profile() {
    // const { data: session, status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('../');
    //     },
    // })
    // const [loading, setLoading] = useState(false);
    // const [tickets, setTickets] = useState([]);
    const [user, setUser] = useState<Iuser>({
        name: "John Doe",
        email: "john@doe.com",
    });


    // useEffect(() => {
    //     setLoading(true)
    //     fetch('/api/ticket?id=' + session.user.email)
    //       .then(res => res.json())
    //       .then(data => {
    //         setTickets(data.tickets)
    //         setUser(data.user)
    //         setLoading(false)
    //     })

    //   }, [])
    
    const resultAPI = [
		{
			"id": "9e5d589a-67d7-4847-b1b5-ade6474889e0",
			"dia": "sexta",
			"nome": "Camarote Vip",
			"preco": 699,
			"userId": 1
		},
		{
			"id": "51029edf-2b41-44da-8370-1d37e88f9841",
			"dia": "sexta",
			"nome": "Arena Pista Inteira",
			"preco": 459,
			"userId": 1
		},
		{
			"id": "57da4dd5-43bd-4232-9999-f2f4e7c0ccce",
            "dia": "sexta",
            "nome": "Arena Pista Inteira",
            "preco": 459,
            "userId": 1
        },
		{
			"id": "3c1a0d4f-7991-4f3d-a998-9a782f9407af",
			"dia": "sabado",
			"nome": "Arena Pista Meia-Entrada",
			"preco": 279,
			"userId": 1
		},
		{
			"id": "378493c8-8cc8-4667-8bb4-fbdfe9480df4",
			"dia": "sabado",
			"nome": "Camarote Vip",
			"preco": 799,
			"userId": 1
		},
		{
			"id": "efe7b4e4-de43-4ecf-b8a2-c6404c004e9b",
			"dia": "domingo",
			"nome": "Arena Pista Inteira",
			"preco": 699,
			"userId": 1
		}
	];

    function funcaoDia(dia : string){
        switch(dia){
            case "sexta": return "08 de setembro";
            case "sabado": return "09 de setembro";
            case "domingo": return "10 de setembro";
            default: return "";
        }
    }

    // if(status === "loading"){
    //     return <Loading />
    // }

    return (
        <main className={styles.profile_main}>
            <section className={styles.profile_section}>
                <div className={styles.profile_div}>
                    <p className={styles.profile_name}>Olá, {user.name}</p>
                    <p className={styles.profile_name_details}>~ Meus ingressos</p>
                </div>
                <hr className={styles.line} />

                <section className={styles.profile_tickets}>
                {resultAPI.length > 0 ? resultAPI.map((ticket) => (
                        <article key={ticket.id} className={styles.ticket}>
                            <Image src={`http://qrickit.com/api/qr.php?d=${ticket.id}&addtext=Inkigayo+Festival&txtcolor=8E05C2&fgdcolor=8E05C2&bgdcolor=000000&qrsize=240&t=p&e=m`} width={200} height={200} alt="Qr code" />
                            <div className={styles.ticket_info}>
                                <span className={styles.ticket_info_box}>
                                    <p className={styles.ticket_info_name}>{ticket.nome}</p>
                                    <p className={styles.ticket_info_price}>R$ {ticket.preco}</p>
                                </span>
                                <hr />
                                <p>Local: Arena Fonte Nova, Salvador - BA</p>
                                <p>Data: {funcaoDia(ticket.dia)}</p>
                                <hr />
                                <p className={styles.ticket_info_propietario}>Proprietário: {user.name}</p>
                                <p className={styles.ticket_info_identificacao}>ID: {user.email}</p>

                            </div>
                        </article>
                        )) :
                        <article className={`${styles.ticket} ${styles.ticket_nothing}`}>
                            <p>Você ainda não comprou nenhum ingresso :(</p>
                        </article>
                    }
                    </section>

                {/* <section className={styles.ticket}>
                    <Image src={`http://qrickit.com/api/qr.php?d=378493c8-8cc8-4667-8bb4-fbdfe9480df4&addtext=Inkigayo+Festival&txtcolor=8E05C2&fgdcolor=8E05C2&bgdcolor=000000&qrsize=240&t=p&e=m`} width={240} height={240} alt="Qr code" />
                    <div className={styles.ticket_info}>
                        <span className={styles.ticket_info_box}>
                            <p className={styles.ticket_info_name}>CAMAROTE VIP</p>
                            <p className={styles.ticket_info_price}>R$ 10,00</p>
                        </span>
                        <hr />
                        <p>Local: Arena Fonte Nova, Salvador - BA</p>
                        <p>Data: 25/06/2022</p>
                        <hr />
                        <p className={styles.ticket_info_propietario}>Proprietário: Gabriel Carvalho Gonçalves</p>
                        <p className={styles.ticket_info_identificacao}>ID: gabrielcarvalhooficial@gmail.com</p>

                    </div>
                </section> */}
            </section>
      </main>
      )
}
