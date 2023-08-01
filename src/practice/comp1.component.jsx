const Comp1 = ({ handleCompVisible }) => {
  return (
    <>
      <button onClick={() => handleCompVisible(true)}>Button1</button>
      <button onClick={() => handleCompVisible(false)}>Button2</button>
    </>
  );
};
export default Comp1;
