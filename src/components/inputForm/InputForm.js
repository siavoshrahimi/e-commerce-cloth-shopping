import React from "react";

import {GroupContainer,FormInputContainer,FormInputLabel} from "./inputForm.styles";


const InputForm = ({label,...otherProps}) =>{
    return(
        <GroupContainer>
            <FormInputContainer {...otherProps}/>
            {
                label?
                    (<FormInputLabel className={`${otherProps.value.length ? 'shrink': ''}`}>
                        {label}
                    </FormInputLabel>)
                    :null
            }
        </GroupContainer>
    )
}

export default InputForm;