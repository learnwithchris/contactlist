import React from 'react';
import './temp-converter.css';

function TempZones(props) {
    if (props.celsius >=100) {
      return <h5 className="hot">It's getting Hot in here!</h5>;
    }
    else if (props.celsius >=36.5 && props.celsius <=37.5) {
    return <h5 className="normal">This is the normal temperature of the human body!</h5>;
    }
     else if (props.celsius <=0) {
    return <h5 className="cold">Brr...Freezing!</h5>;
    }
    return null;
  }

  export default TempZones;
