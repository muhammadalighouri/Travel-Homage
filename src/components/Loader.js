import React, { useEffect, useState } from "react";

import logo from "../assests/Icons/logo.1.png";

import { LinearProgress } from "@mui/material";
import "../scss/loader.scss";
const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          return 0;
        }
        const diff = Math.random() * 80;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="loader">
      <img src={logo} style={{ height: "100px" }} alt="" />
      <div className="progress__wrapper">
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </section>
  );
};
export default Loader;
