import { defineConfig } from 'vitepress'

const logo = '/logo.svg'

export default defineConfig({
  lang: 'zh-CN',
  titleTemplate: false,
  cleanUrls: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: false,
    // anchor: {
    //   slugify(str) {
    //     return encodeURIComponent(str)
    //   },
    // },
  },
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg',
        href: logo,
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'gu',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Home',
      },
    ],
  ],
  themeConfig: {
    logo,
    search: null,
    aside: false,
    outline: false, // 貌似有bug
    // nav: [
    //   {
    //     text: 'about',
    //     link: '/about',
    //   },
    // ],

    footer: true,
    lastUpdated: {
      text: '最后更新 ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com' },
    // ],

  },
})
