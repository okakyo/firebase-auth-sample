<template>
  <div>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { provideGlobalState, injectGlobalState } from '@/utils/states/user'
import { auth } from '~/plugins/firebase.config'
export default defineComponent({
  name: 'DefaultLayout',

  setup(props: any, { root }) {
    provideGlobalState()
    const state = injectGlobalState()

    onMounted(() => {
      if (state.user.value.id === '') {
        auth.onAuthStateChanged((user) => {
          if (user) {
            state.setUserState({
              id: user ? user.uid : '',
              email: user && user.email ? user.email : '',
              name: user && user.displayName ? user.displayName : '',
              thumbnail: user && user.photoURL ? user.photoURL : '',
            })
          } else {
            console.log('Not Authenticated User')
            root.$router.push('/signin')
            // TODO : Push to the Login Page;
          }
        })
      }
    })
  },
})
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
