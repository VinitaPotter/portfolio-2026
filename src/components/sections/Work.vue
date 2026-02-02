<script setup>
import { projects } from '@/data/projects.js'

</script>

<template>
  <section id="work" class="py-32 layout-container">
    <!-- Header -->
    <div class="mb-24">
      <div class="flex items-center gap-4 mb-4">
        <span class="text-xs font-medium tracking-[0.2em] text-celadon uppercase">Some things I’ve built</span>
        <div class="h-px w-32 bg-white/10"></div>
      </div>
      
      <h2 class="text-4xl md:text-6xl font-bold text-off-white mb-8">my work</h2>
      
      <p class="text-lg md:text-xl text-soft-gray font-light max-w-3xl leading-relaxed">
        These are personal projects built out of curiosity and a desire to go deeper into frontend systems. I use them to explore ideas, experiment with patterns, and better understand how complex interfaces behave at scale. Each project focuses on learning, clarity, and thoughtful implementation rather than polish for its own sake.
      </p>
    </div>
    
    <!-- Projects Grid -->
    <div class="space-y-32">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        <!-- Image Side -->
        <div 
          :class="[
            'lg:col-span-7 relative',
            index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
          ]"
        >
          <div class="relative aspect-video w-full overflow-hidden bg-charcoal border border-white/5 group-hover:border-celadon/30 transition-colors duration-500">
             <!-- Image Overlay -->
             <div class="absolute inset-0 bg-celadon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
             
             <!-- Image -->
             <img 
               :src="project.image" 
               :alt="project.name" 
               class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 transform group-hover:scale-105" 
             />
          </div>
        </div>
        
        <!-- Text Side -->
        <div 
          :class="[
            'lg:col-span-5 flex flex-col justify-center',
            index % 2 === 0 ? 'lg:order-2 text-left' : 'lg:order-1 lg:text-right'
          ]"
        >
           <h3 class="text-3xl font-bold text-off-white mb-4 group-hover:text-celadon transition-colors duration-300">
             {{ project.name }}
           </h3>
           
           <p class="text-sm font-light text-off-white mb-2 leading-relaxed opacity-80">
             {{ project.description }}
           </p>

           <p class="text-xs text-celadon/80 font-mono tracking-wide uppercase mb-6">
             {{ project.tech }}
           </p>
           
           <div>
             <a 
               :href="project.link" 
               target="_blank" 
               class="inline-flex items-center text-xs font-semibold tracking-widest text-soft-gray hover:text-celadon transition-colors uppercase"
             >
               Visit Website
               <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
             </a>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
