import React, {useId} from 'react';

function Input({
    label,
    type="text",
    className="",
    readonly="",
    ...props
},ref) {
    const id = useId()
    return ( <>
        <div className="w-full flex justify-center">
            {/* {
                label&& <label className=" inline-block mb-1 pl-1 mr-4" htmlFor={id} >{label}</label>
            } */}
            <input 
                type={type}
                className= {` w-4/5 h-10 rounded-lg px-3 ${className}`}
                readOnly = {readonly}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    </> );
}

export default React.forwardRef(Input);