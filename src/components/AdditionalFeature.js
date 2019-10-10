import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeAdded } from '../actions/actions'


const AdditionalFeature = props => {
   //console.log(props);
  return (
    <li>
      <button className="button" onClick={props.addFeature}>Add</button>
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

