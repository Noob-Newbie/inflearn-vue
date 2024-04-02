<template>
  <div>
    <input type="text" v-model="valueModel">
    <input type="number" v-model="valueModel2">
  </div>
</template>

<script>
  export default {
    components: {},
    data(){
      return {
        valueModel : 'ㅁㄴㅇㄹ',
        valueModel2 : 13
      }
    },
    setup(){
    },
    created() {
    },
    mounted() {
      console.log(this.valueModel)
      console.log(this.valueModel2)
    },
    unmounted() {
    },
    methods: {}

  }
</script>