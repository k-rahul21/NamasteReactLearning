import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
import { IMG_CDN_URL } from "../../utils/constants";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 my-2 py-2 flex justify-between"
        >
          <div className="flex flex-col w-9/12">
            <div className="pr-2">{item.card.info.name}</div>
            <div>
              {" "}
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <div
              className={`text-custom-light-gray mt-2 
               `}
            >
              {item.card.info.description}.
            </div>
          </div>
          <div>
            <img
              src={IMG_CDN_URL + item.card.info?.imageId}
              className="h-24 w-28 rounded-lg"
            />
            <button
              className="border-2 border-custom-black py-1 px-4 relative left-5 bottom-5 bg-white"
              onClick={() => handleAddItem(item.card.info)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
