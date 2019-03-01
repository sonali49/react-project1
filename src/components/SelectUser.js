 import React from 'react';
 import Select from 'react-select';
 import FormFields from './FormFields';

 
const userList=[
  {
    username:"sonali491@gmail.com",
    data:{
      uniqueKey:"_cYb1McjuaJq9C39mjWmaQ",
      channelId:"1092"
    }
  },
  {
    username:"random@mynewsdesk.com",
    data:{
      uniqueKey:"LY6eZJ5rZDqDuzBQWBHbVA",
      channelId:"607"
    }
  }
];

var options = userList.map(user => ({ 
  value: user.username, 
  label: user.username, 
  uniqueKey: user.data.uniqueKey,
  channelId: user.data.channelId 
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
