import { Link } from "react-router-dom"
import '../index.css'

const Navigation = () => {
  return (
    <div className="nav">
      <Link to='/' className="navL">Page1</Link>
      <Link to='/page2' className="navL">Page2</Link>
    </div>
  )
}

export default Navigation
