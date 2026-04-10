const SpecIcon = ({ elements }) => {
  return (
    <div>
      {elements.map((element) => {
        return (
          <article key={element.id}>
            <div>{element.specIcon}</div>
          </article>
        );
      })}
    </div>
  );
};

export default SpecIcon;
