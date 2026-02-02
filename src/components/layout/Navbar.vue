<script setup>
import { ref, onMounted } from 'vue'
import { scrollToSection } from '@/utils/scrollToSection'

const navLinks = [
  { name: 'Work', id: 'work', number: '01' },
  { name: 'Experience', id: 'experience', number: '02' },
  { name: 'Contact', id: 'contact', number: '03' }
]

const isDark = ref(true)
const isMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.remove('light-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.add('light-theme')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const handleScroll = (id) => {
  scrollToSection(id)
  if (isMenuOpen.value) {
    toggleMenu() // Close menu after click
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.add('light-theme')
  }
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 pointer-events-none">
    <div class="w-full h-full p-6 md:p-12 flex justify-between items-center">
      <!-- Top-left Brand Mark -->
      <div class="pointer-events-auto flex items-center h-10">
         <!-- Aligned with sidebar width (typically 32px/w-8 centered in w-32 sidebar) -->
        <span class="text-celadon font-serif text-2xl font-bold tracking-tight">V.</span>
      </div>

      <!-- Desktop Navigation (Hidden on Tablet/Mobile) -->
      <div class="hidden md:flex pointer-events-auto items-center gap-12">
        <ul class="flex space-x-12">
          <li v-for="link in navLinks" :key="link.name">
            <a
              href="#"
              @click.prevent="handleScroll(link.id)"
              class="group text-sm font-light tracking-widest text-off-white hover:text-celadon transition-colors flex items-center gap-2"
            >
              <span class="text-celadon text-xs font-mono">{{ link.number }}.</span>
              <span class="relative overflow-hidden">
                 {{ link.name }}
                 <span class="absolute bottom-0 left-0 w-full h-[1px] bg-celadon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
              </span>
            </a>
          </li>
        </ul>

        <!-- Desktop Theme Toggle (Far Right) -->
        <button 
          @click="toggleTheme" 
          class="text-soft-gray hover:text-celadon transition-colors focus:outline-none"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="toggleMenu"
        class="md:hidden pointer-events-auto text-off-white hover:text-celadon transition-colors focus:outline-none z-50 h-10 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-charcoal pointer-events-auto z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
      >
        <ul class="flex flex-col items-center space-y-8">
          <li v-for="link in navLinks" :key="link.name">
            <a
              href="#"
              @click.prevent="handleScroll(link.id)"
              class="text-2xl font-light tracking-widest text-off-white hover:text-celadon transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Mobile Theme Toggle -->
        <button 
          @click="toggleTheme" 
          class="mt-8 text-soft-gray hover:text-celadon transition-colors focus:outline-none flex items-center gap-2"
        >
          <span class="text-sm uppercase tracking-widest">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
