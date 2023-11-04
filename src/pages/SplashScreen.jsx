import React, { useEffect, useState } from "react";
import "../components/some.css";

const SplashScreen = () => {
  const [bounceCount, setBounceCount] = useState(0);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  // Function to handle ball bouncing and expansion
  const handleBallAnimation = () => {
    // if (bounceCount < 3) {
    setBounceCount(bounceCount + 1);
    // } else {
    // Add a class to the ball to trigger expansion
    const ball = document.querySelector(".ball");
    ball.classList.add("expanding");

    // Change the background color of .ball-bouncing
    const ballBouncing = document.querySelector(".ball-bouncing");
    ballBouncing.style.backgroundColor = "#CC5F70";
  };
  //   };

  useEffect(() => {
    const bounceCountTimeout = setTimeout(() => {
      setBounceCount(4);
    }, 3500);

    const nameDisplayTimeout = setTimeout(() => {
      setNameDisplay(true);
    //   setAnimationEnd(true);
    }, 4500);

    return () => {
      clearTimeout(bounceCountTimeout);
      clearTimeout(nameDisplayTimeout);
    };
  }, []);

  return (
    // <main className={animationEnd ? "animationNowFades" : "card-container"}>
    <main className={"card-container"}>
      <div
        className={`card ${bounceCount < 3 ? "ball-bouncing" : "ball-growing"}`}
      >
        <div className={bounceCount < 3 ? "ball" : "ballgrow"}></div>
        <p
          style={{
            position: "absolute",
            fontFamily: "Sacramento, cursive",
            fontSize: "24px",
            color: "#fff",
            opacity: nameDisplay ? 1 : 0,
          }}
        >
          Christabel Akpoguma
        </p>
      </div>
    </main>
  );
};

export default SplashScreen;
