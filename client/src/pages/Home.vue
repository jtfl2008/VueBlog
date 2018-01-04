<template>
  <div>
    <vHeader></vHeader>
    <div class="page container">
      <router-view/>
      <!-- <Sidebar></Sidebar> -->
    </div>
    <vFooter></vFooter>
  </div>  
</template>
<script>
import vHeader from '@/components/Header.vue'
import vFooter from '@/components/Footer.vue'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    vHeader,
    vFooter
  },
  created () {

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