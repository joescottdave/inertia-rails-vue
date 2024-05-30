import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('../Pages/**/*.vue', { eager: true })
    const component =  pages[`../Pages/${name}.vue`]

    if (component == null) {
      throw new Error(
        `Unknown page ${name}. Is it located under Pages with a .vue extension?`,
      )
    }

    return component
  },
  setup({ el, App, props, plugin}) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .mount(el)
  }
})
