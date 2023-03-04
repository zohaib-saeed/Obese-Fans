import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const SlideInFromBottom = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const refContainer = useRef(null);

  useEffect(() => {
    if (refContainer.current && inView) {
      refContainer.current.classList.add("slide-in-from-bottom");
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        refContainer.current = el;
        ref(el);
      }}
      className={classNames("opacity-0 transition-all duration-500", {
        "opacity-100 ": inView,
      })}
    >
      {children}
    </div>
  );
};

export default SlideInFromBottom;
