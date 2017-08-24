<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-carousel>
        <v-carousel-item
          v-for="meetup in meetups"
          :src="meetup.imageUrl"
          :key="meetup.id"></v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/Paris%20small-xxlarge.jpg', id: 'sdjbs23423', title: 'Meetup Laz Vegas' },
          { imageUrl: 'http://multi.speedybooker.com/en-GB/pool/paris-1.jpg', id: 'sdhj273656', title: 'Efiffel Tower' }
        ]
      }
    }
  }
</script>