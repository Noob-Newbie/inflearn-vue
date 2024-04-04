<template>
  <h1 class="page_title">{{title}}</h1>
</template>
<script>
  export default {
    props : {
      title : {
        type : String,
        default: "페이지 타이틀 입니다."
      }
    }
  }
</script>
<style scoped>
.page_title{
  padding-left: 5px;
  border-left: 3px solid red;
  text-align: left;
}
</style>