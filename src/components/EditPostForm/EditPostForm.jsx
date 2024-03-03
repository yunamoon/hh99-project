import React, { Fragment, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useUpdatePost from '../../hooks/useUpdatePost';

const EditPostForm = ({ isOpen, onClose, post }) => {

    const { handleUpdatePost, loading, error } = useUpdatePost();
    const authUser = useSelector((state)=> state.user)
    const [postId , SetPostId] = useState(post.id)
    const [inputs, setInputs] = useState({
        content: post.content,
        image: null,
    });

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setInputs({ ...inputs, image: file });
    };

    return (
        <Fragment>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
                        <div className="flex justify-end">
                            <button className="p-2" onClick={onClose}>
                                <MdClose />
                            </button>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
                            <div className="mb-4">
                                <label htmlFor="content" className="block mb-1">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={inputs.content}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block mb-1">Image</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                    className="w-full border rounded-md p-2"
                                />
                            </div>
                            <button
                                onClick={() => handleUpdatePost(postId, inputs.content , inputs.image)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Update Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default EditPostForm;
