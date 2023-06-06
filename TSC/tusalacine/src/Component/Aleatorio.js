import axios from "axios";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Panel } from "primereact/panel";
import Global from "../Global";
import { useLocation } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { Button } from "primereact/button";
import { StyleClass } from "primereact/styleclass";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { DateTime } from "react-intl-datetime-format";
import { Chip } from "primereact/chip";

const Aleatorio = (categoria) => {
  const url = Global.url;
  const location = useLocation();
  const path = location.pathname;
  const { user } = useContext(UserContext);
  const [random, setpeli] = useState([]);
  const openBtnRef = useRef(null);

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
    user
      ? axios.get(url + "getoneCate/" + categoria.categoria).then((res) => {
          setpeli(res.data.PeliRandom);
        })
      : axios.get(url + "getoneCate/" + categoria.categoria).then((res) => {
          setpeli(res.data.PeliRandom);
        });
  }

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
      <div className="bg-yellow-200 card-container flex flex-column align-content-around">
        <StyleClass
          nodeRef={openBtnRef}
          selector=".box"
          enterClassName="hidden"
          enterActiveClassName="fadein"
        >
          <Button
            ref={openBtnRef}
            label="Pulsa aquí"
            icon="pi pi-refresh"
            size="large"
            onClick={getPeliCate}
          />
        </StyleClass>
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
