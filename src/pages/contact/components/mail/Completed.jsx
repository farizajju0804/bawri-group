import "./Completed.css"
import close from '../../assets/close.svg'

const Completed = () => {
  return (
    <div className='completed-container'>
      <img src={close} className="mail-image" />
      <h3 className='completed-title'>We will get back to you soon!</h3>
    </div>
  )
}

export default Completed