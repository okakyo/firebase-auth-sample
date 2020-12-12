<template>
  <div class="container">
    <div class="card">
      <h3>メール</h3>
      <p class="my-input">
        <input v-model="email" placeholder="" type="email" />
      </p>
      <h3>パスワード</h3>
      <p class="my-input">
        <input v-model="password" type="password" />
      </p>
      <nuxt-link to="/signup">アカウントの登録はこちら</nuxt-link>
      <p class="my-input">
        <button @click="loginBasic()">ログイン</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { SigninWithBasic } from '@/utils/firebase/auth'
import { injectGlobalState } from '~/utils/states/user'
export default defineComponent({
  name: 'SigninPage',
  setup(props: any, { root }) {
    // local States
    const email = ref('')
    const password = ref('')

    // Global States
    const userState = injectGlobalState()
    console.log(userState.user)
    // method Functions
    const loginBasic = async () => {
      try {
        const emailValue = email.value
        const passwordValue = password.value
        const currentUser = await SigninWithBasic(emailValue, passwordValue)
        if (currentUser.status === 'ok') {
          const userInfo = currentUser.data.user
          console.log(userState)
          userState.setUserState({
            id: userInfo ? userInfo.uid : '',
            email: userInfo && userInfo.email ? userInfo.email : '',
            name: userInfo && userInfo.displayName ? userInfo.displayName : '',
            thumbnail: userInfo && userInfo.photoURL ? userInfo.photoURL : '',
          })
        } else {
          alert('ログイン失敗')
        }
        root.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
    return {
      email,
      password,
      loginBasic,
    }
  },
})
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.my-input {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
