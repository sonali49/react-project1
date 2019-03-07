import React from 'react';
import Header from './Header';
import UserValidation from './UserValidation';
import axios from 'axios';
import {parseString} from 'xml2js';

export default class MyNewsDesk extends React.Component{
  state={
    uniqueKey : undefined,
    channelId:undefined,
    baseApiUrl:undefined,
    itemList:[],
    error:undefined,
    selectedOption:null
    
  }

  handleUserValidation=(uniqueKey,channelId,listUrl)=>{
    if(!uniqueKey){
      return "Enter valid unique key.";
    }
    else if(!channelId){
      return "Enter valid channel id.";
    }
    this.setState((prevState) => ({
      uniqueKey: prevState.uniqueKey,
      channelId: prevState.channelId,
      listUrl:prevState.listUrl
    }));
  }

  newsLoad = async (urlData) => {
    const listUrl = urlData;
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
      }.bind(this));
    }
    catch (e){
      alert("Some exception occurred. Kindly verify the Channel data.");
    }
      
  }

  componentDidMount() {
    if (!this.state.itemList) {
      this.newsLoad().then(itemList => this.setState({itemList,listUrl}))
                     .catch(err => {alert("Some exception occurred.") });
    }
    
  }
   
  render(){
    return(
      <div className="body-conatiner">
        <Header />
        <div className="content-area">
          <UserValidation 
            handleUserValidation={this.handleUserValidation} 
            newsLoad={this.newsLoad} 
            itemList={this.state.itemList}
            listUrl = {this.state.listUrl}
          />
        </div>
      </div>
    );
  }
}
