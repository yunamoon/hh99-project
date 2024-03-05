import { useState } from "react";


const usePreviewImg = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file && file.type.startsWith("image/")) {
			
            if (file.size > maxFileSizeInBytes) {
				console.log("Error", "File size must be less than 2MB", "error");
				setSelectedFile(null);
				return;
			}

			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};
			reader.readAsDataURL(file);

		} else {
			console.log("Error", "Please select an image file", "error");
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
