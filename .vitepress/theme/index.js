
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './components/Layout.vue'
import './style/vars.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp: (ctx) => {
    // ctx.app.component('Tags', Tags)
  },

}
