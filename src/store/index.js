import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
		{ 
			imageUrl: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/Paris%20small-xxlarge.jpg',
			id: 'sdjbs23423',
			title: 'Meetup Laz Vegas',
			date: '2017-08-12'
		},
      	{ 
      		imageUrl: 'http://multi.speedybooker.com/en-GB/pool/paris-1.jpg',
      		id: 'sdhj273656',
      		title: 'Efiffel Tower',
      		date: '2017-08-01' 
      	}
      ],
      user: {
      	id: 'sdas242342',
      	registeredMeetups: ['asdasdas112']
      }
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups (state) {
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters) {
			return getters.loadedMeetups.slice(0, 5)
		},
		loadedMeetup (state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId	
				})
			}
		}
	}
})