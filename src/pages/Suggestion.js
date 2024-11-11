import React from "react";

const Suggestion = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background-300">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfaIhAoGlzpVr5DssxSQTh1iIHnjA-vPy8hkSyk2fUmdceaww/viewform?embedded=true"
          className="w-full h-[80vh] md:h-[90vh] lg:h-[95vh] border-0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Suggestion;
