<template>
  <div>
    <div>
      <el-input class="input-add-link" placeholder="Url" v-model="newLink.url"></el-input>
      <el-input class="input-add-link" type="textarea" :rows="2" placeholder="Description" v-model="newLink.description"></el-input>
      <el-button class="input-add-link" type="primary" @click="createNewLink">Add new link</el-button>
    </div>
    <link-item v-for='link in links' :key="link.id" :link='link'></link-item>
    <p class="no-links-msg" v-if="!links.length">No links!</p>
  </div>
</template>

<script>
import LinkItem from './LinkItem.vue';

export default {
  name: 'links-list',
  components: {
    'link-item' : LinkItem
  },
  data() {
    return {
      newLink: {
        url: '',
        description: ''
      }
    }
  },
  computed: {
    links() {
      return this.$store.state.links.reverse()
    }
  },
  created () {
    this.$store.dispatch('GETLINKS')
  },
  methods: {
    createNewLink() {
      this.$store.dispatch('CREATENEWLINK', this.newLink)
      // console.log(that.newLink)
      this.newLink.url = ''
      this.newLink.description = ''
    }
  }
}
</script>

<style lang="scss">
.no-links-msg {
  text-align: center;
}

.input-add-link {
  width: 100%;
  margin-bottom: 5px;
}

</style>
