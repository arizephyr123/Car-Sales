import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import { addFeature, removeAdded } from '../actions/actions'

const AdditionalFeatures = props => {
  //console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
            
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
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
  )(AdditionalFeatures);
