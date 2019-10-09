import { ADD_FEATURE, REMOVE_ADDED } from '../actions/actions'

const InitialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = InitialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_FEATURE:
      // remove from additional feature
      // move to added feature
      // update amounts
      //console.log(state);
      return {
        ...state
      };

      case REMOVE_ADDED:
      // remove from added feature
      // move to additional feature
      // update amounts
      //console.log(state);
      return {
        ...state
      };
      default:
          return state;
  }
};
