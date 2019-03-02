import React from 'react';
const FormFields = (props) => {
  const selectedOption = props.selectedOption;
  return(
    <div>
    <label> Unique_Key
      <input className="" readOnly type="text" name="uniqueKey" value={selectedOption.uniqueKey}/>
    </label>
    <label> Channel_Id
      <input className="" readOnly type="text" name="channelId" value={selectedOption.channelId} />
    </label>
    
    </div>
  )
}
export default FormFields;