import "../App.css";

export const CradleOfFilth = () => {
  return (
    <div className="container">
      <img
        className="Cradle"
        src={require("../Components/Images/Filth.jpg").default}
        alt="band"
        height={500}
        width={500}
      />
      <img
        className="Cradle"
        src={require("../Components/Images/Cradle3.jpg").default}
        alt="pic1"
        height={500}
        width={500}
      />
      <img
        className="Cradle"
        src={require("../Components/Images/Cradle4.jpg").default}
        alt="pic2"
        height={500}
        width={500}
      />
      <img
        className="Cradle"
        src={require("../Components/Images/Cradle5.jpg").default}
        alt="the weirdest one"
        height={500}
        width={500}
      />
      <img
        className="Cradle"
        src={require("../Components/Images/CradeKanye.jpg").default}
        alt="pic 4"
        height={500}
        width={500}
      />
      <img
        className="Cradle"
        src={require("../Components/Images/Dani.jpg").default}
        alt="pic 5"
        height={500}
        width={500}
      />
    </div>
  );
};
