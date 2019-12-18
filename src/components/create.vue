<template>
  <div>
    <div>
      <b-form-group label="메뉴 종류를 선택해주세요. (중복선택 가능)">
        <b-form-checkbox v-model="selectedType.korean" inline>한식</b-form-checkbox>
        <b-form-checkbox v-model="selectedType.chinese" inline>중식</b-form-checkbox>
        <b-form-checkbox v-model="selectedType.japanese" inline>일식</b-form-checkbox>
        <b-form-checkbox v-model="selectedType.western" inline>양식</b-form-checkbox>
        <b-form-checkbox v-model="selectedType.others" inline>기타</b-form-checkbox>
      </b-form-group>
    </div>
    <b-input id="subject" v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
    <!-- <b-form-textarea
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea> -->
    <div class="editor">
        <editor v-model="context" mode="wysiwyg" />
    </div>
    <b-button @click="updateMode ? updateContent() : uploadContent()">저장</b-button>
    <b-button @click="cancle">취소</b-button>
  </div>
</template>

<style scoped>
.editor, #subject{
    margin: auto;
    max-width: 940px;
    width: 100%;
    text-align: left;
}
</style>

<script>
export default {
  name: 'Create',
  data () {
    return {
      selectedType: {
        korean: false,
        chinese: false,
        japanese: false,
        western: false,
        others: false
      },
      subject: '',
      context: '',
      userId: '',
      createdAt: '',
      updateObject: {},
      updateMode: false
    }
  },
  created () {
    this.getUpdateContent()
    this.getid()
    console.log(new Date())
    this.createdAt = this.getTime()
  },
  methods: {
    async getContent_id () {
      let n = 1
      const snapshot = await this.$firebase.firestore().collection('board').orderBy('content_id', 'desc').limit(1).get()
      snapshot.forEach(v => {
        n = v.data().content_id + 1
      })
      return n
    },
    async getUpdateContent () {
      if (this.$route.params.contentId) {
        await this.$firebase.firestore().collection('board').doc(this.$route.params.contentId).get()
          .then(doc => {
            this.updateObject = doc.data()
          })
        // console.log(this.updateObject)
        this.subject = this.updateObject.title
        this.context = this.updateObject.context
        this.updateMode = true
        this.selectedType = this.updateObject.selected_type
      }
    },
    async uploadContent () {
      await this.$firebase.firestore().collection('board').doc().set({
        content_id: await this.getContent_id(),
        user_id: this.userId,
        selected_type: this.selectedType,
        title: this.subject,
        context: this.context,
        created_at: this.createdAt,
        views: 0
      })
      this.$router.push({
        path: '/boards/'
      })
    },
    async updateContent () {
      await this.$firebase.firestore().collection('board').doc(this.$route.params.contentId).update({
        selected_type: this.selectedType,
        title: this.subject,
        context: this.context
      })
      this.$router.push({
        path: '/boards/'
      })
    },
    cancle () {
      this.$router.push({
        path: '/boards/'
      })
    },
    async getid () {
      this.userId = await this.$firebase.auth().currentUser.email
    },
    getTime () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time
      return (dateTime)
    }
  }
}
</script>
