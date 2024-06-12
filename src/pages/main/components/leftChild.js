import "./leftChild.css"

const LeftChild = ({ title, image }) => {
    return (
        <div className="child">
            <div className="left-image-div">
                <img className="left-image" src={image} />
            </div>
            <div className="left-content-div" >
                <p className="left-content">{title}</p>
            </div>
        </div>
    )
}

export default LeftChild