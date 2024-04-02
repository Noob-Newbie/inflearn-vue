<template>
  <div>
    <select v-model="city">
      <option :value="city.v" :key="i" v-for="(city, i) in options" >{{city.t}}</option>
    </select>
    <table>
      <thead>
        <tr>
          <th>품명</th>
          <th>가격</th>
          <th>배송비</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key='i' v-for="({ product_name, price, delivery, category }, i) in productList">
          <td>{{product_name}}</td>
          <td>{{price}}</td>
          <td>{{delivery}}</td>
          <td>{{category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        options:[
          {v:'02', t:'서울'},
          {v:'21', t:'부산'},
          {v:'064', t:'제주'}
        ],
        city:'064',
        productList:[
          {product_name:'기계식키보드', price:25000, delivery:3000, category:'전자제품'},
          {product_name:'마우스', price:9000, delivery:3000, category:'전자제품'}
        ]
      }
    }
  }
</script>