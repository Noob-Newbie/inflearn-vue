<template>
  <div>
<!--    <button type="button" @click="one(), two()">add1</button>
    <p>count is : {{counter}}</p>
    <select v-model="city" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>-->
    <input type="text" v-model="textValue" @keyup.enter="showValue">
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter : 0,
      city: "",
      textValue: ""
    }
  },
  methods : {
    one(){
      alert('one')
    },
    two(){
      alert('two')
    },
    changeSelect(){
      alert(this.city)
    },
    showValue(){
      alert(this.textValue)
    }
  }
}
</script>