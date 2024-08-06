import Marquee from "./magicui/marquee";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Logos() {
  return (
    <section id="companies">
      <div className="py-14 my-10">
        <div className="container mx-auto max-w-7xl px-4 ">
          <h3 className="text-center text-sm font-semibold text-[#e0e1dd]">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-28 brightness-0 grayscale-[50%] invert"
                  alt={logo}
                />
              ))}
            </Marquee>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
