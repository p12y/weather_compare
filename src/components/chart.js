import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = ({data, color, type, panelClass, unit}) => {
  const average = Math.round(data.reduce((cur, acc) => {
    return cur + acc;
  }) / data.length);

  return (
    <div className={`panel panel-${panelClass}`}>
      <div className="panel-heading">
        <h4 className="panel-title">{type}: <strong>{average} {unit}</strong></h4>
      </div>
      <div className="panel-body">
        <Sparklines height={120} width={180} data={data}>
          <SparklinesLine color={color} type="avg" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    </div>
  );
};

export default Chart;