import React from 'react';
import TempInput from './temp-input';
import TempZones from './temp-zones';

import './temp-converter.css';
import {toCelsius, toFahrenheit, tryConvert} from './helpers';

  
  class TempConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', scale: 'c'};
    }
  
    handleCelsiusChange = (value) => {
      this.setState({scale: 'c', value});
    }
  
    handleFahrenheitChange = (value) => {
      this.setState({scale: 'f', value});
    }
  
    render() {
      const scale = this.state.scale;
      const value = this.state.value;
      const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
      const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
  
      return (
        <div className="text-center container-fluid">
          <TempInput
            scale="c"
            value={celsius}
            onChange={this.handleCelsiusChange} />
          <TempInput
            scale="f"
            value={fahrenheit}
            onChange={this.handleFahrenheitChange} />
          <TempZones
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
  export default TempConverter;
  
  