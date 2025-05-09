export default function ImageCard ({image, onClick}) {
    return (
         <li>
            <div onClick={() => onClick(image)}>
                <img src={image.urls.small} alt={image.alt_description} />
            </div>
        </li>

    );
}