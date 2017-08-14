<template>
  <el-card class="box-link">
    <p><a v-bind:href="link.url">{{link.url}}</a></p>
    <div class="description-link">{{link.description}}</div>
    <el-button type="danger" icon="delete" @click="removeLink(link)"></el-button>
  </el-card>
</template>

<script>
export default {
  name: 'link',
  props: ['link'],
  data () {
    return {
      
    }
  },
  methods: {
    removeLink(link) {
      this.$store.dispatch('DELETELINK', link)
    }
  }
}
</script>

<style lang="scss">
.box-link {
  margin-top: 10px;

  p {
    margin-top: 0;
  }

  .description-link {
    margin-bottom: 10px;
  }
}
</style>
