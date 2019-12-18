<template>
  <div class="content-detail">
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{ item.content_id }}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{ item.title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            {{ item.user_id }}
          </div>
          <div class="content-detail-content-info-right-created">
            {{ item.created_at }}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        <viewer class="viewer" :value="item.context"/>
      </div>
      <div v-if="isSameId()" class="content-detail-button">
        <b-button variant="primary" @click="updateData(item.id)">수정</b-button>
        <b-button variant="success" @click="del(item.id)">삭제</b-button>
      </div>
<!--       <div class="content-detail-comment">
        <b-form-textarea
      id="textarea"
      v-model="comment"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </div> -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ContentDetail',
  data: () => ({
    item: {}
  }),
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      const snapshot = await this.$firebase.firestore().collection('board').where('content_id', '==', Number(this.$route.params.contentId)).get()
      snapshot.forEach(v => {
        this.item = v.data()
        this.item.id = v.id
      })
      this.viewsUpdate()
    },
    async viewsUpdate () {
      await this.$firebase.firestore().collection('board').doc(this.item.id).update({
        views: this.item.views + 1
      })
    },
    async del (id) {
      await this.$firebase.firestore().collection('board').doc(id).delete()
      alert('삭제되었습니다.')
      this.$router.push('/boards')
    },
    updateData (id) {
      this.$router.push({
        path: `/boards/create/${id}`

      })
    },
    isSameId () {
      // console.log(this.item.user_id)
      // console.log(this.$firebase.auth().currentUser.email)
      // console.log(this.$firebase.auth().currentUser.email === this.item.user_id)
      return (this.$firebase.auth().currentUser.email === this.item.user_id)
    }
  }
}
</script>
<style scoped>
.content-detail{
    margin: auto;
    max-width: 1000px;
    width: 100%;
}
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.viewer{
    margin: auto;
    max-width: 940px;
    width: 100%;
    text-align: left;
}
</style>
