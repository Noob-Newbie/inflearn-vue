<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
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
// import apiMixin from "@/api"
import monitoring from "@/monitoring";
export default {
  mixins: [monitoring],
  data(){
    return{
      productList : []
    }
  },
  setup(){},
  created() {},
  mounted() {
    console.log("컴포넌트 마운트")
  },
  unmounted() {},
  methods: {
    async getProductList(){
      this.productList = await this.$api("https://87677a2a-a1a5-4993-ab41-c90ddf6b0aa4.mock.pstmn.io/productList")
      console.log(this.productList)
    }
  }
}
</script>