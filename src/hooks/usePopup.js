import { useState, useEffect } from "react";

const usePopup = (delay = 10000) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return [showPopup, setShowPopup];
};

export default usePopup;
