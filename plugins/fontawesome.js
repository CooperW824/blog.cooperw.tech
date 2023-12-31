import { library, config} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink, faCopy, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faLink, faCopy, faArrowUpRightFromSquare);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
