const Cards = ({ elements }) => {
  return (
    <div>
      {elements.map((element) => {
        return (
          <article key={element.id}>
            <div>{element.specIcon}</div>
            <Image src={element.image} alt={element.title} />
            <span>{element.year}</span>
            <span>{element.title}</span>
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
