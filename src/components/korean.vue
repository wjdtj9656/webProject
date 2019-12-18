<template>
  <div>
      <div id=title>
<h1>
한식
</h1>
</div>
    <b-table
      striped hover
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      @row-clicked="rowClick"></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
export default {
  name: 'korean',
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: 'created_at',
          label: '작성일'
        },
        {
          key: 'title',
          label: '제목'
        },
        {
          key: 'user_id',
          label: '글쓴이'
        },
        {
          key: 'views',
          label: '조회'
        }
      ],
      items: []
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      const snapshot = await this.$firebase.firestore().collection('board').where('selected_type.korean', '==', true).get()
      snapshot.forEach(v => {
        this.items.push(v.data())
      })
      console.log(this.items)
      this.items.sort((a, b) => b.content_id - a.content_id)
    },
    rowClick (item, index, e) {
      this.$router.push({
        path: `/boards/detail/${item.content_id}`
      })
    },
    writeContent () {
      this.$router.push({
        path: '/boards/create'
      })
    }
  }
}
</script>
<style scoped>
#title {
    margin:1em;
    font-weight: bold
}
</style>
