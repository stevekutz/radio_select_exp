import React, {useState} from 'react';


const RadioSelect = ({vals, typeControl}) => {
    const[toggleState, setToggleState] = React.useState(false);

    console.log('vals is ', vals)

    return (

        <div>
            <input 
            type={typeControl} 
            id="genericRadio"
            
            checked = {toggleState}
            onChange = { () => setToggleState(!toggleState) }
            />
            <label htmlFor="genericRadio">{vals}</label>        
        </div>
    )

}

export default RadioSelect;



