<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from '@/components/layout/Footer.vue'
import Hero from '@/components/sections/Hero.vue'
import Work from '@/components/sections/Work.vue'
import Experience from '@/components/sections/Experience.vue'
import Contact from '@/components/sections/Contact.vue'
</script>

<template>
  <div class="bg-charcoal min-h-screen relative selection:bg-celadon selection:text-charcoal font-sans">
    <div class="relative z-10 text-off-white">
      <Navbar />
      <Sidebar />
      
      <main class="w-full">
        <Hero />
        <Work />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  </div>
</template>
