<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },

    data() {
      return {
        headerLinks: [
          {
              text: 'HOME',
              url: '#'
          },
          {
              text: 'ABOUT',
              url: '#'
          },
          {
              text: 'SERVICES',
              url: '#'
          },
          {
              text: 'SHOWCASE',
              url: '#'
          },
          {
              text: 'BLOG',
              url: '#'
          },
          {
              text: 'CONTACT',
              url: '#'
          },
        ],
        footerLinks: [
          {
              text: 'Careers',
              url: '#'
          },
          {
              text: 'News',
              url: '#'
          },
          {
              text: 'Term of use',
              url: '#'
          },
          {
              text: 'Privacy Projects',
              url: '#'
          },
          {
              text: 'About',
              url: '#'
          },
          {
              text: 'Contact',
              url: '#'
          },
        ],
      }
    }
  }


</script>

<template>
  <AppHeader :navLinks="headerLinks"/>
  <AppMain/>
  <AppFooter :companyLinks="footerLinks"/>
</template>

<style lang="scss">
@use './style/general'
</style>
