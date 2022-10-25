import item from './navItem.vue'
import draggable from 'vuedraggable'

export default Vue => {
  Vue.component('nav-item', item)
  Vue.component('draggable', draggable)
}
