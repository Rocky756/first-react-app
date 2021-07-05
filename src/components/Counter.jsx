const Counter = (props) => {
  console.log(' props =>', props);
  const { value, name } = props;
  return (
    <div className="box">
      <h4>{name}</h4>
      <h4>{value}</h4>
    </div>
  );
};

export default Counter;
