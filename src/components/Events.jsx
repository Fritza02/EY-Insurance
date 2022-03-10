import React from "react";
import "../styles/events.css";
import HeaderHome from "./HeaderHome.jsx";
//import dataContext from '../context/DataProvider'
import { userContext } from "../context/UserDataProvider";

const Events = () => {
  const { autoSinister, events } = React.useContext(userContext);
  console.log(autoSinister);

  return (
    <section className="events">
      <HeaderHome />
      <div className="containerEvents">
        <h1>Mis Eventos</h1>
        <div>
          {events.map((item, id) => (
            <div key={id}>
              {[item.auto].map((ele, id) => (
                <h1 key={id}>
                  {ele.marca} - {ele.patente} - {ele.modelo}
                </h1>
              ))}
              {item.tipo} - {item.fecha} - Numero de orden {item.id} -{" "}
              {item.estado}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
