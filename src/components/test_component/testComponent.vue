<template>
  <div @click="handelClick">
    test {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'test'
    }
  },
  methods: {
    handelClick () {
      this.message += Math.floor(Math.random() * 1000)
    }
  }
}
</script>
