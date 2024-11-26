import M4Sunrise1 from "./m4sunrise.png";
import M4Sunrise2 from "./m4sunrise2.png";
import M4Sunrise3 from "./m4sunrise3.png";
import M4Sunrise4 from "./m4sunrise4.png";

export const SunriseSabbath = [
    {
      image: M4Sunrise1,
      description: (
        <>
          1. <b className="text-text-tank">Tanks</b> and{" "}
          <b className="text-text-healer">Healers</b> will start North-West
          counter-clockwise when finding their respective cannon to bait.
          <br />
          2. <b className="text-text-dps">DPS</b> will start North-East clockwise
          when finding their respective cannon to bait.
          <br />
        </>
      ),
      header: "Start of Cast",
    },
    {
      image: M4Sunrise2,
      description: (
        <>
          1. Long debuffs(38s) will soak the first set of towers
          <br />
          2. Short debuffs(23s) will bait the cannon while standing on the
          coloured dot and following the priority system mentioned in Slide 1
          <br />
        </>
      ),
      header: "First set of Ion Cannons",
    },
    {
      image: M4Sunrise3,
      description: (
        <>
          1. Wicked Thunder hit either center columns or side columns
          <br />
        </>
      ),
      header: "Watch out!",
    },
    {
      image: M4Sunrise4,
      description: (
        <>
          1. Long debuffs(38s) will now soak the cannons
          <br />
          2. Short debuffs(23s) will soak the towers now
          <br />
        </>
      ),
      header: "Second set of Ion Cannons",
    },
  ];