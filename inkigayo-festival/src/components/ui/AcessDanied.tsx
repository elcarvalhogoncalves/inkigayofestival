import { redirect } from 'next/navigation'
import styles from '@/styles/components/ui/Loading.module.css'
export default function AcessDanied() {
  redirect('http://localhost:3000/')
  return (
    <main className={styles.loading}>
      <h1>Acesso Negado</h1>
    </main>
  )
}
