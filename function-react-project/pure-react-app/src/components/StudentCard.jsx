import Students from "./Students";

const Studentcard = ({ obj }) => {
  return (
    <div className="imgdiv">
      <img src="./img/newdp.jpeg" alt="student image" className="img" />
      <Students name={obj.name} age={obj.age} country={obj.country} />
    </div>
  );
};
export default Studentcard;
