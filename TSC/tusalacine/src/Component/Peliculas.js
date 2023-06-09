import React, { useEffect, useState, useRef, useContext } from "react";
import UserContext from "../Context/UserContext";
import Global from "../Global";
import axios from "axios";
import Carta from "./Carta";
import AsideLateral from "./AsideLateral";
import Aleatorio from "./Aleatorio";
import AleatorioSinCate from "./AleatorioSinCate";
import { Button } from "primereact/button";
import { StyleClass } from "primereact/styleclass";
import { Panel } from "primereact/panel";
import { Toast } from "primereact/toast";

const Peliculas = () => {
  const url = Global.url;
  const [pelis, setpelis] = useState([]);
  const [random, setpeli] = useState([]);
  const [categoria, setCategoria] = useState("");
  const { user } = useContext(UserContext);

  const openBtnRef = useRef(null);
  const toast = useRef(null);

  useEffect(() => {
    getpelis();
  }, [categoria]);

  const show = (dato) => {
    toast.current.show({
      severity: "error",
      summary: "No hay películas",
      detail: dato,
      life: 5000,
    });
  };

  //obtner todas las películas en en el usestate pelis
  const getpelis = () => {
    if (categoria === "") {
      axios.get(url + "getall").then((res) => {
        setpelis(res.data.peliget);
      });
    } else {
      axios
        .get(url + "getCate/" + categoria)
        .then((res) => {
          setpelis(res.data.pelisCate);
        })
        .catch((error) => {
          if (error.response.status == 404) {
            show("No hay películas con esta categoría");
          }
          console.log(error.response);
        });
    }
  };

  //obtner la película aletortia SIN la categoría
  function getPeli() {
    user
      ? //si el usuario está logueado
        axios
          .get(url + "getVistaRandom/" + user.id)
          .then((res) => {
            setpeli(res.data.PeliRandom);
          })
          .catch((error) => {
            if (error.response.status == 404) {
              show("Usted ha visto todas las películas T-T");
            }
            console.log(error.response.status);
          })
      : //si el usuario no está logueado
        axios
          .get(url + "getone")
          .then((res) => {
            setpeli(res.data.PeliRandom);
          })
          .catch((error) => {
            console.log(error.response.status);
          });
  }

  //obtener la categoría del hijo (AsideLateral) para Aleatorio
  const recibirCategoria = (datosHijo) => {
    setCategoria(datosHijo);
  };

  const peliSinCate = (
    <article className="bg-yellow-200 card">
      <div className="bg-yellow-200 card-container flex flex-column align-content-around">
        <StyleClass
          nodeRef={openBtnRef}
          selector=".box"
          enterClassName="hidden"
          enterActiveClassName="fadein"
        >
          <Button
            ref={openBtnRef}
            label="TSC"
            icon="pi pi-refresh"
            size="large"
            onClick={getPeli}
          />
        </StyleClass>
        <Panel toggleable className="hidden animation-duration-500 box">
          <AleatorioSinCate peliData={random} />
        </Panel>
      </div>
    </article>
  );

  return (
    <main>
      <AsideLateral getCategoria={recibirCategoria} />
      <div className="card contenedor backBlack bg-primary">
        <section className="backBlack card flex flex-wrap justify-content-center align-items-center">
          <Toast ref={toast} position="top-left" />
          {categoria ? (
            <div>
              <h1>{categoria}</h1>
              <Aleatorio categoria={categoria} />
            </div>
          ) : (
            <div>
              <h1>Random Movie</h1>
              {peliSinCate}
            </div>
          )}
        </section>
        <h1 className="mt-5">Películas: {categoria}</h1>
        <section className="flex flex-wrap justify-content-center card-container gap-3">
          {pelis.length > 0 ? (
            pelis.map((peli, i) => {
              return <Carta key={i + 1} id={i} peliData={peli} />;
            })
          ) : (
            <h3 className="mx-auto">No hay películas que mostrar</h3>
          )}
        </section>
      </div>
    </main>
  );
};
export default Peliculas;
