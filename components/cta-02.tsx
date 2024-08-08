import Particles from "../components/magicui/particles";

export default function Cta02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={80}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          {/* Blurred shape */}
          <div
            className="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs4-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A855F7"></stop>
                  <stop
                    offset="100%"
                    stopColor="#6366F1"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#bs4-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              ></path>
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center gap-8">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                The security first platform
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#e0e1dd] sm:text-4xl">
              Supercharge your security
            </h2>
            <p className="text-lg text-slate-300 mt-4 mb-8">
              Protect your data with the most advanced security features
              available on the market. Our platform is designed to keep your
              data safe and secure.
            </p>
            <div>
              <a
                className="rounded-md bg-[#415a77] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#415a77]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                href="#0"
              >
                Start Building <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
