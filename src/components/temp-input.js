import React from 'react';
import './temp-converter.css';
import {scaleNames} from './helpers';

 export default class TempInput extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }
  
    render() {
      const value = this.props.value;
      const scale = this.props.scale;
      return (
        <div className="container">
            <form>
              <div className= "form-group">
                <label><h3>Enter Temperature in {scaleNames[scale]}: </h3></label>
                <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
                       onChange={this.handleChange} />
              </div>
            </form>
          </div>
        
      );
    }
  }
  