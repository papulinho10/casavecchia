import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location, navType]);

  return null;
}
