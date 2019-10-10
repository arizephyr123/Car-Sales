import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeAdded } from '../actions/actions'


const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
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
  )(Total);

