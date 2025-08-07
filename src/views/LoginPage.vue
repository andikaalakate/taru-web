<template>
  <section
    class="relative flex min-h-screen bg-[#FFFFF0] text-[#1C1F29] overflow-hidden"
    :style="{
      background: `
        radial-gradient(
          ellipse at 60% 15%,
          rgba(35, 124, 146, 0.6) 45%,
          transparent 75%
        ),
        radial-gradient(
          ellipse at 20% 80%,
          rgba(35, 124, 146, 0.3) 40%,
          transparent 70%
        ),
        linear-gradient(140deg, #13495a 0%, #294e60 100%)
      `,
    }"
  >
    <!-- Dynamic Glowing Effects -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <!-- Floating glow orbs -->
      <div class="glow-orb glow-orb-1"></div>
      <div class="glow-orb glow-orb-2"></div>
      <div class="glow-orb glow-orb-3"></div>
      <div class="glow-orb glow-orb-4"></div>
      <div class="glow-orb glow-orb-5"></div>

      <!-- Pulsing ambient lights -->
      <div class="ambient-glow ambient-glow-1"></div>
      <div class="ambient-glow ambient-glow-2"></div>
    </div>

    <!-- Left side - Main content area -->
    <div
      class="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-20 py-16 sm:py-20"
    >
      <!-- Main content goes here -->
      <div class="text-center text-white z-2">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Welcome Back</h1>
        <p class="text-xl md:text-2xl opacity-90 max-w-2xl">
          Continue your journey with us. Sign in to access your personalized
          experience.
        </p>
      </div>
    </div>

    <!-- Right side - Login form sidebar -->
    <div
      class="hidden md:flex w-96 lg:w-[480px] bg-white flex-col justify-center p-8 lg:p-12 z-2"
    >
      <div class="w-full max-w-md mx-auto">
        <h2 class="text-3xl font-bold text-center text-[#2F3A4B] mb-6">
          Login to Your Account
        </h2>

        <div class="flex flex-col gap-5">
          <div>
            <label
              class="block text-sm font-medium text-[#13495A] mb-1"
              for="email"
            >
              Email
            </label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#237C92] transition-all duration-200"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-[#13495A] mb-1"
              for="password"
            >
              Password
            </label>
            <input
              v-model="form.password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#237C92] transition-all duration-200"
            />
          </div>

          <button
            @click="handleLogin"
            class="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#237C92]"
          >
            Login
          </button>
        </div>

        <p class="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <RouterLink
            to="/register"
            class="text-[#237C92] font-medium hover:underline transition-all duration-200"
          >
            Sign up
          </RouterLink>
        </p>
      </div>
    </div>

    <!-- Mobile login (centered overlay) -->
    <div
      class="md:hidden absolute inset-0 flex items-center justify-center px-4 py-16 z-5"
    >
      <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md z-5">
        <h2 class="text-3xl font-bold text-center text-[#2F3A4B] mb-6">
          Login to Your Account
        </h2>

        <div class="flex flex-col gap-5">
          <div>
            <label
              class="block text-sm font-medium text-[#13495A] mb-1"
              for="email-mobile"
            >
              Email
            </label>
            <input
              v-model="form.email"
              id="email-mobile"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#237C92]"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-[#13495A] mb-1"
              for="password-mobile"
            >
              Password
            </label>
            <input
              v-model="form.password"
              id="password-mobile"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#237C92]"
            />
          </div>

          <button
            @click="handleLogin"
            class="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#237C92]"
          >
            Login
          </button>
        </div>

        <p class="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <RouterLink
            to="/register"
            class="text-[#237C92] font-medium hover:underline"
          >
            Sign up
          </RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({ email: "", password: "" });

function handleLogin() {
  // Dummy handler—replace with real auth call
  if (form.email && form.password) {
    alert(`Logged in as ${form.email}`);
    router.push("/");
  }
}
</script>

<style scoped>
/* Base glow settings */
.glow-orb,
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.9;
  z-index: 10;
}

/* Original orbs, ~20% smaller */

/* Orb 1 */
.glow-orb-1 {
  width: 112px;
  height: 112px;
  background: radial-gradient(
    circle,
    rgba(45, 255, 200, 0.8) 0%,
    rgba(45, 255, 200, 0.4) 60%,
    transparent 100%
  );
  top: 15%;
  left: 5%;
  animation: float1 15s infinite;
}

