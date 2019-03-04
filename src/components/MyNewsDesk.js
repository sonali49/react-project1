import React from 'react';
import Header from './Header';
import UserValidation from './UserValidation';
import axios from 'axios';
import {parseString} from 'xml2js';
import queryString from 'query-string';


export default class MyNewsDesk extends React.Component{
  state={
    uniqueKey : "LY6eZJ5rZDqDuzBQWBHbVA",
    channelId:"607",
    baseApiUrl:"https://www.mynewsdesk.com/partner/api/1_0/",
    //listUrl:"https://www.mynewsdesk.com/partner/api/1_0/LY6eZJ5rZDqDuzBQWBHbVA/channel/607/material/list",
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
      //const listUrl = `${this.state.baseApiUrl}${this.state.uniqueKey}/channel/${this.state.channelId}/material/list`;
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
            //return itemList;
            //return json;
        }.bind(this));
      }
      catch (e){
        
        //console.log("Not a valid url");
      }
      
  }

  componentDidMount() {
    if (!this.state.itemList) {
        this.newsLoad().then(itemList => this.setState({itemList,listUrl}))
                      .catch(err => { console.log("hey error")});
    }
    
  }
   
    render(){
    //console.log(this.props.location);
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
