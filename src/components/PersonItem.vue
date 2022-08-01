<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <!-- <v-list-item-title>
          {{ friend.firstName }} {{ friend.lastName }}
        </v-list-item-title> -->

        <v-list-item-title v-text="fullName"></v-list-item-title>

      </v-list-item-content>

      <v-btn icon v-on:click="clicked(index)">
        <v-icon class="edit">
          mdi-pencil
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon
          class="fav"
          v-bind:color="friend.fav ? 'red' : 'grey'"
          v-on:click="like(friend)"
        >
          mdi-heart
        </v-icon>
      </v-btn>
    </v-list-item>

    <!-- eslint-disable-next-line vue/valid-v-for -->
    <v-divider v-if="!last"></v-divider>
  </div>
</template>

<script>

export default {
 props: {
  friend:{
    type: Object,
    required: true
  },
  last: {
    type: Boolean,
    required: false,
    default: false
  }
 },
 methods:{
  like(frnd) {
      console.log(frnd);
      //not right practice to change value of a property emitted from parent component
      //frnd.fav = !frnd.fav;

      //emit even and let parent compoent do the needsful if they want to
      this.$emit('change-fav-friend', frnd);
    }
 },
 computed: {
  fullName(){
    return `${this.friend.firstName} ${this.friend.lastName}`;
  }
 }
}
</script>
