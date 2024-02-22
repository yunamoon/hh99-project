import React, { useEffect, useState } from 'react';


const EditProfileItem = ({ text, value,placeholder,  onChange}) => {

    return (
        <div className="flex flex-col space-y-1">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            {text}
        </label>
        <input
            type="text"
            name="bio"
            id="bio"
            className="block w-full px-3 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-black"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
    );
};

export default EditProfileItem;
