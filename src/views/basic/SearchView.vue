<template>
  <div>
    <select  v-model="selectedCity">
      <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{city.name}}</option>
    </select>
    <input type="text" v-model="userName" @keyup.enter="searchUserList"/>
    <button type="button" @click="searchUserList()">조회</button>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>직업</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(person, i) in userList">
          <td>{{person.name}}</td>
          <td>{{person.age}}</td>
          <td>{{person.job}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cityList : [
        {name : '서울', code : '01'},
        {name : '부산', code : '02'},
        {name : '제주', code : '03'}
      ],
      selectedCity : '',
      userName : '',
      userList : []
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    searchUserList(){
      //const selectedCity = this.selectedCity;
      //const UserName = this.userName;
      const params = {
        selectedCity : this.selectedCity,
        userName : this.userName
      }

      console.log(params);

      this.userList = this.getUserList();
    },
    getUserList(params){
      console.log(params);
      let list = [
        {name : '테스트', age:40, job:'테스트'},
        {name : '자바', age:40, job:'커피'},
        {name : '파이썬', age:40, job:'크롤링'},
        {name : '고', age:40, job:'가자'}
      ];

      return list;
    }
  }
}
</script>