import React, { Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';
 
export default class FontSizeChangerLabel extends Component {
  render() {
    return (
      <div className="app">
        <FontSizeChanger
          targets={['.news-items']}
          options={{
            stepSize: 2,
            range: 5
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            buttonsMargin: 10
          }}          
        />
      </div>
    );
  }
}
