import React from 'react';import { connect } from 'react-redux';
import { addFeature, removeAdded } from '../actions/actions'




const AddedFeature = props => {
  //console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return{
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeAdded }
  )(AddedFeature);