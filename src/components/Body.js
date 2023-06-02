import BodyHead from "./BodyHead";
import Graph from "./Graph";
import Outreaches from "./Outreaches";
import Reports from "./Reports";

function Body() {
    return ( 
        <div className="bg-[#F8F8F8] text-xl">
            <BodyHead />
            <Outreaches />
            <Graph />
            <Reports /> 
        </div>
     );
}

export default Body;