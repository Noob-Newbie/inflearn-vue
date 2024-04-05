<template>
  <div>
    <PageTitle :title="title"/>
    <ChildComponent :isOk="isOk" :commentId="[1,2,3]" :author="author" ref="child"/>
    <button type="button" @click="callChild">Parent</button>
    <div>
      <h1>{{parentMsg}}</h1>
    </div>

    <div>
      <ChildComponent2 @send-message="sendMessage" ref="child2"/>
      <button type="button" @click="showData">부모버튼</button>
    </div>
  </div>
</template>
<script>
import PageTitle from "@/views/advanced/PageTitle.vue";
import ChildComponent from "@/views/advanced/ChildComponent.vue";
import ChildComponent2 from "@/views/advanced/ChildComponent2.vue";
export default {
  components: {PageTitle,ChildComponent,ChildComponent2},
  data(){
    return{
      title: "부모 화면 전송 페이지 타이틀",
      isOk : true,
      author: {
        name: '홍길동',
        company: '회사이름'
      },
      parentMsg: ''
    }
  },
  setup(){},
  created() {},
  mounted() {},
  unmounted() {},
  computed:{
    msg(){
      return this.$refs.child2.msg;
    }
  },
  methods: {
    callChild() {
      this.$refs.child.$refs.child.click() //버튼 클릭
      this.$refs.child.childFunc();

      this.$refs.child.msg = "부모에서 바꾼 텍스트"; //부모에서 하위 데이터 값 변경
    },
    sendMessage(data){
      alert(data)
      this.parentMsg = data;
    },
    showData(){
      alert(this.msg());
    }
  }
}
</script>