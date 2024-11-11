import React from "react";
import M2spread1 from "../m2sspread1.png";
import M2spread2 from "../m2sspread2.png";
import M2Group from "../m2sgroup.png";
import M2MK from "../m2MK.png";
import M2Beat2 from "../m2sb2.png";
import M2ClockDefam from "../m2sclockdefam.png";
import M2ColourDefam from "../m2scolourdefam.png";
import M2Rotten from "../m2srotten.png";
const M2S = () => {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-center p-3 bg-gradient-to-b from-primary-950 to-primary-400 w-full">
        <div className="text-center">
          <div className="mb-6">
            <p className="font-heading text-4xl md:text-left">
              Pre-Pull Guidelines
            </p>
            <p className="md:text-left text-xl text-accent-100">
              <i>Knowing the fight is half of the battle</i>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4 max-w-screen-lg ">
            <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2spread1}
                alt="m2 spread position pattern #1"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                  Spread Position #1
                </h5>
                <p class="mb-3 px-1">
                  Spread Position when Honey B. used Donut/Dynamo AOE
                </p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2spread2}
                alt="m1 pair position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Spread Position #2
                </h5>
                <p class="mb-3 px-1">
                  Spread Position when center column is safe
                </p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img class="rounded-t-lg" src={M2Group} alt="m1 pair position" />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Support : NW | DPS : SE
                </h5>
                <p class="mb-3 px-1">
                  Spread Position when center column is safe
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2MK}
                alt="Dps bait at Intercardinal First"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  MK | Mario Kart
                </h5>
                <p class=" mb-3 px-1">
                  Party will start at North and rotate clockwise or
                  counter-clockwise depending on where MT is going
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2Beat2}
                alt="Intercardinal Same Bait"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Braindead Beat 2
                </h5>
                <p class=" mb-3 px-1">
                  1x Heart will start at North and 0x Heart will start South.
                  Both parties will rotate clockwise when AOE appears
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2Rotten}
                alt="Raining Cat Tether Order"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Rotten @ 6s
                </h5>
                <p class=" mb-3 px-1">
                  Two players will meet at the center when there are six seconds
                  left on your debuffs
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2ClockDefam}
                alt="Splintering Nails Position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Clock Defam
                </h5>
                <p class=" mb-3 px-1">
                  During Beat 3, these are your defamation position when it's
                  your turn to stand near the wall
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M2ColourDefam}
                alt="Raining Cat Tether Order"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Color Defam
                </h5>
                <p class=" mb-3 px-1">
                  During Beat 3, these are your defamation position when it's
                  your turn to stand near the wall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        //TODO: Add Beat 2 Toolbox/Raidplan
        /* <div>
          <div className="flex flex-col items-center justify-center  w-full  sm:px-5 bg-gradient-to-b from-primary-950 to-primary-400">
                <p className="font-heading text-4xl">Raining Cat</p>
                <p className="text-xl"><i>Starvy MTTT</i></p>
                  <PaginatedItems itemsPerPage={1} /> 
              </div>
          </div>*/
      }
    </div>
  );
};

export default M2S;
