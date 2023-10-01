import { IMG_CDN_URL } from "../../utils/constants";

const ItemList = ({ item }) => {
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 my-2 py-2 flex justify-between"
        >
          <div className="flex flex-col">
            <div className="pr-2">{item.card.info.name}</div>
            <div>
              {" "}
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <div className="text-custom-light-gray w-9/12 mt-2">
              {item.card.info.description}.
            </div>
          </div>
          <img
            src={IMG_CDN_URL + item.card.info?.imageId}
            className="h-24 w-28 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
