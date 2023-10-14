import "./DrugPage.css";
import Uses from "./Drug-Description/Uses";
import SideEffect from "./Drug-Description/SideEffect";
import Precaution from "./Drug-Description/Precaution";
import OverDose from "./Drug-Description/OverDose";
function DrugPage() {
  return (
    <div className="drug-page-container">
      <div className="drug-page-info">
        <h2>Abilify - Uses, Side Effects, and More</h2>
        <p>
          {" "}
          Generic Name : Acetofenon
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ullam
          hic totam facere suscipit! Vitae praesentium consequuntur tempora
          provident? At commodi sint quas qui molestiae aperiam voluptatibus
          fugiat consectetur quasi.
        </p>
      </div>

      <div className="drug-description">
        
            <a className = "round-1" href="#" id="uses">Uses</a>
            <a href="#" id="uses">Side-Effect</a>
            <a href="#" id="uses">Prescription</a>
            <a href="#" id="uses">OverDose</a>
            <a  className ="round-2" href="#" id="uses">Image</a>
       

      </div>
      <Uses />
      <SideEffect />
      <Precaution />
      <OverDose />
      
    </div>
  );
}

export default DrugPage;