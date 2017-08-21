## vue-notyf

Una vez instalado ponemos este código en el archivo principal:
```javascript
import 'notyf/dist/notyf.min.css'
import VueNotyf from 'vue-notyf'

Vue.use(VueNotyf)
```

Y lo usamos así desde cualquier componente de tu proyecto:
```javascript
this.$notyf.alert("This is an alert!")
this.$notyf.confirm("This is a confirm!")
```