/* Orb 2 */
.glow-orb-2 {
  width: 96px;
  height: 96px;
  background: radial-gradient(
    circle,
    rgba(100, 255, 150, 0.75) 0%,
    rgba(100, 255, 150, 0.35) 60%,
    transparent 100%
  );
  top: 55%;
  right: 80%;
  animation: float2 20s infinite;
}

/* Orb 3 */
.glow-orb-3 {
  width: 128px;
  height: 128px;
  background: radial-gradient(
    circle,
    rgba(80, 255, 220, 0.7) 0%,
    rgba(80, 255, 220, 0.3) 60%,
    transparent 100%
  );
  bottom: 75%;
  right: 45%;
  animation: float3 25s infinite;
}

/* Orb 4 */
.glow-orb-4 {
  width: 80px;
  height: 80px;
  background: radial-gradient(
    circle,
    rgba(0, 255, 200, 0.85) 0%,
    rgba(0, 255, 200, 0.4) 60%,
    transparent 100%
  );
  top: 35%;
  right: 25%;
  animation: float4 14s infinite;
}

/* Orb 5 */
.glow-orb-5 {
  width: 112px;
  height: 112px;
  background: radial-gradient(
    circle,
    rgba(120, 255, 180, 0.8) 0%,
    rgba(120, 255, 180, 0.35) 60%,
    transparent 100%
  );
  bottom: 20%;
  left: 70%;
  animation: float5 18s infinite;
}

/* NEW ORBS */

/* Orb 6 */
.glow-orb-6 {
  width: 109px;
  height: 109px;
  background: radial-gradient(
    circle,
    rgba(98, 255, 209, 0.75) 0%,
    rgba(98, 255, 209, 0.32) 60%,
    transparent 100%
  );
  top: 18%;
  left: 43%;
  animation: float1 17s infinite;
}

/* Orb 7 */
.glow-orb-7 {
  width: 98px;
  height: 98px;
  background: radial-gradient(
    circle,
    rgba(105, 255, 162, 0.65) 0%,
    rgba(105, 255, 162, 0.47) 60%,
    transparent 100%
  );
  top: 79%;
  right: 46%;
  animation: float2 19s infinite;
}

/* Orb 8 */
.glow-orb-8 {
  width: 79px;
  height: 79px;
  background: radial-gradient(
    circle,
    rgba(70, 255, 158, 0.68) 0%,
    rgba(70, 255, 158, 0.4) 60%,
    transparent 100%
  );
  top: 17%;
  left: 43%;
  animation: float3 22s infinite;
}

/* Ambient glows (unchanged palette) */

.ambient-glow-1 {
  width: 280px;
  height: 280px;
  filter: blur(80px);
  background: radial-gradient(
    circle,
    rgba(45, 255, 200, 0.5) 0%,
    rgba(45, 255, 200, 0.6) 50%,
    transparent 100%
  );
  top: 25%;
  left: 33%;
  animation: pulse1 8s infinite;
}

.ambient-glow-2 {
  width: 200px;
  height: 200px;
  filter: blur(80px);
  background: radial-gradient(
    circle,
    rgba(100, 255, 150, 0.45) 0%,
    rgba(100, 255, 150, 0.55) 50%,
    transparent 100%
  );
  bottom: 33%;
  right: 25%;
  animation: pulse2 12s infinite;
}

/* Animations */
@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translate(200px, -50px) scale(1.2);
    opacity: 0.8;
  }
  66% {
    transform: translate(100px, 100px) scale(0.9);
    opacity: 0.4;
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-150px, -80px) scale(1.1);
    opacity: 0.7;
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  40% {
    transform: translate(-100px, -120px) scale(1.3);
    opacity: 0.6;
  }
  80% {
    transform: translate(80px, 60px) scale(0.8);
    opacity: 0.4;
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translate(120px, -40px) scale(1.4);
    opacity: 0.9;
  }
  75% {
    transform: translate(-80px, 100px) scale(0.7);
    opacity: 0.5;
  }
}

@keyframes float5 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  60% {
    transform: translate(-120px, 80px) scale(1.2);
    opacity: 0.7;
  }
}

@keyframes pulse1 {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

@keyframes pulse2 {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
</style>
