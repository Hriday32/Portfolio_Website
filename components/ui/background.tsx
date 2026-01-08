// "use client";

// const STARS_SHADOW = `
//   5vw 2vh 2px white, 5vw 10vh 1px white, 5vw 18vh 2px white,
//   15vw 5vh 1px white, 15vw 22vh 2px white, 15vw 40vh 1px white,
//   30vw 8vh 2px white, 30vw 25vh 1px white, 30vw 50vh 2px white,
//   45vw 12vh 1px white, 45vw 35vh 2px white, 45vw 65vh 1px white,
//   60vw 5vh 2px white, 60vw 28vh 1px white, 60vw 55vh 2px white,
//   75vw 10vh 1px white, 75vw 38vh 2px white, 75vw 70vh 1px white,
//   90vw 15vh 2px white, 90vw 45vh 1px white, 90vw 80vh 2px white
// `;


// const SHOOTING_STARS = ["20%", "35%", "50%", "65%", "80%"] as const;

type ShootingStarProps = {
  top: string;
  delay: string;
};

export default function Background(): JSX.Element {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] hidden dark:block -z-50">
      <div
        className="absolute w-px h-px bg-white animate-twinkle"
      // style={{ boxShadow: STARS_SHADOW }}
      />
      {/* 
      {SHOOTING_STARS.map((top, i) => (
        <ShootingStar key={top} top={top} delay={`${i}s`} />
      ))} */}
    </div>
  );
}

function ShootingStar({ top, delay }: ShootingStarProps): JSX.Element {
  return (
    <div
      className="absolute top-[100px]  h-[2px] w-[100px]
                 bg-gradient-to-l from-white to-transparent animate-shoot"
      style={{ top, animationDelay: delay }}
    />
  );
}
