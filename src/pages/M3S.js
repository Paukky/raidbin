import React from "react";
import M3position from "../assets/m3s/m3sposition.png";
import M3SCCW from "../assets/m3s/m3ssupportccw.png";
import M3SFusefield from "../assets/m3s/m3sfusefield.png";
import M3SNoKB from "../assets/m3s/m3sNoKBI.png";
const M3S = () => {
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
                src={M3position}
                alt="m2 spread position pattern #1"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                  Standard Position
                </h5>
                <p class="mb-3 px-1">Standard clock spot position</p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M3SCCW}
                alt="support counter clockwise"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Support CCW
                </h5>
                <p class="mb-3 px-1">
                  Supports rotate counter-clockwise from their position to meet
                  their DPS
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img class="rounded-t-lg" src={M3SFusefield} alt="FuseField" />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  MMRR
                </h5>
                <p class=" mb-3 px-1">
                  These are the fuse popping order. Starting from North and
                  popping in clockwise order
                </p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M3SNoKB}
                alt="No Knockback Immune"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  NO KBI
                </h5>
                <p class="mb-3 px-1">
                  Don't use Arm's Length or Surecast during knockback tower
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M3S;
