import React from 'react';
import axios from 'axios';
import {parseString} from 'xml2js';
import UserValidation from './UserValidation';

export default class NewsLoadApiCall extends React.Component{
  state={
    itemList:[]
  }

  newsLoad = async (urlData) => {
    const listUrl = this.props.listUrl;
    try{
      const results = await axios.get(listUrl).catch(function(error){if(error.response){
        console.log(error.response.status)
        console.log(error.response.data)
        alert(error.response.data + " - " + error.response.status);
      }});
      const xml = results.data;
      let { data } = await results.data;
      this.setState({ itemList: data});
      const resultParser = new parseString (xml, function (err, result) {
        const items = result.items.item;
        const itemList = items.sort((a, b) => new Date(a.published_at[0]) - new Date(b.published_at[0]));
        this.setState((prevState) => ({
          itemList:itemList
        }));
        
        const json = JSON.stringify(itemList);
        localStorage.setItem("itemList",json);
        //return itemList;
        //return json;
      }.bind(this));
    }
    catch (e){
      
      //console.log("Not a valid url");
    }
      
  }
  
  componentDidMount() {
    const listUrl = this.props.listUrl;
    if (!this.state.itemList) {
        this.newsLoad(listUrl).then(itemList => this.setState({itemList,listUrl}))
                      .catch(err => { console.log("hey error")});
    }
    
  }
  componentWillMount() {
  }
  render(){
    return(
      <div>
      </div>
    );
  }
}