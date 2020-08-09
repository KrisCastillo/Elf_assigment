import React from 'react';

const FeatureProduct = ({options, product}) => (
  <div className="feature" >
    <div className="feature__name">{product}</div>
      <ul className="feature__list">
          { options }
      </ul>
</div>
)

export default FeatureProduct; 
