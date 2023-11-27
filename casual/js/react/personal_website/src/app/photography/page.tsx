import {PhotographyContent} from "./Photography_content";
import {Navbar} from "../components/Navbar";

const Photography = () => {

  const imageFilenames = ["P1110768.jpeg","P1110782 (2).jpeg","P1110798.jpeg", "P1120147.jpeg", "P1110772.jpeg", "P1110782 (3).jpeg",
    "P1110838.jpeg", "P1120154.jpeg", "P1110775.jpeg", "P1110789.jpeg", "P1120142.jpeg", "P1120177.jpeg"] 

  return(
    <div>
      <Navbar/>
      <PhotographyContent imageFilenames={imageFilenames}/>
    </div>
  )
}

export default Photography;
