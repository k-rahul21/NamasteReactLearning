import React, { useState } from "react";
import { useSelector } from "react-redux";

const AvailableOffer = () => {
  const offerList = useSelector((store) => store.offers.offers);
  const [showOfferList, setShowOfferList] = useState(false);

  return (
    <div className="border-2 border-custom-dark-gray py-3 px-8">
      <h1 className="text-lg pb-2">Available Offer 💰</h1>
      <ul className="text-custom-light-gray leading-6 list-disc">
        {showOfferList ? (
          offerList.map((offer) => <li key={offer.id}>{offer.description}</li>)
        ) : (
          <li>{offerList[0]?.description}</li>
        )}
      </ul>
      <button className="pt-2" onClick={() => setShowOfferList(!showOfferList)}>
        {" "}
        {showOfferList ? "Show less 🔼" : "Show more 🔽"}
      </button>
    </div>
  );
};

export default AvailableOffer;
