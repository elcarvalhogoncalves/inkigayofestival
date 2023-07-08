import styles from '@/styles/components/ingresso/IngressoComprar.module.css';
import Navbar from '@/components/ui/Navbar';
import IngressoCompras from '@/components/ingressos/comprar';

export default function Ingresso() {
  return (
    <main className={styles.main}>
      <Navbar />
      <IngressoCompras />
    </main> 
  )
}
