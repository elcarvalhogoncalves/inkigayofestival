"use client"
import styles from '@/styles/components/ingresso/IngressoComprar.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function IngressoCompras() {

    const [selectedDay, setSelectedDay] = useState<string>('sexta');

  return (
    <>
      <section className={styles.stepWizard}>

        <ul className={styles.stepWizardList}>
          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>1</span>
            <span className={styles.progressLabel}>Comprar Ingresso(s)</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>2</span>
            <span className={styles.progressLabel}>Pagamento</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>3</span>
            <span className={styles.progressLabel}>Finalizar</span>
          </li>
        </ul>

      </section>

      <section className={styles.cardsDays}>
  <ul className={styles.cardsDaysList}>
    <li className={`${styles.cardsDaysItem} ${selectedDay === 'sexta' ? styles.selected : ''}`}
      onClick={() => setSelectedDay('sexta')}
    >
      <span className={styles.daystitle}>SEXTA-FEIRA</span>
      <span className={styles.datetitle}>Dia/Mês/Ano</span>
    </li>
    <li
      className={`${styles.cardsDaysItem} ${selectedDay === 'sabado' ? styles.selected : ''}`}
      onClick={() => setSelectedDay('sabado')}
    >
      <span className={styles.daystitle}>SÁBADO</span>
      <span className={styles.datetitle}>Dia/Mês/Ano</span>
    </li>
    <li
      className={`${styles.cardsDaysItem} ${selectedDay === 'domingo' ? styles.selected : ''}`}
      onClick={() => setSelectedDay('domingo')}
    >
      <span className={styles.daystitle}>DOMINGO</span>
      <span className={styles.datetitle}>Dia/Mês/Ano</span>
    </li>
  </ul>
</section>

    {selectedDay === 'sexta' && (
      <section className={styles.sectionIngresso}>
        <table className={styles.tableInfomationIngresso}>
          <tr className={styles.tableTitles}>
            <td className={styles.titleTable}>INGRESSO</td>
            <td className={styles.titleTable}>VALOR</td>
            <td className={styles.titleTable}>QUANTIDADE</td>
          </tr>

        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA INTEIRA</td>
            <td className={styles.tdValue}>R$ 459,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
            <hr className={styles.line} />
            <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA MEIA-ESTRADA</td>
            <td className={styles.tdValue}>R$ 229,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.tdValue}>CAMAROTE VIP</td>
            <td className={styles.tdValue}>R$ 699,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        </table>
      </section>
    )}

{selectedDay === 'sabado' && (
      <section className={styles.sectionIngresso}>
        <table className={styles.tableInfomationIngresso}>
          <tr className={styles.tableTitles}>
            <td className={styles.titleTable}>INGRESSO</td>
            <td className={styles.titleTable}>VALOR</td>
            <td className={styles.titleTable}>QUANTIDADE</td>
          </tr>

        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA INTEIRA</td>
            <td className={styles.tdValue}>R$ 559,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
            <hr className={styles.line} />
            <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA MEIA-ESTRADA</td>
            <td className={styles.tdValue}>R$ 329,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.tdValue}>CAMAROTE VIP</td>
            <td className={styles.tdValue}>R$ 799,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        </table>
      </section>
    )}

{selectedDay === 'domingo' && (
      <section className={styles.sectionIngresso}>
        <table className={styles.tableInfomationIngresso}>
          <tr className={styles.tableTitles}>
            <td className={styles.titleTable}>INGRESSO</td>
            <td className={styles.titleTable}>VALOR</td>
            <td className={styles.titleTable}>QUANTIDADE</td>
          </tr>

        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA INTEIRA</td>
            <td className={styles.tdValue}>R$ 659,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
            <hr className={styles.line} />
            <tr className={styles.tableItensList}>
            <td className={styles.td}>ARENA PISTA MEIA-ESTRADA</td>
            <td className={styles.tdValue}>R$ 429,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        <hr className={styles.line} />
        <tr className={styles.tableItensList}>
            <td className={styles.tdValue}>CAMAROTE VIP</td>
            <td className={styles.tdValue}>R$ 899,99</td>
            <div className={styles.buttonAddSubtract}>
                <button className={styles.btnMinus}>−</button>
                <td className={styles.workTime}>0</td>
                <button className={styles.btnPlus}>+</button>
            </div>
        </tr>
        </table>
      </section>
    )}

      <span className={styles.totalCart}>TOTAL: R$ 00,00</span>
        <a href="#" className={styles.btnNext}>COMPRAR</a>
        
      <section className={styles.Imagens}>
        <Image src="/imagens/ingressos/arena.png" alt="Mapa da Arena Fonte Nova" width={580} height={678} />
      </section>
      </>
  )
}