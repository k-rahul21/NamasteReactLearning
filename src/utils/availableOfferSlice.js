import { createReducer, createSlice } from "@reduxjs/toolkit";

const availableOfferList = [
  {
    id: 11,
    description:
      "Flat ₹75 cashback on Paytm Postpaid transactions above ₹399 MORE.",
  },
  {
    id: 12,
    description:
      "Assured cashback between ₹25 to ₹250 on Paytm wallet transactions above ₹299.",
  },
  {
    id: 13,
    description:
      "Get 20% discount (Maximum discount up to ₹125 on orders above ₹299) using select Bank of Baroda Debit Cards.",
  },
  {
    id: 14,
    description:
      "Get flat ₹150 Swiggy Money cashback using Flash.co email ID on transactions above ₹399.",
  },
  {
    id: 15,
    description:
      "Get 20% discount (Maximum discount up to ₹120 on orders above ₹299) using Federal Bank Credit Cards.",
  },
  {
    id: 16,
    description:
      "Get flat ₹200 discount on order above ₹500 using Axis Bank Select Credit Cards.",
  },
  {
    id: 17,
    description:
      "Get flat ₹120 discount on order above ₹500 using Axis Bank MY ZONE Credit Cards.",
  },
];

const availableOfferSlice = createSlice({
  name: "offers",
  initialState: {
    offers: availableOfferList,
  },
});

const offersReducer = createReducer(availableOfferSlice.getInitialState, {});
export { offersReducer };
