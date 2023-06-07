import axios from "axios";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Panel } from "primereact/panel";
import Global from "../Global";
import { useLocation } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { Button } from "primereact/button";
import { StyleClass } from "primereact/styleclass";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { DateTime } from "react-intl-datetime-format";
import { Chip } from "primereact/chip";
import { Toast } from "primereact/toast";

const Aleatorio = (categoria) => {
  const url = Global.url;
  const location = useLocation();
  const path = location.pathname;
  const { user } = useContext(UserContext);
  const [random, setpeli] = useState([]);
  const openBtnRef = useRef(null);
  const toast = useRef(null);

  const show = (dato) => {
    toast.current.show({
      severity: "error",
      summary: "No hay películas",
      detail: dato,
      life: 5000,
    });
  };

  const {
    imbd_id,
    titulo,
    fecha,
    minutos,
    pais,
    sinopsis,
    valoracionTotal,
    poster,
  } = random || {};

  function getPeliCate() {
    const objeto = categoria.categoria + "/" + user.id;
    user
      ? axios
          .get(url + "getVistaCate/" + objeto)
          .then((res) => {
            setpeli(res.data.PeliRandom);
          })
          .catch((error) => {
            if (error.response.status == 404) {
              show("Has visto todas las películas de esta categoría T-T");
            }
            console.log(error.response.status);
          })
      : axios
          .get(url + "getoneCate/" + categoria.categoria)
          .then((res) => {
            setpeli(res.data.PeliRandom);
          })
          .catch((error) => {
            if (error.response.status == 404) {
              show("No hay películas con esta categoría");
            }
            console.log(error.response.status);
          });
  }

  useEffect(() => {
    getPeliCate();
  }, [categoria.categoria]);

  const intlConfig = {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };
  const img = poster;
  const header = <img alt={imbd_id} src={img} className="max-h-20rem" />;

  const time = (
    <>
      <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center">
        <i className="pi pi-clock" />
      </span>
      <span className="ml-2 font-medium">
        <DateTime config={intlConfig}>{fecha}</DateTime>
      </span>
    </>
  );
  const star = (
    <>
      <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center">
        <i className="pi pi-spin pi-star" />
      </span>
      <span className="ml-2 font-medium">{valoracionTotal}</span>
    </>
  );
  const world = (
    <>
      <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center">
        <i className="pi pi-globe" />
      </span>
      <span className="ml-2 font-medium">{pais}</span>
    </>
  );
  const minute = (
    <>
      <span className="ml-2 font-medium">{minutos} minutos</span>
    </>
  );
  const resumen = (
    <>
      <Inplace closable className="ml-2 font-medium ">
        <InplaceDisplay>Sinopsis</InplaceDisplay>
        <InplaceContent>
          <p>{sinopsis}</p>
        </InplaceContent>
      </Inplace>
    </>
  );

  return (
    <article className="bg-yellow-200 card">
      <Toast ref={toast} position="top-left" />
      <div className="bg-yellow-200 card-container flex flex-column align-content-around">
        <StyleClass
          nodeRef={openBtnRef}
          selector=".box"
          enterClassName="hidden"
          enterActiveClassName="fadeout"
        />
        <Button
          ref={openBtnRef}
          label="Random"
          icon="pi pi-spin pi-refresh"
          size="large"
          onClick={getPeliCate}
        />
        <Panel
          header={titulo}
          toggleable
          className="hidden animation-duration-500 box"
        >
          <div className="m-0 flex flex-column justify-content-center align-items-center flex-wrap card-containe gap-3">
            <div className="flex justify-content-center flex-wrap card-containe gap-3">
              {header}
              <div id="subtitlePeli">
                <p>
                  <Chip className="pl-0 pr-3" template={time} />
                </p>
                <p>
                  <Chip className="pl-0 pr-3" template={world} />
                </p>
                <p>
                  <Chip className="pl-0 pr-3" template={star} />
                </p>
                <p>
                  <Chip className="pl-0 pr-3" template={minute} />
                </p>
              </div>
            </div>
            <Chip className="pl-0 pr-3" template={resumen} />
          </div>
        </Panel>
      </div>
    </article>
  );
};
export default Aleatorio;
