<template>
  <div>
    <PageTitle :title="title"/>
    <ChildComponent :isOk="isOk" :commentId="[1,2,3]" :author="author"/>
  </div>
</template>
<script>
import PageTitle from "@/views/advanced/PageTitle.vue";
import ChildComponent from "@/views/advanced/ChildComponent.vue";
export default {
  components: {PageTitle,ChildComponent},
  data(){
    return{
      title: "부모 화면 전송 페이지 타이틀",
      isOk : true,
      author: {
        name:'홍길동',
        company :'회사이름'
      }
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {

  }
}
</script>