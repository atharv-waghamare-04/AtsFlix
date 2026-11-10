import { useEffect, useRef, useState } from "react";

const LazySliderSection = ({ children, fallback }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "350px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "0rem",
      }}
    >
      {show ? children : fallback}
    </div>
  );
};

export default LazySliderSection;
