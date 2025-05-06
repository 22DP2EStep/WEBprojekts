<template>
    <div class="max-w-xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block mb-1 font-medium">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border rounded p-2"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        </div>
  
        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border rounded p-2"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
  
        <div>
          <label class="block mb-1 font-medium">Message</label>
          <textarea
            v-model="form.message"
            class="w-full border rounded p-2"
            rows="4"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
        </div>
  
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
  
        <p v-if="successMessage" class="text-green-600 mt-4">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    message: '',
  })
  
  const errors = reactive({
    name: '',
    email: '',
    message: '',
  })
  
  const successMessage = ref('')
  
  function validateEmail(email) {
    const regex = /^\S+@\S+\.\S+$/
    return regex.test(email)
  }
  
  function handleSubmit() {
    errors.name = form.name ? '' : 'Name is required.'
    errors.email = validateEmail(form.email) ? '' : 'Valid email is required.'
    errors.message = form.message ? '' : 'Message cannot be empty.'
  
    const hasErrors = Object.values(errors).some((error) => error !== '')
    if (!hasErrors) {
      successMessage.value = 'Your message has been sent!'
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      successMessage.value = ''
    }
  }
  </script>
  
  <style scoped>
  label{
    color: var(--text-color)
  }
  h1{
    color: var(--text-color)
  }
  input, textarea {
    transition: border 0.2s ease;
  }
  </style>
  