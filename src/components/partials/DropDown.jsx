import React from 'react'

const DropDown = ({ title, options, fun }) => {
    return (
        <div className='select flex relative'>
            <select className='' defaultValue="0" onChange={fun} name='format' id='formate'>
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((item, index) => (
                    <option key={index} value={item} >
                        {item.toUpperCase()}
                    </option>
                ))}
            </select>
            <i className="absolute top-2 right-9 text-white text-2xl ri-arrow-drop-down-fill"></i>
        </div>
    )
}

export default DropDown