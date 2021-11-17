import { useDetails } from "../../providers/DetailsProvider";

function DetailProduct() {
  const { detail, setDetail } = useDetails();

  return (
    <div>
      {detail &&
        detail.map((item) => {
          return (
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.description}</p>

              <span>{item.price}</span>
              <button>add To Cart</button>
              <button onClick={() => setDetail([])}>Voltar</button>
            </div>
          );
        })}
    </div>
  );
}
export default DetailProduct;
