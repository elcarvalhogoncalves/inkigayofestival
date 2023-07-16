"use client";
import Loading from "@/app/loading";
import styles from "@/styles/components/ingresso/IngressoComprar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";


interface IAPI {
  id: number;
  dia: string;
  tickets: TTicket[];
}

interface typeTicket{
  dia: string;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Cart {
  name: string;
  total: number;
  quantity: number;
  metodoPagamento: string;
  tiposIngresso: string;
  userEmail: string;
  cart: typeTicket[];
}

type TTicket = {
  nome: string;
  preco: number;
  quantidade: number;
};

type TTicketWDate = {
  nome: string;
  preco: number;
  dia: string;
};

interface IDays {
  [key: string]: {
    ingresso: string;
    valor: string;
  }[];
}

interface Props {
  handleAvancar: () => void;
  totalPrice: (total: number) => any;
  objectCart: (object: Cart) => void;
}

export default function IngressoCompras({
  handleAvancar,
  totalPrice,
  objectCart,
}: Props) {
  const [cart, setCart] = useState<TTicketWDate[]>([]);
  const [ticketCart, setTicketCart] = useState<typeTicket[]>([]);

  const [selectedDay, setSelectedDay] = useState<string>("sexta");

  const [resultAPI, setResultAPI] = useState<IAPI[]>([]);
  const [isLoading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    fetch('./api/event')
      .then((res) => res.json())
      .then((data) => {
        setResultAPI(data)
        setLoading(false)
      })
  }, [])



  // const resultAPI = [
  //   {
  //     id: 1,
  //     dia: "sexta",
  //     tickets: [
  //       {
  //         nome: "Arena Pista (Inteira)",
  //         preco: 459,
  //         quantidade: 7500,
  //       },
  //       {
  //         nome: "Arena Pista (Meia-Entrada)",
  //         preco: 229,
  //         quantidade: 2500,
  //       },
  //       {
  //         nome: "Camarote VIP",
  //         preco: 669,
  //         quantidade: 5000,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     dia: "sabado",
  //     tickets: [
  //       {
  //         nome: "Arena Pista (Inteira)",
  //         preco: 259,
  //         quantidade: 7500,
  //       },
  //       {
  //         nome: "Arena Pista (Meia-Entrada)",
  //         preco: 329,
  //         quantidade: 2500,
  //       },
  //       {
  //         nome: "Camarote VIP",
  //         preco: 769,
  //         quantidade: 5000,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     dia: "sexta",
  //     tickets: [
  //       {
  //         nome: "Arena Pista (Inteira)",
  //         preco: 659,
  //         quantidade: 7500,
  //       },
  //       {
  //         nome: "Arena Pista (Meia-Entrada)",
  //         preco: 429,
  //         quantidade: 2500,
  //       },
  //       {
  //         nome: "Camarote VIP",
  //         preco: 869,
  //         quantidade: 5000,
  //       },
  //     ],
  //   },
  // ];

