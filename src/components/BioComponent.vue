<template>
  <div>
    <h1 class="text-4xl mb-4">{{firstName}} {{lastName}}</h1>
    <img :src="photo" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Morgan',
            photo: 'https://picsum.photos/200/300',
        }
    }
}
</script>

<style>

</style>