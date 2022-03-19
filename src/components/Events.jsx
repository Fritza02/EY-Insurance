import React from "react";
import "../styles/events.css";
import HeaderHome from "./HeaderHome.jsx";
//import dataContext from '../context/DataProvider'
import { userContext } from "../context/UserDataProvider";

const Events = () => {
  const { events } = React.useContext(userContext);

  return (
    <section className="events">
      <HeaderHome />
      <h1 className="text-center mt-4">
        {" "}
        <strong>Mis Eventos </strong>
      </h1>
      <div className=" containerEvents mt-3 card-body ">
        {events.map((item, id) => (
          <div className=" car-event mt-2 ms- mb-3 border p-2 rounded" key={id}>
            {[item.auto].map((ele, id) => (
              <h2 key={id}>
                <strong>
                  {" "}
                  {ele.marca} {ele.modelo}{" "}
                </strong>{" "}
                - {ele.patente}
              </h2>
            ))}
            <p className="h5 mt-2">
              {" "}
              <strong> Siniestro: </strong>
              {item.tipo}{" "}
            </p>
            {/*  Fecha de ingreso: {item.fecha}  */}
            <p>
              {" "}
              <strong>Código de atención:</strong> {item.id}{" "}
            </p>
            <p>
              {" "}
              <strong> Fecha siniestro: </strong> {item.day}
            </p>

            <div class="card bg-success text-white text-center">
              {
              item.estado === "Solicitud ingresada" ? 
              <div class="card bg-warning text-white">
              <div class="card-body"><strong>{item.estado}</strong></div>
            </div>
               : item.estado === "Solucionada" ? 
                <div class="card bg-success text-white">
                  <div class="card-body">
                    <strong>{item.estado}</strong>
                  </div>
                </div>
               : item.estado === "Rechazada" ? 
                <div class="card bg-danger text-white">
                  <div class="card-body"><strong>{item.estado}</strong></div>
                </div>
               : 
                <div class="card bg-light text-dark">
                  <div class="card-body"><strong>{item.estado}</strong></div>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
