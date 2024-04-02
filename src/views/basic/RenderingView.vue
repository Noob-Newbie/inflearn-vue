<template>
  <div>
    <h1 v-if="bRender">bRender의 값이 true일 경우, h1 블록이 화면에 보여지게 됩니다.</h1>
    <h1 v-else>bRender의 값이 false일 경우, h1 블록이 화면에 보여지게 됩니다.</h1>
    <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'"></h1>
    <h1 v-else>C</h1>
    <h1 v-show="bRender"> A</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bRender: true,
      type: 'G'
    }
  }
}
</script>