import LogoBrands from "@/components/logo-brands";

export default function HomePage() {
  return (
    <div>
      <section>
        <div>
          <h1>Cada carro, uma historia em movimento.</h1>
          <p>
            Explore modelos, compare especificações e visualize cada veículo de
            forma simples e objetiva. Um espaço pensado para apresentar carros
            com clareza e consistência.
          </p>
          <button>Catalogo</button>
        </div>
      </section>
      <section>
        <h1>Lancamentos</h1>
        <div>
          <Cards elements={elements} />
        </div>
      </section>
      <section>
        <h1>Lancamentos</h1>
        <div>
          <Cards elements={elements} />
        </div>
      </section>
      <section>
        <div>
          <span>Destaque</span>
          <span>Legacy series</span>
          <h1>LANCER EVO V</h1>
          <p>
            {" "}
            O ícone do rally de 1998. Uma obra-prima da engenharia japonesa,
            combinando tração integral e um motor 4G63 turboalimentado que
            definiu uma era.{" "}
          </p>
          <div>
            <div>
              <span>Potencia</span>
              <span>280 cv</span>
              <span>drivertrain</span>
              <span>AWD</span>
            </div>
            <div>
              <span>0-100 km/h</span>
              <span>4.7SEC</span>
              <span>unidades</span>
              <span>limitadas</span>
            </div>
            <button>ver detalhes</button>
          </div>
          <div>
            <div>
              <Image src={element.image} alt={element.title} />
            </div>
            <div>
              <Image src={element.image} alt={element.title} />
              <Image src={element.image} alt={element.title} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <LogoBrands elements={elements} />
        </div>
      </section>
    </div>
  );
}
