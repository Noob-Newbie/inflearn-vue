<template>
  <div>
    <input type="number" v-model.number="x1">
    <input type="number" v-model.number="x2">
<!--    <button type="button" @click="plusNumber">계</button>-->
    <input type="number" v-model.number="y">
  </div>
</template>
<script>
export default {
  data(){
    return{
      x1 : 0,
      x2 : 0,
      y : 0
    }
  },
  watch : {
    x1(){
      this.y = this.x1 + this.x2
    },
    x2(){
      this.y = this.x1 + this.x2
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    plusNumber(){
      this.y = this.x1 + this.x2
    }
  }
}
</script>