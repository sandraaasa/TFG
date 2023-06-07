import React, { useState, useContext, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DateTime } from "react-intl-datetime-format";
import { useLocation } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import Global from "../Global";
import axios from "axios";

const CartaPeli = ({ id, peliData }) => {
  const url = Global.url;
  const location = useLocation();
  const path = location.pathname;
  const { user } = useContext(UserContext);
  const [sw, setSw] = useState(null);

  useEffect(() => {
    user &&
      axios
        .get(url + "getoneVista/" + user.id + "/" + peliData._id)
        .then((res) => {
          return res.data.Visto;
        })
        .then((visto) => {
          setSw(visto);
        })
        .catch((err) => {
          console.log(err.data);
        });
  }, [sw]);

  const intlConfig = {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };
  const subTitle = (
    <div id="subtitlePeli" className="text-gray-900">
      <p>
        Fecha: <DateTime config={intlConfig}>{peliData?.fecha}</DateTime>{" "}
      </p>
      <p> Minutos: {peliData?.minutos}</p>
      <p>Estrellas: {peliData?.valoracionTotal}</p>
      <p>Pais: {peliData?.pais}</p>
    </div>
  );
  const img = peliData?.poster;

  const cambiarVisto = () => {
    if (sw == false) {
      //no está la peli en vistas del usuario
      const peliVista = {
        idUsu: user.id,
        idPeli: peliData?._id,
        dia: new Date(),
      };
      axios
        .post(url + "addvista", peliVista)
        .then((res) => {
          setSw(true);
        })
        .catch((Error) => {
          console.log(Error.data);
        });
    } else {
      axios
        .delete(url + "deletevista", {
          data: { idUsu: user.id, idPeli: peliData?._id },
        })
        .then((res) => {
          setSw(false);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  const header = <img alt={peliData?.imbd_id} src={img} />;

  return (
    <Card
      title={peliData?.titulo}
      subTitle={subTitle}
      header={header}
      className="border-round max-w-full md:max-w-14rem xl:max-w-22rem m-2 bg-orange-50 text-gray-900"
    >
      <div className="grid ">
        <Inplace closable className="col-5">
          <InplaceDisplay>
            <Button
              label="Categoría"
              raised
              icon="pi pi-info-circle border-round"
            />
          </InplaceDisplay>
          <InplaceContent>
            <ul className="overflow-auto border-yellow-500 border-2 border-round">
              {peliData?.categorias.map((elemento) => {
                return <li key={elemento}>{elemento}</li>;
              })}
            </ul>
          </InplaceContent>
        </Inplace>

        {user && path != "/perfil" && (
          <Button
            className="col-3 col-offset-4"
            icon="pi pi-eye"
            raised
            text={sw ? false : true} //sw = true => la peli esta en lista de vistas
            //el botón se muestra rellenado
            rounded
            aria-label="Favorite"
            onClick={cambiarVisto}
          />
        )}
        <Inplace closable className="col-12">
          <InplaceDisplay>
            <Button
              label="Sinopsis"
              raised
              icon="pi pi-info-circle border-round"
            />
          </InplaceDisplay>
          <InplaceContent>
            <div class="overflow-auto m-1 p-3 border-yellow-500 h-10rem border-2 border-round">
              {peliData?.sinopsis}
            </div>
          </InplaceContent>
        </Inplace>
      </div>
    </Card>
  );
};
export default CartaPeli;
