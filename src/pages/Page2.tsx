import Checkbox1 from "../component/Checkbox1"
import Checkbox2 from "../component/Checkbox2"
import Context from "../context/data"
import '../index.css'


const Page2 = ({}) => {
  return (
    <div>
      <Context/>
    <div className="page2">
    <Checkbox1/>
    <Checkbox2/>
      </div>  
    </div>
  )
}

export default Page2
