import "./leftChild.css"

const LeftChild = ({ title, image }) => {
    return (
        <div className="child-1">
            <div className="left-image-div">
                <img className="left-image" src={image} />
            </div>
            <div className="left-content-div">
                <div className="left-content">{title}</div>
            </div>
        </div>
    )
}

export default LeftChild