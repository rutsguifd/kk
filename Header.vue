<template>
  <header>
    <h1>The<strong>Anime</strong>Database</h1>
    <form class="search-box" @submit.prevent="submit">
      <input
        class="search-field"
        type="text"
        placeholder="Search for an anime..."
        v-model="search_query"
      />
      <!-- <button @click="submit">search</button> -->
    </form>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      search_query: "",
    };
  },
  computed: mapGetters(["animelist"]),
  methods: {
    ...mapActions(["fetchAnimeList"]),
    ...mapMutations(['searchQuery']),
    submit() {
      this.searchQuery(this.search_query)
      this.$router.push("/");
      this.fetchAnimeList(this.search_query);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 50px;
  padding-bottom: 50px;
  h1 {
    color: #dddddd;
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    strong {
      color: #b4a5a5;
    }
    &:hover {
      color: #eed6c4;
    }
  }
  .search-box {
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    .search-field {
      appearance: none;
      background: none;
      border: none;
      outline: none;
      background-color: #fef5ed;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      display: block;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      border-radius: 8px;
      color: #313131;
      font-size: 20px;
      transition: 0.4s;
      &::placeholder {
        color: #150e56;
      }
      &:focus,
      &:valid {
        &::placeholder {
          color: #313131;
        }
        background-color: #eed6c4;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>