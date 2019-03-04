import React from 'react';

const IframeHandler = (props) => {
  const listUrl = props.listUrl;

  const iframeContent = `<iframe id="settings-widget" src="${listUrl}&amp;query=&amp;subject=&amp;g_region=&amp;search_option=everything&amp;size=550_550&amp;heading=" width="550" height="550" border="0" scroll="no" frameborder="0"></iframe>`;
  return(
    <div>
      <p>Copy the code and paste it in your page - {listUrl}</p>
      <textarea className="textarea" value={iframeContent}/>
        
    </div>

  )
}
export default IframeHandler;