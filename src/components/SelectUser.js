 import React from 'react';
 import Select from 'react-select';
 import FormFields from './FormFields';
var userList = require ('../file.json');
 
var options = userList.map(user => ({ 
  value: user.username, 
  label: user.username, 
  uniqueKey: user.userData.uniqueKey,
  channelId: user.userData.channelId 
}));
export default class SelectUser extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  render(){
    const {selectedOption} = this.state;
    return (
      <div>
        <label> Username/Email
        <Select 
          className="select"
          value = {selectedOption}
          options={options}
          onChange={this.handleChange}
        />
        </label>
        <form className="" onSubmit={this.props.handleUserValidation}>
          {selectedOption && <FormFields selectedOption={selectedOption}/>}
          <div>
            <button className="submit-button">Submit</button>
          </div>
        </form>
        
      </div>
    );
    
  }
 
}
