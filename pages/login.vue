<template>
  <div class="container">
    <form class="card">
      <h3>メール</h3>
      <p><input v-model="email" placeholder="" /></p>

      <h3>パスワード</h3>
      <p><input v-model="password" /></p>
      <p>
        <button>ログイン</button>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const loginBasic = () => {}
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
  padding: auto;
}
.card {
  padding: 1rem;
  border: #f3f3f3;
}
</style>
