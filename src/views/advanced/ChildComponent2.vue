<template>
  <div>
    <button type="button" @click="sendFromChild">자식 컴포넌트 버튼2</button>
    <button type="button" @click="changeData">자식 데이터 변경</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg: '자식 컴포넌트로 부터 보내는 메시지'
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendFromChild(){
      this.$emit('send-message', this.msg);
    },
    changeData(){
      this.msg = '데이터 변경됨';
    }
  }
}
</script>