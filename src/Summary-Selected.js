import React from 'react'
import SummaryItem from './Summary-Item';

export default function SummarySelected(props) {
  return (Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.state.selected[feature];
    return <SummaryItem 
    USCurrencyFormat={props.USCurrencyFormat} 
    feature={feature}
    featureHash={featureHash} 
    selectedOption={selectedOption} 
    />
  }));
}