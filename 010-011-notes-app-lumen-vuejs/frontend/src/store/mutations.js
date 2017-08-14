import Vue from 'vue'

export default {
  ALLLINKS(state, data) {
    state.links = data.links
  },

  REMOVELINK(state, data) {
    var index = state.links.indexOf(data.link)
    state.links.splice(index, 1)
  },

  ADDNEWLINK(state, data) {
    state.links.push({
      id: data.newLink.id, 
      url: data.newLink.url, 
      description: data.newLink.description, 
      created_at: data.newLink.created_at, 
      updated_at: data.newLink.updated_at
    })
  }
}