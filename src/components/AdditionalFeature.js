import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeAdded } from '../actions/actions'


const AdditionalFeature = props => {
   //console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return{
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeAdded }
  )(AdditionalFeature);

