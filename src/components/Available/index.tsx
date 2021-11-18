import { useAvailable } from "../../providers/AvailableProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFeedAvailable } from "../../providers/AvailableProvider/types";
import { useState } from "react";

const schema = yup.object().shape({
  description: yup.string().required("Precisamos que informe uma Mensagem"),
  avaliation: yup.string().required(""),
});

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
      {formFeed && <AddAvailable id={id} />}
    </>
  );
};

const AddAvailable = ({ id }: any) => {
  const { PostProductComent } = useAvailable();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFeedAvailable>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFeedAvailable) => {
    data.productId = id;
    PostProductComent(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Seu Texto:
          <input
            type="text"
            placeholder="Sua mensagem"
            {...register("description")}
          />
        </label>

        <label>
          Stars:
          <input type="range" min="0" max="10" {...register("avaliation")} />
        </label>

        <button type="submit">Avaliar</button>
      </form>
    </div>
  );
};

export { InforProduct, AddAvailable };
