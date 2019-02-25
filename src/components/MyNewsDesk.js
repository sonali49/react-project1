import React from 'react';
import Header from './Header';
import RiverOfNews from './RiverOfNews';
import axios from 'axios';
import {parseString} from 'xml2js';
export default class MyNewsDesk extends React.Component{
    constructor (props){
    super(props);
    //this.newsLoad = this.newsLoad.bind(this);
    this.state={
        itemList:[]
    }
}
newsLoad = async () => {
    const listUrl = "https://www.mynewsdesk.com/partner/api/1_0/LY6eZJ5rZDqDuzBQWBHbVA/channel/607/material/list";
    const results = await axios.get(listUrl);
    //debugger
    //const resultParser = new XMLParser().parseFromString(results.data);
    const xml = results.data;
    // this.setState({
    //     itemList:xml
    //   });
    const resultParser = new parseString (xml, function (err, result) {
        //console.log(result);
        const items = result.items.item;
        const itemList = items.sort((a, b) => 
        new Date(a.published_at[0]) - new Date(b.published_at[0]));
        //this.setState(() => ({itemList}));
        //return JSON.stringify(itemList);
         const json = JSON.stringify(itemList);
         localStorage.setItem("itemList",json);
        return json;

    });

}
    componentDidMount(){
        try{
            //debugger;
            //this.newsLoad();
            this.setState(()=>({itemList}));
            const json = localStorage.getItem("itemList");
            const itemList = JSON.parse(json);
			if (itemList) {
            this.setState(()=>({itemList}));
            }
           
        }
        catch(e){}
        
    }
    componentDidUpdate(prevPops,prevState){
        
        //debugger;
        //console.log(prevState);
        // if(prevState.itemList.length !== this.state.itemList.length){
        //     const json = JSON.stringify(this.state.itemList);
        //     localStorage.setItem("itemList",json);
        // }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        const isItemPresent = this.state.itemList.length;
        return(
            <div className="body-conatiner">
                <Header />
                <div className="container">
                {isItemPresent !== 0 ? (
                    <RiverOfNews itemList={this.state}/>
                ) : (
                    <p>No item present</p>
                )}
                </div>
                
            </div>
        );
    }
}

MyNewsDesk.defaultProps={
    itemList :[]
}