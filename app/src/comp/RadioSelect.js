import React, {useState} from 'react';


const RadioSelect = vals => {
    const[toggleState, setToggleState] = React.useState(false);

    console.log('vals is ', vals)

    return (

        <div>
            <input 
            type="radio" 
            id="genericRadio" name="other Radio" 
            checked = {toggleState}
            onClick = { () => setToggleState(!toggleState) }
            />
            <label htmlFor="genericRadio">{vals.vals}</label>        
        </div>
    )

}

export default RadioSelect;



