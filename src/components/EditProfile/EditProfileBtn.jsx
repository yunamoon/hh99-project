import React  from 'react';


const EditProfileBtn = ({ onClick, isUpdating }) => {

    return (
        <div className="flex items-center justify-between space-x-4">
        <button
            type="button"
            className="flex-1 px-4 py-2 text-sm font-medium text-black bg-red-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-500 focus:outline-none focus:ring-offset-gray-200"
            onClick={onClick.onClose}
        >
            Cancel
        </button>
        <button
            type="button"
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-offset-gray-200"
            onClick={onClick.handleEditProfile}
            disabled={isUpdating}
        >
            {isUpdating ? "Updating..." : "Submit"}
        </button>
    </div>
    );
};

export default EditProfileBtn;
