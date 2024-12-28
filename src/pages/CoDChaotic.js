import React from 'react'
import SpreadA from '../assets/cod/SpreadA.png'
import SpreadC from '../assets/cod/SpreadC.png'
import PairA from '../assets/cod/PairA.png'
import PairC from '../assets/cod/PairC.png'
import TowerNS from '../assets/cod/TowerNS.png'
import TowerEW from '../assets/cod/TowerES.png'
import Spreads from '../assets/cod/AlliancewideSpread.png'
import WildCharge from '../assets/cod/WildCharge.png'
import Bramble1 from '../assets/cod/BramblePlacement.mp4'
import Bramble2 from '../assets/cod/BrambleTether.mp4'
const CoDChaotic = () => {
  return (
    <div>
        <div className="h-full flex flex-col items-center justify-center mx-3 p-3">
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
                        src={SpreadA}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        [Alliance A] Spread Position
                        </h5>
                        <p class="mb-3 px-1">
                        Stand near max melee range to avoid being hit by two lasers
                        </p>
                    </div>
                </div>
                <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={PairA}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        [Alliance A] Pair Position
                        </h5>
                        <p class="mb-3 px-1">
                        M1,M2 and R1 will bait the hit by standing inward of the Adds
                        </p>
                    </div>
                </div>
                <div class="min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={TowerNS}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        North and South Towers
                        </h5>
                        <p class="mb-3 px-1">
                        Group 1 DPS will soak with Tank. Group 2 DPS will soak with Healers
                        </p>
                    </div>
                </div>
                <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={SpreadC}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        [Alliance C] Spread Position
                        </h5>
                        <p class="mb-3 px-1">
                         Stand near max melee range to avoid being hit by two lasers
                        </p>
                    </div>
                </div>
                <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={PairC}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        [Alliance C] Pair Position
                        </h5>
                        <p class="mb-3 px-1">
                        M1,M2 and R1 will bait the hit by standing inward of the Adds
                        </p>
                    </div>
                </div>
                <div class="min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={TowerEW}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        East and West Towers
                        </h5>
                        <p class="mb-3 px-1">
                        Group 1 DPS will soak with Tank. Group 2 DPS will soak with Healers
                        </p>
                    </div>
                </div>
            </div>
            <p className="font-heading text-3xl my-4">General Configuration</p>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 max-w-screen-lg ">
                <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={Spreads}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        [Alliance A] Spread Position
                        </h5>
                        <p class="mb-3 px-1">
                        Stand near max melee range to avoid being hit by two lasers
                        </p>
                    </div>
                </div>
                <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
                    <img
                        class="rounded-t-lg"
                        src={WildCharge}
                        alt="m1 clock position"
                    />
                    <div class="sm:p-3">
                        <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                        Wild Charge Position
                        </h5>
                        <p class="mb-3 px-1">
                         Tank must stand in front of their group
                        </p>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary-950 to-primary-400 ">
            <p className="font-heading text-3xl">Bramble Phase</p>
            <div className='flex flex-col m-2 gap-2 sm:flex-row'>
                <video className="h-full w-full" src={Bramble1} controls/>
                <video className="h-full w-full" src={Bramble2} controls/>
            </div>
            </div>
        </div>
      </div>
  )
}

export default CoDChaotic