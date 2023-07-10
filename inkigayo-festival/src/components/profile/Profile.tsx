"use client"
import styles from "@/styles/components/profile/Profile.module.css"
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Image from "next/image"
import { useEffect, useState } from "react"
import Loading from "@/app/loading"
 
interface Iuser{
  name: string,
  email: string
}

export default function Profile() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('../');
        },
    })
    const [loading, setLoading] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [user, setUser] = useState<Iuser>({
        name: "",
        email: "",
    });


    useEffect(() => {
        fetch('/api/ticket?id=' + session.user.email)
          .then(res => res.json())
          .then(data => {
            setTickets(data.tickets)
            setUser(data.user)
        })

      }, [])


    function funcaoDia(dia : string){
        switch(dia){
            case "sexta": return "08 de setembro";
            case "sabado": return "09 de setembro";
            case "domingo": return "10 de setembro";
            default: return "";
        }
    }

    if(status === "loading"){
        return <Loading />
    }
    return (
        <main className={styles.profile_main}>
            <section className={styles.profile_section}>
                <div className={styles.profile_div}>
                    <p className={styles.profile_name}>Olá, {session.user.name}</p>
                    <p className={styles.profile_name_details}>~ Meus ingressos</p>
                </div>
                <hr className={styles.line} />

                <section className={styles.profile_tickets}>
                {tickets.map((ticket) => (
                        <article key={ticket.id} className={styles.ticket}>
                            <Image src={`http://qrickit.com/api/qr.php?d=${ticket.id}&addtext=Inkigayo+Festival&txtcolor=8E05C2&fgdcolor=8E05C2&bgdcolor=000000&qrsize=240&t=p&e=m`} width={240} height={240} alt="Qr code" />
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
                ))
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
