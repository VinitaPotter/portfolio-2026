<script setup>
import { experience } from '@/data/experience.js'
</script>

<template>
  <section id="experience" class="py-16 layout-container">
    <div class="mb-16">
      <div class="flex items-center gap-4 mb-4">
        <span class="text-xs md:text-sm font-medium tracking-[0.2em] text-celadon uppercase">Where I've worked</span>
        <div class="h-px w-32 bg-celadon"></div>
      </div>
      <h2 class="text-3xl font-bold text-off-white mb-8">Experience</h2>
         <p class="text-lg md:text-xl text-soft-gray font-light max-w-3xl leading-relaxed mb-24">
      I started my career in business development, working closely with people, clients, and teams for several years. Through that work, I was gradually exposed to programming, which led to focused self-study and a deliberate transition into software engineering. That background still shapes how I work today, especially in how I approach problem-solving, communication, and long-term thinking when building complex systems.</p>
    
    </div>

 
    <div class="space-y-24">
      <div v-for="(item, index) in experience" :key="index" class="relative group">
        <!-- Visual connector line for timeline effect (subtle) -->
        <div v-if="index !== experience.length - 1" class="absolute left-0 top-16 bottom-0 w-px bg-white/5 -ml-4 hidden lg:block"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-4">
            <h3 class="text-xl font-bold text-off-white">{{ item.role }}</h3>
            <p class="text-celadon font-medium mt-1">{{ item.company }}</p>
            <p class="text-sm text-soft-gray mt-1">{{ item.duration }}</p>
            <p class="text-sm text-soft-gray/60 mt-1">{{ item.location }}</p>
          </div>
          
          <div class="lg:col-span-8">
            <ul class="space-y-4">
              <li v-for="(point, pIndex) in item.description" :key="pIndex" class="flex items-start">
                <span class="mr-3 text-celadon mt-1.5 text-xs">▹</span>
                <span class="text-soft-gray leading-relaxed">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
