import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn ({onClick}) {
    return (
        <div>
            <button onClick={onClick}>Load More</button>
        </div>
    );
}