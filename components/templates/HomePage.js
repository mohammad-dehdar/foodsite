import Attributes from "../modules/Attribiuts"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Definition from "../modules/Definition"
import Guide from "../modules/Guide"
import Instruction from "../modules/Instruction"
import Restriction from "../modules/Restriction"


function HomePage() {
  return (
    <div>
        <Banner/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Instruction/>
        <Guide/>
        <Restriction/>
    </div>
  )
}

export default HomePage