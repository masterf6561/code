import {PhotographyContent} from "./Photography_content";
import {Navbar} from "../components/Navbar";
import {Gear} from "./gear";
import Link from "next/link";

export interface Photography {
  imageFilenames: string[];
}

const Photography = () => {

  const imageFilenames = ["P1110768.jpeg","P1110782 (2).jpeg","P1110798.jpeg", "P1120147.jpeg", "P1110772.jpeg", "P1110782 (3).jpeg",
    "P1110838.jpeg", "P1120154.jpeg", "P1110775.jpeg", "P1110789.jpeg", "P1120142.jpeg", "P1120177.jpeg"] 

  return(
    <div className="bg-seasalt ">
      <Navbar/>
      <div className="bg-seasalt text-night text-center mt-4">
        <Link href="#gearList">Interested in my Gear? Check it out below!</Link>
      </div>
      <PhotographyContent imageFilenames={imageFilenames}/>
      <Gear/>
    </div>
  )
}

export default Photography;
