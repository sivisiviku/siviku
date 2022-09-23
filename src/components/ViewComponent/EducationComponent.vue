<template>
  <div>
    <h3 class="text-2xl mb-2">Education</h3>
    <hr>
    <div v-for="education in educations" :key="education.schoolName">
        <strong>{{education.schoolName}},</strong> {{education.schoolAdress}}
        <br>
        <strong>{{education.degree}}</strong> in {{education.major}} - {{education.dateGraduated}}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            educations: [
                { 
                    schoolName: 'Columbia University',
                    schoolAdress: 'New York',
                    major: 'Computer Information Systems',
                    degree: 'Bachelor of Science', 
                    dateGraduated: '2014',
                },
            ]
        }
    }
}
</script>

<style>

</style>