import React from "react";
import { assessments } from "../../constants/Ratings";
import { Assessment } from "../../types/Assessments";

const Assessments = () => {
  const [sizeratings, setSizeratings] = React.useState<number | "max">(6);

  function getAssessments(count: number | "max"): Assessment[] {
    const clone_assessments = [...assessments];
    if (typeof count === "string" && count === "max") {
      return clone_assessments;
    } else if (typeof count === "number") {
      return clone_assessments.splice(0, count);
    }

    return [];
  }

  function handleSeeMore() {
    setSizeratings("max");
  }

  function handleSeeLess() {
    setSizeratings(6);
  }

  return (
    <div className="flex flex-wrap items-start gap-8 justify-center relative pb-20">
      {getAssessments(sizeratings).map((assessment, i) => {
        return (
          <div className="max-w-sm p-5 bg-support-1000" key={i}>
            <h2 className="text-support-100 text-20 mb-3 leading-none">
              {assessment.name}
            </h2>
            <p className="text-support-200 italic font-light leading-normal">
              {assessment.assessment}
            </p>
          </div>
        );
      })}
      {sizeratings !== "max" && (
        <button
          className="button absolute left-2/4 -translate-x-[50%] bottom-0"
          onClick={handleSeeMore}
        >
          ver mais
        </button>
      )}
      {sizeratings === "max" && (
        <button
          className="button mx-auto mt-10 fixed bottom-10 left-2/4 transform translate-x-[-50%] z-50"
          onClick={handleSeeLess}
        >
          Ok, já vi o bastante
        </button>
      )}
    </div>
  );
};

export default Assessments;
