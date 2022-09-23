<template>
  <div>
    <h3 class="text-2xl mb-2">Skills</h3>
    <hr>
    <div class="columns-2">
        <div v-for="skill in skills" :key="skill.name">
            <strong>{{skill.name}}</strong> ({{skill.level}})
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: 'Project management', level: '9/10' },
                { name: 'Strong decision maker', level: '8/10' },
                { name: 'Complex problem solver', level: '9/10' },
                { name: 'Creative design', level: '7/10' },
                { name: 'Innovative', level: '9/10' },
                { name: 'Service-focused', level: '8/10' },
            ]
        }
    }
}
</script>

<style>

</style>