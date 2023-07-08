import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import checkInterface from "../../utils/checkInterface";
import { locales } from "../../constants/Locales";

type FullClickEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.TouchEvent<HTMLDivElement>;

const Locales = () => {
  const settings = {
    actualPosition: 0,
    position: 0,
    init: 0,
    start: false,
  };

  const wrapperSlide = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const slide = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  function handlePointerLeave() {
    settings.start = false;
    settings.position = settings.actualPosition;
  }

  function getClientX(event: FullClickEvent) {
    let x = 0;
    if (checkInterface<React.MouseEvent>(event, "clientX")) {
      x = event.clientX;
    } else if (checkInterface<React.TouchEvent>(event, "touches")) {
      x = event.touches[0].clientX;
    }

    return x;
  }

  function handlePointerMove(event: FullClickEvent) {
    if (settings.start) {
      const wrapper = slide.current;
      const calculate = settings.position + settings.init - getClientX(event);
      const max = (wrapperSlide.current.clientWidth - wrapper.clientWidth) * -1;

      if (calculate >= 0 && calculate <= max) {
        settings.actualPosition = calculate;
        wrapper.style.transform = `translate3d(${
          settings.actualPosition * -1.1
        }px, 0px, 0px)`;
      }
    }
  }

  function handlePointerDown(event: FullClickEvent) {
    if (checkInterface<React.MouseEvent>(event, "clientX")) {
      event.preventDefault();
    }
    settings.init = getClientX(event);
    settings.start = true;
  }

  return (
    <>
      <div className="overflow-hidden" ref={wrapperSlide}>
        <div
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          onMouseUp={handlePointerLeave}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchCancel={handlePointerLeave}
          onTouchEnd={handlePointerLeave}
          ref={slide}
          data-position={0}
          className="flex gap-8 overflow-hidden flex-nowrap  cursor-move w-max"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          {locales.map((locale) => {
            return (
              <div className="max-w-[244px] w-[30vw]" key={locale.title}>
                <LazyLoadImage
                  alt={locale.title}
                  height="100%"
                  width="100%"
                  src={locale.src}
                  className="rounded-5 max-h-60 max-w-60"
                />
                <h2 className="text-24 font-medium tracking-wide mt-5 text-center">
                  {locale.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Locales);
