import React from 'react';
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import HeaderHome from './HeaderHome';
import '../styles/policies.css';

const Policies = () => {
    const {  auto, poliza } = React.useContext(userContext);

    return (
        <section className="policies-container">
            <HeaderHome />
            <div className="policies-title">
                <h1><strong>Mis pólizas</strong></h1>
            </div>
            <div className= "card-container mt-3">
            <div className="policy-box text-center">
                <div className="card policy-card mt-3">
                   
                        <div className="col-md-8">
                        <div className="row g-0 mt-3">
                        <div className="col-md-3 car-image mx-auto d-block">
                            <img src={car} className="img-fluid rounded-start mt-4 ms-4 " alt="..." />
                        </div>
                            <div className="card-body car-info">
                                {
                                    [auto.auto1].map((item, id) => (
                                        <h2 key={id}> <strong> {item.tipo} {item.marca} </strong>{item.patente} </h2>
                                    ))
                                }

                                {
                                    [poliza.poliza1].map((item, id) => (
                                        <div className= "policy-info" key={id}>
                                            <p className="card-text policy" > <strong>Póliza: </strong> {item.codigo} <strong>Vigencia:</strong> {item.vigencia} </p>
                                            <p className="card-text payment">
                                            {item.estado === "Impaga"
                ? <p className="bg-danger text-white text-center h3"> {item.estado} </p>
                : <p className="bg-success text-white text-center h3"> {item.estado} </p> }
                                            </p>
                                        </div>
                                        
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="assistance-box">
                <button className="btn btn-lg btn-dark btn-block btn-assistance" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-telephone-fill phone" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    Solicitar Asistencia

                </button>
            </div>
            </div>
        </section>

    );
}

export default Policies;