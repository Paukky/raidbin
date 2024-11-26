import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { RainingCats } from '../assets/m1s/Rainingcats'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import M1clock from "../assets/m1s/m1clock.png";
import M1pair from "../assets/m1s/m1buddy.png";
import M1dps from "../assets/m1s/m1dpsbait.png";
import M1bait from "../assets/m1s/m1samebait.png";
import M1nail from "../assets/m1s/m1nail.png";
import M1Tether from "../assets/m1s/m1srainingcat.png";

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
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  // Determine the current slice of items to display
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = RainingCats.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(RainingCats.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % RainingCats.length;
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
              <img class="rounded-t-lg" src={M1clock} alt="m1 clock position" />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 bg-">
                  True North
                </h5>
                <p class="mb-3 px-1">
                  True North positions for all of the <br />
                  cleave/clone mechanics
                </p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img class="rounded-t-lg" src={M1pair} alt="m1 pair position" />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Supports CCW
                </h5>
                <p class="mb-3 px-1">
                  Supports rotate Counter-Clockwise from their Clock spots to
                  meet with their DPS
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M1dps}
                alt="Dps bait at Intercardinal First"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  DPS First
                </h5>
                <p class=" mb-3 px-1">
                  DPS will be the first role group to bait the cleaves
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M1bait}
                alt="Intercardinal Same Bait"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  Intercardinal Same Bait
                </h5>
                <p class=" mb-3 px-1">
                  Cleave will be baited at Intercardinal position for both role
                  group
                </p>
              </div>
            </div>

            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M1nail}
                alt="Splintering Nails Position"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  THD
                </h5>
                <p class=" mb-3 px-1">
                  From Left to Right during Mouser 2's Splintering Nail. You'll
                  fan out in this order: Tank -> Healer -> DPS{" "}
                </p>
              </div>
            </div>
            <div class=" border border-gray-200 rounded-lg shadow my-2 bg-text-900">
              <img
                class="rounded-t-lg"
                src={M1Tether}
                alt="Raining Cat Tether Order"
              />
              <div class="sm:p-3">
                <h5 class="m-2 text-xl sm:text-2xl font-bold tracking-tight ">
                  MTTT
                </h5>
                <p class=" mb-3 px-1">
                  During Raining Cats, the tethers will be taken in this order:{" "}
                  <br />{" "}
                  <b>Melee -> Tanks -> Tanks(Invuln) -> Tanks (Invuln)</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center  w-full  sm:px-5 bg-gradient-to-b from-primary-950 to-primary-400">
          <p className="font-heading text-4xl">Raining Cat</p>
          <p className="text-xl">
            <i>Starvy MTTT</i>
          </p>
          <PaginatedItems itemsPerPage={1} />
        </div>
      </div>
    </div>
  );
};

export default M1S;
