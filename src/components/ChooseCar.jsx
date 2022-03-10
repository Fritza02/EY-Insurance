import React from "react";
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import "../styles/chooseCar.css";
import HeaderBack from "./HeaderBack";

const ChooseCar = () => {
  const { nombre, auto, poliza, agregarAuto, insurance, agregarPoliza, agregarFire } = React.useContext(userContext);

  console.log(insurance);

  return (
    <section className="selectCar">
      <HeaderBack />
      <div className="containerSelectcar">
        <p className=" h1 text-center mt-4 mb-4"> Hola {nombre} </p>
        <p className="h3 text-center mb-4"> Escoge tu vehículo </p>

<<<<<<< HEAD
        {/*  style="max-width: 540px" */}
        
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={car}
                className="img-fluid rounded-start mt-4 ms-4"
                alt="auto"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {
                
=======
      <h1 className="text-center mt-4 mb-4"> Hola {nombre}, escoge tu vehículo </h1>
      
      {/*  style="max-width: 540px" */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={car}className="img-fluid rounded-start mt-4 ms-4" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {
>>>>>>> 9d136b61f869f790a4d32ed52b2b8ba73f1e56dd
                [auto.auto1].map((item, id) => (
                  <button
                  key={id}
                onClick={() => {
                  agregarAuto(item);
                }}
              >
                  <h2 >
                    {" "}
                    {item.modelo} {item.marca} {item.patente}{" "}
                  </h2>
                  </button>
                ))}

                {
                [poliza.poliza1].map((item, id) => (
<<<<<<< HEAD
                   <button
                   key={id}
                   onClick={() => {
                     agregarPoliza(item);
                   }}>

                  <div >
                   
                    <p className="card-text">
                      {" "}
                      Poliza: {item.codigo} Vigencia: {item.vigencia}{" "}
                    </p>
                    <p className=" h5 text-info card-text">{item.estado}</p>
                   
                  </div>
                   </button>
                   
                ))}
=======
                  <div key={id}>
                  <p className="card-text" > Poliza: {item.codigo} Vigencia: {item.vigencia} </p>
                  <p className="card-text">
                <small className="text-muted state-payment">{item.estado}</small>
              </p>
>>>>>>> 9d136b61f869f790a4d32ed52b2b8ba73f1e56dd
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={agregarFire}> Siguiente </button>
    </section>
  );
};

export default ChooseCar;
