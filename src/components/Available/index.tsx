import { useAvailable } from "../../providers/AvailableProvider";

export const InforProduct = () => {
  const { feedProduct } = useAvailable();
  return (
    <div>
      <ul>
        {feedProduct.map((feed) => {
          return (
            <li key={feed.id}>
              <span>{feed.avaliation}</span>
              <p>{feed.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const AddAvailable = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="comente" />
        <button>Avaliar</button>
      </form>
    </div>
  );
};
