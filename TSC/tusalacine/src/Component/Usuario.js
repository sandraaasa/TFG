import React, { useState, useContext } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import UserContext from "../Context/UserContext";

const PerfilUsuario = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useContext(UserContext);

  return (
    <div className="md:flex flex-row">
      <div className="flex md:flex-column flex-wrap gap-2 mb-3">
        <Button
          onClick={() => setActiveIndex(0)}
          className="p-button-text"
          label="Activate 1st"
        />
        <Button
          onClick={() => setActiveIndex(1)}
          className="p-button-text"
          label="Activate 2nd"
        />
        <Button
          onClick={() => setActiveIndex(2)}
          className="p-button-text"
          label="Activate 3rd"
        />
      </div>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="w-full"
      >
        <TabPanel header={user.nombre}>
          <p className="m-0 w-full">{user.id}</p>
        </TabPanel>
        <TabPanel header={user.nombre}>
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel header={user.nombre}>
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default PerfilUsuario;
