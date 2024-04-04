<template>
  <div>
    <div>
    likes : {{likes}}
    </div>
    <div>
    isOk : {{isOk}}
    </div>
    <div>
      authorname : {{author.name}}
    </div>
    <button type="button" @click="childFunc" ref="child">Child</button>
  </div>
</template>
<script>
export default {
  props:{
    likes:{
      type:Number,
      default: 0
    },
    isOk:{
      type : Boolean,
      default: false
    },
    commentId:{
      type : Array
    },
    author:{
      type: Object
    }
  },
  data(){
    return{
      sampleData : ''
    }
  },
  setup(){},
  created() {},
  mounted() {
    console.log(this.commentId)
  },
  unmounted() {},
  methods: {
    childFunc(){
      alert("부모 컴포넌트에서 호출한 이벤트")
    }
  }
}
</script>