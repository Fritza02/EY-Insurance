// commmit con lo de la demo nigth
import React from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import "../styles/chooseCar.css";
import HeaderBack from "./HeaderBack";

const ChooseCar = () => {
  const { nombre, auto, poliza, setCarSinister } =
    React.useContext(userContext);

  const saveValue = (item) => {
    const choose = item;
    console.log(choose);
    setCarSinister(choose);
  };

  return (
    <section className="selectCar">
      <HeaderBack />

      <div className="containerSelectcar ms-2 me-4">
        <h1 className="text-center mt-4 mb-4">
          {" "}
          Hola {nombre}, escoge tu vehículo{" "}
        </h1>

        {/*/  style="max-width: 540px" */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5">
              <div className="card-body">
                <div className="col-md-4">
                  <img
                    src={car}
                    className="img-fluid rounded-start d-block mx-auto mt-2 mb-2"
                    alt="..."
                  />
                </div>
                {[auto.auto1].map((item, id) => (
                  <button
                    type="button"
                    class="btn btn-light text-center mt-3 mb-3 md-block mx-auto"
                    key={id}
                    onClick={saveValue(item)}
                  >
                    <h2>
                      {" "}
                      <strong>
                        {item.modelo} {item.marca}
                      </strong>{" "}
                      {item.patente}{" "}
                    </h2>
                  </button>
                ))}

                {[poliza.poliza1].map((item, id) => (
                  <div key={id}>
                    <p className="card-text">
                      {" "}
                      <strong>Poliza: </strong> {item.codigo}{" "}
                      <strong>Vigencia: </strong> {item.vigencia}{" "}
                    </p>
                    <p className="card-text payment">
                    
                      
                      {item.estado === "Impaga"
                ? <p className="bg-danger text-white text-center h3"> {item.estado} </p>
                : <p className="bg-success text-white text-center h3"> {item.estado} </p> }
                    
                      
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="continue-btn">
        <Link to="/sinister">
          <button type="button" class="btn btn-dark next-btn">
            Siguiente
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChooseCar;
