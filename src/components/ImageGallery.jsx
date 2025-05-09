import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";


export default function ImageGallery ({images, onImageClick}) {
    return (
        <ul>
	       {images.map((image) => (
            <ImageCard key={image.id} image={image} onClick={onImageClick}/>
           ))}
        </ul>

    );

}