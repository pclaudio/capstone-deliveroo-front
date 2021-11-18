import { useAvailable } from "../../providers/AvailableProvider";
import { useState } from "react";
import { Rating } from "../Rating";

const InforProduct = (id: number) => {
  const [formFeed, setFormFeed] = useState<boolean>(false);
  const { feedProduct, windowFeed, setWindowFeed } = useAvailable();
  return (
    <>
      <ul>
        {feedProduct.length > 0
          ? feedProduct.map((feed) => {
              return (
                <li key={feed.id}>
                  <span>{feed.avaliation}</span>
                  <p>{feed.description}</p>
                </li>
              );
            })
          : "Sem Comentario ate o momento"}
        <button onClick={() => setWindowFeed(!windowFeed)}>Fechar</button>
        <button onClick={() => setFormFeed(!formFeed)}>Criar Comentario</button>
      </ul>
      {formFeed && <Rating id={id} />}
    </>
  );
};

export default InforProduct;
