import "./rightChild.css"

const RightChild = ({ title, image }) => {
    return (
        <div className="right-child">
            <div className="right-content-div">
                <p className="right-content">{title}</p>
            </div>
            <div className="right-image-div">
                <img className="right-image" src={image} />
            </div>
        </div>
    )
}

export default RightChild