import React, {useId} from 'react';

function Select({
    options=[],
    label,
    className="",
    ...props
},ref) {
    const id = useId();
    return ( <>
        <div className=" w-full flex justify-end">
            {label && <label className="" htmlFor={id}></label>}
            <select 
                {...props}
                id = {id}
                ref = {ref}
                className={` w-1/12 h-4/5 rounded-lg px-1 ${className}`}
            >
            {
                options?.map((option)=>(
                    <option key={option} value={option}>
                        {
                            option
                        }
                    </option>
                ))
            }
            </select>
        </div>
    </> );
}

export default React.forwardRef(Select);