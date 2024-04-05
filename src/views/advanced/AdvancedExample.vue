<template>
  <div>
    <PageTitle :title="title"/>
    <ChildComponent :isOk="isOk" :commentId="[1,2,3]" :author="author" ref="child">
      <div></div>
    </ChildComponent>
    <button type="button" @click="callChild">Parent</button>
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
    callChild() {
      this.$refs.child.$refs.child.click() //버튼 클릭
      this.$refs.child.childFunc();

      this.$refs.child.msg = "부모에서 바꾼 텍스트"; //부모에서 하위 데이터 값 변경
    }
  }
}
</script>