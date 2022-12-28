<template>
  <div>
    <v-container>
      <h1>
      Welcome <span v-if="currentUser">{{currentUser.displayName}}</span>
      </h1>
    </v-container>
  </div>
</template>

<script>

export default {

}
</script>
