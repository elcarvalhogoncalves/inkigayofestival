import Image from 'next/image'
import styles from '@/styles/components/ui/Loading.module.css'
export default function Loading() {
  return (
    <main className={styles.loading}>
      <Image src="/imagens/loading.gif" width={50} height={50} alt="Loading" />
    </main>
  );
}
