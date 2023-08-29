import "./Tag.css";

export default function Tag({tagName}) {

    return (
        <div className="tags"> 
        <span className="tag">
            {tagName}
        </span>
        </div>
    )

}