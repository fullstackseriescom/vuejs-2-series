<template>
  <div id="app"> 
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <links-list></links-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LinksList from './components/LinksList.vue';

export default {
  name: 'app',
  components: {
    'links-list' : LinksList
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
