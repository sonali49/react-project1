import React from 'react';
import RiverOfNews from './RiverOfNews';
import IframeHandler from './IframeHandler';
export default class UserValidation extends React.Component{
    constructor (props){
    super(props);
    this.state={
        error:undefined,
        itemList:[],
        listUrl:undefined
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
          this.setState(() => ({
            listUrl:urlData
          }));
      }
        
    }
    render(){
      //let isItemPresent = "undefined";
      if(this.props.itemList){
        const isItemPresent = this.props.itemList.length;
      }
        return (
        <div className="river-container">
          <div className="validation-form">
            {this.state.error && <p className="">{this.state.error}</p>}
            <form className="" onSubmit={this.handleUserValidation}>
              <label> Unique_Key
                <input className="" type="text" name="uniqueKey" />
              </label>
              <label> Channel_Id
                <input className="" type="text" name="channelId" />
              </label>
              <div>
                <button className="">Submit</button>
              </div>
              <IframeHandler listUrl={this.state.listUrl} />
            </form>
            </div>
            {this.props.itemList && this.props.itemList.length ? 
              (<div className="container news-list"><RiverOfNews itemList={this.props.itemList}/></div>) : 
              (<p>No items present !!</p>)} 
          </div>  
        );
    }
}