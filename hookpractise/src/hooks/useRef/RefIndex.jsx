import { useState, useTransition, useRef } from "react";

const RefIndex = () => {
    const imageRef = useRef(null);
    const [isFirstImage, setIsFirstImage] = useState(true);

    const handleImageChange = () => {
        if (imageRef.current) {
            imageRef.current.src = isFirstImage
                ?
                "https://cdn.pixabay.com/photo/2017/08/15/09/40/church-2643296_1280.jpg"
                :
                "https://cdn.pixabay.com/photo/2013/10/12/17/45/temple-194617_1280.jpg"
            setIsFirstImage(!isFirstImage);
        }
    }

    return (
        <div >
            <h1>Change image using useref</h1>
            <img ref={imageRef} src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg"></img>
            <button onClick={handleImageChange}>Change image</button>
        </div>
    );
}

export default RefIndex;