  const prices: IDays = {
    sexta: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 459,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 229,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 699,00" },
    ],
    sabado: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 559,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 329,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 799,00" },
    ],
    domingo: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 659,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 429,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 899,00" },
    ],
  };

  const [quantitiesFriday, setQuantitiesFriday] = useState<number[]>([0, 0, 0]);
  const [quantitiesSaturday, setQuantitiesSaturday] = useState<number[]>([
    0, 0, 0,
  ]);
  const [quantitiesSunday, setQuantitiesSunday] = useState<number[]>([0, 0, 0]);


  function AddTicketCart(objeto, array) {
    const index = array.findIndex((item) => item.nome === objeto.nome && item.dia === objeto.dia);
  
    if (index === -1) {
      // O objeto não está presente na array, então adicionamos o objeto à array
      array.push(objeto);
    } else {
      // O objeto está presente na array, então incrementamos a propriedade "quantidade" em 1
      array[index].quantidade++;
    }
  
    return array;
  }
  
  function DelTicketCart(objeto, array) {
    const index = array.findIndex((item) => item.nome === objeto.nome && item.dia === objeto.dia);
  
    if (index !== -1) {
      if (array[index].quantidade > 1) {
        array[index].quantidade--;
      } else {
        array.splice(index, 1);
      }
    }
  
    return array;
  }
  
  function DelCartInfo(array, objeto, string) {
    const index = array.findIndex((item) => item.nome === objeto.nome && item.dia === string);
  
    if (index !== -1) {
      array.splice(index, 1);
    }
  
    return array;
  
  }





  function handleAddQuantityFriday(index: number, ticket: TTicket) {
    const twd = {
      nome: ticket.nome,
      preco: ticket.preco,
      dia: "sexta",
    } as TTicketWDate;

    const tCart = {
      dia: "sexta",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    } as typeTicket;

    setTicketCart(AddTicketCart(tCart, ticketCart));


    // const aux = ticketCart.findIndex((ingresso) => ingresso.nome === ticket.nome && ingresso.dia === "sexta");

    // if (aux !== -1) {
    //   ticketCart[aux].quantidade += 1;
    // } else {
    //   setTicketCart(ticketCart.concat(tCart));
    // }
    
    // ticketCart.map((ingresso) => {
    //   if (ingresso.nome === ticket.nome && ingresso.dia === "sexta") {
    //     ingresso.quantidade += 1;
    //   }
    // });

    // for(let i = 0; i < ticketCart.length; i++) {
    //   if (ticketCart[i].nome === ticket.nome && ticketCart[i].dia === "sexta") {
    //     ticketCart[i].quantidade += 1;
    //   } else {
    //     setTicketCart(ticketCart.concat(tCart));
    //     console.log(ticketCart);
    //   }
    // }
    // const newTicketCart = [...ticketCart];

    setCart(cart.concat(twd));

    const updatedQuantities = [...quantitiesFriday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesFriday(updatedQuantities);
    }
  }
  

  function handleSubtractQuantityFriday(index: number, ticket: TTicket) {
    // const newCart = cart.filter((ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "sexta");
    setCart(DelCartInfo(cart, ticket, "sexta"));

    const tCart = {
      dia: "sexta",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    } as typeTicket;

    setTicketCart(DelTicketCart(tCart, ticketCart));


    // const aux = ticketCart.findIndex((ingresso) => ingresso.nome === ticket.nome && ingresso.dia === "sexta");

    // if (aux !== -1 && ticketCart[aux].quantidade > 1) {
    //   ticketCart[aux].quantidade -= 1;
    // } else if(aux !== -1 && ticketCart[aux].quantidade === 1) {
    //   const newTCart = ticketCart.filter(
    //     (ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "sexta"
    //   );
    //   setTicketCart(newTCart);
    // }

    // for(let i = 0; i < ticketCart.length; i++) {
    //   if (ticketCart[i].nome === ticket.nome && ticketCart[i].dia === "sexta" && ticketCart[i].quantidade > 1) {
    //     ticketCart[i].quantidade -= 1;
    //   } else if(ticketCart[i].nome === ticket.nome && ticketCart[i].dia === "sexta") {
    //     const newTCart = ticketCart.filter(
    //       (ingresso) => ingresso.nome !== ticket.nome
    //     );
    //     setTicketCart(newTCart);
        
    //   }
    // }

    

    const updatedQuantities = [...quantitiesFriday];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesFriday(updatedQuantities);
    }
  }

  function handleAddQuantitySaturday(index: number, ticket: TTicket) {
    const twd = {
      nome: ticket.nome,
      preco: ticket.preco,
      dia: "sabado",
    } as TTicketWDate;


    const tCart = {
      dia: "sabado",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    } as typeTicket;

    setTicketCart(AddTicketCart(tCart, ticketCart));



    setCart(cart.concat(twd));

    const updatedQuantities = [...quantitiesSaturday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesSaturday(updatedQuantities);
    }
  }

  function handleSubtractQuantitySaturday(index: number, ticket: TTicket) {
    // const newCart = cart.filter((ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "sabado");
    setCart(DelCartInfo(cart, ticket, "sabado"));


    const tCart = {
      dia: "sabado",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    } as typeTicket;

    setTicketCart(DelTicketCart(tCart, ticketCart));

    // const aux = ticketCart.findIndex((ingresso) => ingresso.nome === ticket.nome && ingresso.dia === "sexta");

    // if (aux !== -1 && ticketCart[aux].quantidade > 1) {
    //   ticketCart[aux].quantidade -= 1;
    // } else if(aux !== -1 && ticketCart[aux].quantidade === 1) {
    //   const newTCart = ticketCart.filter(
    //     (ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "sabado"
    //   );
    //   setTicketCart(newTCart);
    // }


    const updatedQuantities = [...quantitiesSaturday];

    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesSaturday(updatedQuantities);
    }
  }

  function handleAddQuantitySunday(index: number, ticket: TTicket) {
    const twd = {
      nome: ticket.nome,
      preco: ticket.preco,
      dia: "domingo",
    } as TTicketWDate;


    const tCart = {
      dia: "domingo",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    }


    setTicketCart(AddTicketCart(tCart, ticketCart));

    setCart(cart.concat(twd));

    const updatedQuantities = [...quantitiesSunday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesSunday(updatedQuantities);
    }
  }

  function handleSubtractQuantitySunday(index: number, ticket: TTicket) {
    // const newCart = cart.filter((ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "domingo");
    setCart(DelCartInfo(cart, ticket, "domingo"));


    const tCart = {
      dia: "domingo",
      nome: ticket.nome,
      preco: ticket.preco,
      quantidade: 1,
    } as typeTicket;

    setTicketCart(DelTicketCart(tCart, ticketCart));

    // const aux = ticketCart.findIndex((ingresso) => ingresso.nome === ticket.nome && ingresso.dia === "sexta");

    // if (aux !== -1 && ticketCart[aux].quantidade > 1) {
    //   ticketCart[aux].quantidade -= 1;
    // } else if(aux !== -1 && ticketCart[aux].quantidade === 1) {
    //   const newTCart = ticketCart.filter(
    //     (ingresso) => ingresso.nome !== ticket.nome && ingresso.dia !== "domingo"
    //   );
    //   setTicketCart(newTCart);
    // }


    const updatedQuantities = [...quantitiesSunday];

    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesSunday(updatedQuantities);
    }
  }

  function calculateTotal(): number {
    let totalPrice = 0;

    const selectedPricesFriday = prices.sexta;
    const selectedPricesSaturday = prices.sabado;
    const selectedPricesSunday = prices.domingo;

    for (let i = 0; i < selectedPricesFriday.length; i++) {
      const quantityFriday = quantitiesFriday[i];
      const quantitySaturday = quantitiesSaturday[i];
      const quantitySunday = quantitiesSunday[i];

      const priceStringFriday = selectedPricesFriday[i].valor
        .replace("R$", "")
        .trim();
      const priceStringSaturday = selectedPricesSaturday[i].valor
        .replace("R$", "")
        .trim();
      const priceStringSunday = selectedPricesSunday[i].valor
        .replace("R$", "")
        .trim();

      const priceFriday = parseFloat(priceStringFriday);
      const priceSaturday = parseFloat(priceStringSaturday);
      const priceSunday = parseFloat(priceStringSunday);

      const totalFriday = quantityFriday * priceFriday;
      const totalSaturday = quantitySaturday * priceSaturday;
      const totalSunday = quantitySunday * priceSunday;

      totalPrice += totalFriday + totalSaturday + totalSunday;
    }

    return totalPrice;
  }

  function handleA() {
    // console.log(cart);
    const typeTickets: string[] = [];
    for (let i = 0; i < cart.length; i++) {
      typeTickets.push(cart[i].nome + " " + "(" + cart[i].dia + ")");
    }
    // console.log(typeTickets);
    const arrayTypes = Array.from(new Set(typeTickets));
    let typesConcat = "";
    for (let i = 0; i < arrayTypes.length; i++) {
      typesConcat = typesConcat + arrayTypes[i];
      if (i < arrayTypes.length - 1) typesConcat = typesConcat + ", ";
    }
    // console.log(typesConcat);
    const objetoCart: Cart = {
      name: "",
      total: calculateTotal(),
      quantity: cart.length,
      metodoPagamento: "",
      tiposIngresso: typesConcat,
      userEmail: "",
      cart: ticketCart,
    };

    objectCart(objetoCart);
    totalPrice(calculateTotal());
    if (calculateTotal() > 0) {
      handleAvancar();
    }
  }

  if(isLoading) return <Loading />
  if(resultAPI.length === 0) return <Loading />;

  return (
    <main className={styles.main}>
      <section className={styles.cardsDays}>
        <ul className={styles.cardsDaysList}>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "sexta" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("sexta")}
          >
            <span className={styles.daystitle}>SEXTA-FEIRA</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "sabado" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("sabado")}
          >
            <span className={styles.daystitle}>SÁBADO</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "domingo" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("domingo")}
          >
            <span className={styles.daystitle}>DOMINGO</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
        </ul>
      </section>

      <section className={styles.sectionIngresso}>
        <div className={styles.tableInfomationIngresso}>
          <ul className={styles.tableTitles}>
            <li className={styles.titleTable}>INGRESSO</li>
            <li className={styles.titleTable}>VALOR</li>
            <li className={styles.titleTable}>QUANTIDADE</li>
          </ul>
          {selectedDay === "sexta" &&
            // const dayTable = resultAPI[0].tickets;
            resultAPI[0].tickets.map((ticket, index) => (
              <div key={index}>
                <hr className={styles.divider} key={index}/>
                <ul className={styles.tableItensList} >
                  <li className={styles.td}>{ticket.nome}</li>
                  <li className={styles.td}>R$ {ticket.preco}</li>
                  <li className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() =>
                          handleSubtractQuantityFriday(index, ticket)
                        }
                        disabled={quantitiesFriday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesFriday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantityFriday(index, ticket)}
                        disabled={
                          quantitiesFriday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}

          {selectedDay === "sabado" &&
            resultAPI[1].tickets.map((ticket, index) => (
              <div key={index}>
                <hr className={styles.divider} />
                <ul className={styles.tableItensList} key={index}>
                  <li className={styles.td}>{ticket.nome}</li>
                  <li className={styles.td}>R$ {ticket.preco}</li>
                  <li className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() =>
                          handleSubtractQuantitySaturday(index, ticket)
                        }
                        disabled={quantitiesSaturday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesSaturday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantitySaturday(index, ticket)}
                        disabled={
                          quantitiesSaturday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}

          {selectedDay === "domingo" &&
            resultAPI[2].tickets.map((ticket, index) => (
              <div key={index}>
                <hr className={styles.divider} />
                <ul className={styles.tableItensList} key={index}>
                  <li className={styles.td}>{ticket.nome}</li>
                  <li className={styles.td}>R$ {ticket.preco}</li>
                  <li className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() =>
                          handleSubtractQuantitySunday(index, ticket)
                        }
                        disabled={quantitiesSunday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesSunday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantitySunday(index, ticket)}
                        disabled={
                          quantitiesSunday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </div>
        <span className={styles.totalCart}>
          TOTAL: R${" "}
          {calculateTotal().toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <button className={styles.btnNext} onClick={handleA}>
          COMPRAR
        </button>
      </section>
      <div className={styles.imagem}>
        <img
          className={styles.imagemArena}
          src="/imagens/ingressos/arena.png"
          alt="Mapa da Arena Fonte Nova"
        />
      </div>
    </main>
  );
}
