<template>
  <div class="frameworks">
    <div class="main">
      <ul>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Frameworks',
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    let params = {
      rootyp: 'Applications',
      typcd: 'frameworks',
      limit: 10,
      skip: 0,
      page: 1
    }
    this.$ajax('/repo', params).then(res => {
      if (res.code === '200') {

      } else {
        this.$message.error(res.message)
      }
    }).catch(res => {
      this.$message.error(res)
    })
  },
  mounted () {

  },
  watch: {

  },
  computed: {

  },
  methods: {

  }
}
</script>
<style lang="css" scoped>
  
</style>