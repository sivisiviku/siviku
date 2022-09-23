<template>
  <div>
    <h3 class="text-2xl mb-2">Certifications</h3>
    <hr>
    <div v-for="certification in certifications" :key="certification">
        <strong>{{certification}}</strong>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            certifications: [
                'PHP Framework (certificate): Zend, Codeigniter, Symfony.',
                'Programming Languages: JavaScript, HTML5, PHP OOP, CSS, SQL, MySQL.'
            ]
        }
    }
}
</script>

<style>

</style>