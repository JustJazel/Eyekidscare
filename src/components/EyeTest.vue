<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
</script>

<template>
  <section class="flex justify-content-center p-6">
    
    <div class="surface-card p-5 border-round shadow-2 w-full max-w-30rem">

      <!-- TITLE -->
      <h2 class="text-2xl font-bold mb-3">
        Book an Eye Test
      </h2>

      <p class="text-600 mb-4">
        Schedule an appointment with our optometrists for a comprehensive eye check.
      </p>

      <!-- FORM -->
      <div class="flex flex-column gap-3">

        <span class="p-float-label">
          <InputText id="name" class="w-full" />
          <label for="name">Full Name</label>
        </span>

        <span class="p-float-label">
          <InputText id="email" class="w-full" />
          <label for="email">Email</label>
        </span>

        <span class="p-float-label">
          <Calendar id="date" class="w-full" showIcon />
          <label for="date">Preferred Date</label>
        </span>

        <span class="p-float-label">
          <Textarea id="notes" rows="3" class="w-full" />
          <label for="notes">Additional Notes</label>
        </span>

        <Button 
          label="Submit Booking"
          icon="pi pi-check"
          severity="primary"
          class="w-full mt-2"
        />

      </div>

    </div>

  </section>
</template>