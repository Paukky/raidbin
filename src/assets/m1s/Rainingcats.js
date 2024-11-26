
import RainingCat1 from "./rainingcat1.png";
import RainingCat2 from "./rainingcat2.png";
import RainingCat3 from "./rainingcat3.png";

export const RainingCats = [
    {
      image: RainingCat1,
      description: (
        <>
          <b className="text-accent-400">Tanks</b> stack together inside the
          hitbox
          <br />
          <b className="text-text-dps">Melee</b> will grab 1st tethers and stand
          on the edge of the hitbox
          <br />
          The rest of the party stack <i>South</i> of the boss at Max Melee Range
        </>
      ),
      header: "Start of Cast",
    },
    {
      image: RainingCat2,
      description: (
        <>
          1. Both <b className="text-accent-400">Tanks</b> moves to grab the
          tether off from <b className="text-text-dps">Melee</b> on their
          respective sides
          <br />
          2. <b className="text-text-dps">Melees</b> moves toward the party stack
          afterward
          <br />
          3. <b className="text-accent-400">Tanks</b> should tuck in closer to
          soak the close bait AOE
        </>
      ),
      header: "First set of slashes went off",
    },
    {
      image: RainingCat3,
      description: (
        <>
          1. Both <b className="text-accent-400">Tanks</b> will use their
          invulnerability skill
        </>
      ),
      header: "Invuln Time",
    },
  ];