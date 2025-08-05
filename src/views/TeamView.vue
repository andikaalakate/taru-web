<template>
  <Navbar />
  <ButtonNav />
  <!-- Hero Section -->
  <section
    class="relative flex flex-col justify-center items-center min-h-[60vh] px-4 sm:px-6 md:px-20 py-16 sm:py-20"
    style="
      background: 
        radial-gradient(ellipse at 60% 15%, rgba(35, 124, 146, 0.6) 40%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(35, 124, 146, 0.3) 30%, transparent 60%),
        linear-gradient(135deg, #13495A 70%, #294e60 100%);
    "
  >
    <div class="w-full max-w-screen-xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl mb-6">
        Meet Our Team
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-[#e3f6ff] drop-shadow-lg leading-relaxed">
        The creative minds behind your digital solutions
      </p>
    </div>
    
    <div
      class="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] rotate-180 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="block w-[calc(100%+1.3px)] h-20 sm:h-32"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="fill-[#FFFFF0]"></path>
      </svg>
    </div>
  </section>

  <!-- Team Members Section -->
  <section class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-16">
    <div class="max-w-screen-lg mx-auto">
      <h2 class="text-4xl mb-12 text-center font-bold text-[#2f3a4b]">Our Team</h2>
      
      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7] text-center"
        >
          <div class="aspect-square overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#13495a] mb-2">{{ member.name }}</h3>
            <p class="text-[#237c92] font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-700 text-sm leading-relaxed mb-4">{{ member.description }}</p>
            
            <!-- Skills -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="px-3 py-1 bg-[#e3f6ff] text-[#13495a] text-xs font-medium rounded-full"
              >
                {{ skill }}
              </span>
            </div>
            
            <!-- Social Links -->
            <div class="flex justify-center gap-3">
              <a
                v-for="social in member.socials"
                :key="social.platform"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-[#13495a] hover:bg-[#237c92] transition-colors duration-200 flex items-center justify-center"
                :aria-label="`${member.name} on ${social.platform}`"
              >
                <box-icon
                  :name="social.icon"
                  :type="social.type || 'regular'"
                  color="#ffffff"
                  size="20px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Company Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div
          v-for="stat in companyStats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-3xl md:text-4xl font-extrabold text-[#13495a] mb-2">{{ stat.value }}</div>
          <div class="text-gray-700 font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Join Our Team CTA -->
      <div class="text-center">
        <div class="rounded-2xl bg-white shadow-md border border-[#f3f3f7] p-8 md:p-12">
          <h3 class="text-3xl font-bold text-[#2f3a4b] mb-4">Join Our Team</h3>
          <p class="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented individuals who share our passion for creating amazing digital experiences. 
            Ready to make an impact?
          </p>
          <a
            href="mailto:contact@yourdomain.com"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#13495a] to-[#237c92] hover:from-[#0f3d4a] hover:to-[#1e6b7d] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <box-icon name="mail-send" color="#ffffff" size="20px" />
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@components/Navbar.vue'
import ButtonNav from '@components/ButtonNav.vue'
import Footer from '@components/Footer.vue'

// Team members data
const teamMembers = ref([
  {
    id: 1,
    name: 'Person 1',
    role: 'Lead Developer',
    description: 'Full-stack developer with 5+ years of experience in modern web technologies and a passion for clean, efficient code.',
    image: '/assets/unavailable.webp',
    skills: ['Vue.js', 'Node.js', 'Python', 'AWS'],
    socials: [
      { platform: 'GitHub', icon: 'github', type: 'logo', url: 'https://github.com' },
      { platform: 'LinkedIn', icon: 'linkedin-square', type: 'logo', url: 'https://linkedin.com' },
      { platform: 'Twitter', icon: 'twitter', type: 'logo', url: 'https://twitter.com' }
    ]
  },
  {
    id: 2,
    name: 'Person 2',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on user-centered design with expertise in creating intuitive and beautiful digital experiences.',
    image: '/assets/unavailable.webp',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    socials: [
      { platform: 'Dribbble', icon: 'dribbble', type: 'logo', url: 'https://dribbble.com' },
      { platform: 'Behance', icon: 'behance', type: 'logo', url: 'https://behance.com' },
      { platform: 'Instagram', icon: 'instagram', type: 'logo', url: 'https://instagram.com' }
    ]
  },
  {
    id: 3,
    name: 'Person 3',
    role: 'Project Manager',
    description: 'Experienced project manager who ensures smooth delivery of projects while maintaining high quality standards.',
    image: '/assets/unavailable.webp',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Client Relations'],
    socials: [
      { platform: 'LinkedIn', icon: 'linkedin-square', type: 'logo', url: 'https://linkedin.com' },
      { platform: 'Email', icon: 'mail-send', url: 'mailto:mike@example.com' }
    ]
  },
  {
    id: 4,
    name: 'Person 4',
    role: 'Frontend Developer',
    description: 'Frontend specialist with a keen eye for detail and expertise in creating responsive, accessible web applications.',
    image: '/assets/unavailable.webp',
    skills: ['React', 'Vue.js', 'TypeScript', 'CSS/SASS'],
    socials: [
      { platform: 'GitHub', icon: 'github', type: 'logo', url: 'https://github.com' },
      { platform: 'CodePen', icon: 'codepen', type: 'logo', url: 'https://codepen.com' },
      { platform: 'LinkedIn', icon: 'linkedin-square', type: 'logo', url: 'https://linkedin.com' }
    ]
  },
  {
    id: 5,
    name: 'Person 5',
    role: 'Backend Developer',
    description: 'Backend engineer specializing in scalable server architectures and database optimization for high-performance applications.',
    image: '/assets/unavailable.webp',
    skills: ['Node.js', 'MongoDB', 'PostgreSQL', 'Docker'],
    socials: [
      { platform: 'GitHub', icon: 'github', type: 'logo', url: 'https://github.com' },
      { platform: 'LinkedIn', icon: 'linkedin-square', type: 'logo', url: 'https://linkedin.com' },
      { platform: 'Stack Overflow', icon: 'code-alt', type: 'logo', url: 'https://stackoverflow.com' }
    ]
  },
  {
    id: 6,
    name: 'Person 6',
    role: 'Digital Marketing Specialist',
    description: 'Marketing expert who helps brands grow their online presence through strategic digital marketing campaigns.',
    image: '/assets/unavailable.webp',
    skills: ['SEO', 'Social Media', 'Content Strategy', 'Analytics'],
    socials: [
      { platform: 'LinkedIn', icon: 'linkedin-square', type: 'logo', url: 'https://linkedin.com' },
      { platform: 'Twitter', icon: 'twitter', type: 'logo', url: 'https://twitter.com' },
      { platform: 'Instagram', icon: 'instagram', type: 'logo', url: 'https://instagram.com' }
    ]
  }
])

// Company statistics
const companyStats = ref([
  { label: 'Team Members', value: '12+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '80+' },
  { label: 'Years Experience', value: '5+' }
])
</script>