<template>
  <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{

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