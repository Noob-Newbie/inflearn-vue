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

  }
}
</script>