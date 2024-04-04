<template>
  <div>
    <input type="text" v-model="name"/>
    <input type="text" v-model="job"/>
    <input type="number" v-model="age"/>
    <button type="button" @click="saveUserInfo">저장</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name : '',
      age : 0,
      job : '',
      userInfo : {
        name : '',
        age : 0,
        job : ''
      }
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    saveUserInfo(){
      if(!this.userInfo.name){
        return alert("사용자 이름을 입력하세요")
      }
      if(!this.userInfo.age){
        return alert("나이를 입력하세요")
      }

      // const params = {
      //   name : this.name,
      //   age : this.age,
      //   job : this.job
      // }

      const r = this.saveData(this.userInfo);
      if(r === 'S'){
        alert("생성");
      }
    },
    saveData(params){
      console.log(params);
      return 'S';
    }
  }
}
</script>