import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    modalLoading: false,
    matches: [],
    match: []
  },
  getters: {
    showOrHideModalLoading(state) {
      return state.modalLoading
    },
    
    allMatches(state) {
      return state.matches
    }
  },
  mutations: {
    setModalLoading(state, value) {
      state.modalLoading = value
    },

    setAllMatches(state, matches) {
      state.matches = matches
    },

    setMatch(state, match) {
      state.match.push(match);
    }
  },
  actions: {
    getAllMatches(context) {
      return axios.get('http://localhost:3000/matches').then((res) => {
        context.commit('setAllMatches', res.data);
      });
    },

    getMatchData(context, matchId) {
      console.log('store.getMatchData', matchId);
       
      const parameters = {
        params: {
          match_id: matchId,
          _limit: 3
        }
      }
      
      return axios.get('http://localhost:3000/matches_teams', parameters)
        .then((res) => {
          context.commit('setMatch', res.data);
        });
    }
  },
  modules: {}
})
