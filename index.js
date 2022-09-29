import { createStore } from 'vuex'

export default createStore({
  state: {
    animeInfo: {},
    animeList: {},
    search_query: ''
  },
  mutations: {
    updateAnime(state, anime) {
      state.animeInfo = anime
    },
    updateList(state, list) {
      state.animeList = list
    },
    searchQuery(state, srch) {
      state.search_query = srch
    }
  },
  actions: {
    fetchAnimeInfo(context, id) {
      fetch(`https://api.jikan.moe/v3/anime/` + id)
        .then((response) => response.json())
        .then((data) => {
          context.commit('updateAnime', data)
        });
    },
    fetchAnimeList(context) {
      fetch(`https://api.jikan.moe/v3/search/anime?q=${context.state.search_query ?? ''}`)
        .then((res) => res.json())
        .then((data) => context.commit('updateList', data.results));
    }
  },
  getters: {
    anime(state) {
      return state.animeInfo
    },
    animelist(state) {
      return state.animeList
    }
  }
})
