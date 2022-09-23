<template>
  <div>
    <h3 class="text-2xl mb-2">Languages</h3>
    <hr>
    <div v-for="language in languages" :key="language">
        <strong>{{language}}</strong>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            languages: [
                'Spanish – C2',
                'Chinese – A1',
                'German – A2'
            ]
        }
    }
}
</script>

<style>

</style>