import React from 'react';
import queryString from 'query-string';
import RiverOfNews from './RiverOfNews';
import axios from 'axios';
import {parseString} from 'xml2js';
import Iframe from 'react-iframe';
export default class IframeLoadingData extends React.Component{
  
  state={
    itemList:[]
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const urlData = `https://www.mynewsdesk.com/partner/api/1_0/${values.uniqueKey}/channel/${values.channelId}/material/list`;
    if (!this.state.itemList) {
        this.newsLoad(urlData).then(itemList => this.setState({itemList,listUrl}))
                      .catch(err => { console.log("hey error")});
    }
    this.newsLoad(urlData);
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
      
      //console.log("Not a valid url");
    }
    
}
  render(){
    return(
      <div>
        {
          this.state.itemList && this.state.itemList.length ? 
          (<div className="container news-list"><RiverOfNews itemList={this.state.itemList}/></div>) : 
          (<p className="">No items present !!</p>)
        }
         </div>
    );
  }
  
}