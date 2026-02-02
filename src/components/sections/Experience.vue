<script setup>
import { experience } from '@/data/experience.js'
</script>

<template>
  <section id="experience" class="py-32 layout-container">
    <h2 class="text-3xl font-bold text-off-white mb-16">Experience</h2>
    
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
