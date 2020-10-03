import React from 'react';
import slugify from 'slugify';
import FeatureItem from './Feature-Item';

export default function FeatureList(props) {
  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem 
          itemHash={itemHash} 
          feature={feature} 
          item={item} 
          updateFeature={props.updateFeature} 
          state={props.state}
          USCurrencyFormat={props.USCurrencyFormat}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
};