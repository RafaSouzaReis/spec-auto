const LogoBrands = ({ elements }) => {
  return (
    <div>
      {elements.map((element) => (
        <div key={element.id}>
          <img src={element.image} alt={element.title} />
        </div>
      ))}
    </div>
  );
};
export default LogoBrands;
