import React from 'react';
import RiverOfNews from './RiverOfNews';
import IframeHandler from './IframeHandler';
import SelectUser from './SelectUser';

export default class UserValidation extends React.Component{
  constructor (props){
  super(props);
  this.state={
    error:undefined,
    itemList:[],
    listUrl:undefined,
    selectedOption:null   
  }
}
  handleUserValidation=(e)=>{
    e.preventDefault();
    const uniqueKey = e.target.elements.uniqueKey.value.trim();
    const channelId = e.target.elements.channelId.value.trim();
    const urlData = `https://www.mynewsdesk.com/partner/api/1_0/${uniqueKey}/channel/${channelId}/material/list`;
    const error = this.props.handleUserValidation(uniqueKey,channelId,urlData);
    this.setState(() =>({error}))
    if(!error){
      e.target.elements.uniqueKey.value=''; 
      e.target.elements.channelId.value=''; 
      this.props.newsLoad(urlData);
      const location = window.location.origin;
      this.setState(() => ({
        listUrl:`${location}uniqueKey/:${uniqueKey}channelId/:${channelId}`
      }));
    }
      
  }
  render(){
    //let isItemPresent = "undefined";
    if(this.props.itemList){
      const isItemPresent = this.props.itemList.length;
    }
    const options = {}
      return (
      <div className="river-container">
        <div className="validation-form">
          {this.state.error && <p className="">{this.state.error}</p>}
          <SelectUser handleUserValidation={this.handleUserValidation}/>
          <IframeHandler listUrl={this.state.listUrl} />
        </div>
        {this.props.itemList && this.props.itemList.length ? 
          (<div className="container news-list"><RiverOfNews itemList={this.props.itemList}/></div>) : 
          (<p>No items present !!</p>)
        } 
      </div>  
      );
  }
}