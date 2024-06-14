import "./rightChild.css"

const RightChild = ({ title, image }) => {
    return (
        <div className="right-child">
            <div className="right-content-div">
                <div className="right-content">{title}</div>
            </div>
            <div className="right-image-div">
                <img className="right-image" src={image} />
            </div>
        </div>
    )
}

export default RightChild