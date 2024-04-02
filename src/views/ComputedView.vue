<template>
  <div>
    <input type="text" v-model="lNm">
    <input type="text" v-model="fNm">
    <h1>hello, {{fullName}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      fNm : '재석',
      lNm : '유'
    }
  },
  computed: {
    fullName(){
      return this.fNm + this.lNm;
    }
  },
  methods: {
    getFullName (){
      return this.fNm + this.lNm;
    }
  }
}
</script>