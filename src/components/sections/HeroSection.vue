<template>
  <section
    class="relative flex flex-col justify-center items-center min-h-[85vh] sm:min-h-[85vh] md:min-h-screen lg:min-h-screen px-4 sm:px-6 md:px-20 py-12 sm:py-16"
    style="
      background: radial-gradient(
          ellipse at 60% 15%,
          rgba(35, 124, 146, 0.6) 40%,
          transparent 70%
        ),
        radial-gradient(
          ellipse at 20% 80%,
          rgba(35, 124, 146, 0.3) 30%,
          transparent 60%
        ),
        linear-gradient(135deg, #13495a 70%, #294e60 100%);
    "
  >
    <!-- Backdrop Image -->
    <div
      class="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0"
    >
      <img
        src="/assets/komputer-ilustrasi.webp"
        alt="Computer Illustration"
        class="w-full max-w-2xl h-auto object-contain"
        loading="lazy"
      />
    </div>

    <!-- Main Content -->
    <div
      class="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 px-2 sm:px-4 md:px-10 py-6 md:py-12"
    >
      <h1
        class="text-5xl -sm:text-5xl -md:text-4xl -lg:text-3xl -xl:text-2xl font-extrabold leading-tight text-white drop-shadow-2xl mb-2 sm:mb-3"
      >
        Your Complaint, Our Expertise
      </h1>
      <p
        class="text-2xl -sm:text-xl -md:text-lg -lg:text-md max-w-3xl text-[#e3f6ff] drop-shadow-lg leading-relaxed"
      >
        Entertainment, Tech, Graphic Design, Devices Troubleshooting, and
        Website Developing
      </p>
    </div>

    <a
      href="#blog"
      aria-label="Scroll to blog section"
      class="absolute -bottom-10 sm:-bottom-10 md:bottom-0 lg:bottom-0 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hover:scale-110 transition-transform duration-300"
    >
      <box-icon
        name="chevron-down"
        color="#2f3a4b"
        class="drop-shadow-lg"
        size="48px"
      />
    </a>

    <!-- <div
      class="absolute bottom-0 left-0 w-full h-20 bg-[#FFFFF0] pointer-events-none"
    ></div> -->

    <div
      class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="block w-[calc(100%+1.3px)] h-20 sm:h-32"
      >
        <path
          d="M1200 0L0 0 892.25 114.72 1200 0z"
          class="fill-[#FFFFF0]"
        ></path>
      </svg>
    </div>
  </section>
</template>
