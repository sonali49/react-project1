
import React from 'react';
import RiverOfNews from './RiverOfNews';
export default class UserValidation extends React.Component{
    constructor (props){
    super(props);
    this.state={
        error:undefined,
        itemList:[]
    }
}
    handleUserValidation=(e)=>{
      e.preventDefault();
      const uniqueKey = e.target.elements.uniqueKey.value.trim();
      const channelId = e.target.elements.channelId.value.trim();
      const urlData = `https://www.mynewsdesk.com/partner/api/1_0/${uniqueKey}/channel/${channelId}/material/list`;
      const error = this.props.handleUserValidation(uniqueKey,channelId,urlData);
      if(!error){
          console.log("success")
          e.target.elements.uniqueKey.value=''; 
          e.target.elements.channelId.value=''; 
          this.props.newsLoad(urlData);
      }
        
    }
    render(){
      //let isItemPresent = "undefined";
      if(this.props.itemList){debugger
        const isItemPresent = this.props.itemList.length;
        console.log("return")
      }
        
        return (
        <div>
           {this.state.error && <p className="">{this.state.error}</p>}
            <form className="" onSubmit={this.handleUserValidation}>
                <label> Unique_Key
                    <input className="" type="text" name="uniqueKey" />
                </label>
                
                <label> Channel_Id
                    <input className="" type="text" name="channelId" />
                </label>
                <button className="">Submit</button>
            </form>
            
                {this.props.itemList && this.props.itemList.length ? 
                  (<div className="container"><RiverOfNews itemList={this.props.itemList}/></div>) : 
                  (<p>No item presentddddddd</p>)} 
                }
        </div>  
        );
    }
}