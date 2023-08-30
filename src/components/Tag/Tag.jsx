import "./Tag.css";

export default function Tag({array}){
    return (
        <div className="tags">{array?.map((tags,index) =>(
            <div className="tag" key={index}>{tags}</div>
        ))}
        </div>
    )
}