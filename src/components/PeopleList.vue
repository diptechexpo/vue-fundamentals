<template>
    <v-layout row>
      <v-flex grow pa-1>
        <v-card>
          <v-list header>
            <template v-for="(frnd, index) in friends">
              <PersonItem
                v-bind:key="frnd.id"
                :friend="frnd"
                :last="index === friends.length - 1"
                @change-fav-friend="like"
              />
            </template>


          </v-list>
        </v-card>
      </v-flex>
      <v-flex shrink pa-1>
        <v-btn color="success" large :to="{ name: 'AddEditFriend' }">Add Friend</v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
import PersonItem from "./PersonItem";
import axios from "axios";

const friends = [];

export default {
  data() {
    return {
      friends
      // friends: [
      //   {
      //     id: 1,
      //     firstName: "Michelle",
      //     lastName: "Mulroy",
      //     gender: "female",
      //     fav: false
      //   },
      //   {
      //     id: 2,
      //     firstName: "Venkat",
      //     lastName: "Subramanian",
      //     gender: "male",
      //     fav: false
      //   },
      //   {
      //     id: 3,
      //     firstName: "Matt",
      //     lastName: "Forsythe",
      //     gender: "none",
      //     fav: false
      //   },
      //   {
      //     id: 4,
      //     firstName: "Nate",
      //     lastName: "Schutta",
      //     gender: "male",
      //     fav: false
      //   }
      // ]
    };
  },
  methods: {
    clicked(i) {
      console.log(i);
    },
    like(frnd) {
      console.log(frnd);
      frnd.fav = !frnd.fav;

      // axios.patch(`http://localhost:3000/friends/${frnd.id}`, {
      //   fav: frnd.fav
      // })

      axios.put(`http://localhost:3000/friends/${frnd.id}`, frnd);

    }
  },
  components: { PersonItem },
  mounted() {
    axios.get("http://localhost:3000/friends").then(response => {
      this.friends = response.data;
    });
  }
};
</script>

<style></style>
