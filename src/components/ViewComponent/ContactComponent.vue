<template>
  <div>
    <h3 class="text-2xl mb-2">Contact</h3>
    <hr>
    <div v-for="(value, key) in contacts" :key="key">
        <strong>{{key}}:</strong> 
        <br>{{value}}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: {
                address: '177 Great Portland Street, London W5W 6PQ',
                phone: '+44 (0)20 7666 8555',
                email: 'christoper.m@gmail.com',
                linkedin: 'linkedin.com/christopher.morgan'
            }
        }
    }
}
</script>

<style>

</style>