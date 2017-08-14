import Vue from 'vue'
import axios from 'axios'
import { Notification } from 'element-ui';


export default {
  GETLINKS({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('links')
      .then(function (response) {
        commit('ALLLINKS', {
          links: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }, error => console.log(error))
  },

  DELETELINK({commit}, link) {
    return new Promise((resolve, reject) => {
      axios.delete('links/'+link.id)
      .then(function (response) {
        commit('REMOVELINK', {
          link //same link: link
        })

        Notification.success({
          title: 'Success',
          message: response.data.msg
        })
      })
      .catch(function (error) {
        Notification.error({
          title: 'Error'
        })
      });
    }, error => console.log(error))
  },

  CREATENEWLINK({commit}, newLink) {
    return new Promise((resolve, reject) => {
      axios.post('links', {
        url: newLink.url,
        description: newLink.description
      })
      .then(function (response) {
        commit('ADDNEWLINK', {
          newLink: response.data.newLink
        })

        Notification.success({
          title: 'Success',
          message: response.data.msg
        })
      })
      .catch(function (error) {
        // console.log(error.response.data)
        var data = error.response.data
        for(var propName in data) {
          if(data.hasOwnProperty(propName)) {
            var propValue = data[propName][0];
            Notification.error({
              title: 'Error',
              message: propValue
            })
          }
        }
      });
    }, error => console.log(error))
  },
}