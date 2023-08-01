const Comp2 = ({ isCompVisible }) => {
  return (
    <>
      <h1>Headline</h1>
      {isCompVisible && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In vel fugiat, error odit
          iusto quo deserunt quod assumenda. Voluptas amet sit quia perspiciatis ab dolor
          doloremque recusandae sed veritatis dolores.
        </p>
      )}
    </>
  );
};
export default Comp2;
