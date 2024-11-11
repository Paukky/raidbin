import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import M4position from "../m4spos.png";
import M4witchhunt from "../m4witchunt2.png";
import M4transition from "../m4transition.png";
import M4midnight from "../m4midnight.png";
import M4ee2 from "../m4-ee2pair.png";
import M4Sunrise1 from "../m4sunrise.png";
import M4Sunrise2 from "../m4sunrise2.png";
import M4Sunrise3 from "../m4sunrise3.png";
import M4Sunrise4 from "../m4sunrise4.png";

const SunriseSabbath = [
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

function Images({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className=" max-w-screen-md h-auto mb-4">
            {item.image && (
              <img
                src={item.image}
                alt={`Item ${index + 1}`}
                className="w-full h-auto"
              />
            )}
          </div>
        ))}
    </>
  );
}

function Description({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="p-2 text-center">
            <p className="text-2xl font-heading underline">{item.header}</p>
            <p className="text-left mx-2">{item.description}</p>{" "}
            {/* This will render \n as new lines */}
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  // Determine the current slice of items to display
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = SunriseSabbath.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(SunriseSabbath.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % SunriseSabbath.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Pagination at the top */}
      <ReactPaginate
        className="flex list-none space-x-4 my-4 "
        breakLabel="..."
        nextLabel={<BsArrowRightSquareFill size={28} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<BsArrowLeftSquareFill size={28} />}
        renderOnZeroPageCount={null}
        activeClassName="bg-text-950 rounded "
        pageClassName="bg-secondary-500 px-3 py-1 rounded"
        previousClassName="text-accent-100 px-3 py-1 rounded"
        nextClassName="text-accent-100 px-3 py-1 rounded"
        disabledClassName="opacity-50 cursor-not-allowed"
      />

      {/* Container to hold image and description side by side */}
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="mx-4">
          <Images currentItems={currentItems} />
        </div>
        <div className=" h-auto flex items-center justify-center py-4 my-10 md:mx-10 md:p-5 bg-secondary-900 rounded-lg shadow-lg mx-4">
          <Description currentItems={currentItems} />
        </div>
      </div>
    </div>
  );
}

const M1S = () => {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-center mx-3 p-3 ">
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
                src={M4position}
                alt="m1 clock position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                  Witch Hunt Position
                </h5>
                <p class="mb-3 px-1">
                  These are the position when baiting the divekick
                </p>
              </div>
            </div>
            <div class=" min-h-fit bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M4witchhunt}
                alt="m1 clock position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                  Witch Hunt Position #2
                </h5>
                <p class="mb-3 px-1">
                  <b className="text-text-healer">Healers</b> and{" "}
                  <b className="text-text-dps">Melee</b> swap their clock
                  position to avoid tight AOE-Overlaps Supports will be baiting
                  first dive then DPS.
                  <br /> <b>[THMR] or [HTRM]</b>
                </p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M4transition}
                alt="m1 pair position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Position for Transition
                </h5>
                <p class="mb-3 px-1">
                  Since Wicked Thunder will always face south here. Your
                  position will be flipped vertically to give melee positional
                  access
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M4ee2}
                alt="Dps bait at Intercardinal First"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Shaba EE2
                </h5>
                <p class=" mb-3 px-1">
                  Players will position in this configuration based on how many times they get. Regardless if they're short or long
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M4midnight}
                alt="Midnight Sabbath Position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Midnight Sabbath Position
                </h5>
                <p class=" mb-3 px-1">
                  These are the position for Midnight Sabbath. Pairs rotate
                  counter-clockwise from their intercardinal position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center  w-full  sm:px-5 bg-gradient-to-b from-primary-950 to-primary-400">
          <p className="font-heading text-4xl">Sunrise Sabbath</p>
          <p className="text-xl">
            <i>Uptime Sunrise</i>
          </p>
          <PaginatedItems itemsPerPage={1} />
        </div>
      </div>
    </div>
  );
};

export default M1S;
