<template>
  <!-- <div class="home">
    <h1>C'est la time du Questionne!</h1>
    <button @click="getQuestions">LOAD QUESTIONS</button>
    <div v-if="this.questions">
      {{ this.questions }}
    </div>
  </div> -->
  <div class="home mt-4">
    <div class="container mt-">
      <div v-for="question in questions" :key="question.uuid">
        <div class="card shadow p-2 mb-4 bg-body rounded">
          <div class="card-body">
            <p class="mb-0">
              Posted by 
              <span class="question-author">
                {{ question.author }}
              </span>
            </p>
            <h2>
              <router-link
                :to="{ name: 'question', params: { slug: question.slug}}"
                class="question-link">
                  {{ question.content }}
              </router-link>
            </h2>
            <div class="mb-0">
              Answers: {{ question.answers_count}}
            </div>
        </div>
      </div>
    </div>
      <div class="my-4">
        <p  v-show="loadingQuestion">...Loading...</p>
        <button v-show="next" @click="getQuestions" class="btn btn-sm btn-outline-success">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
  name: 'Home',
  data() {
    return {
      questions: [],
      next: null,
      loadingQuestion: false
    }
  },
  methods: {
    async getQuestions() {
      let endpoint = "/api/v1/questions/";
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingQuestion = true;
      try {
        const response = await axios.get(endpoint);
        this.questions.push(...response.data.results);
        this.loadingQuestion = false;
        if (response.data.next) {
          this.next = response.data.next;
        } else {
          this.next = null;
        }
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
  },
  created() {
    document.title = "QuestionTime";
    this.getQuestions();
  }
}
</script>
<style>
.question-link {
  color: unset;
  font-weight: 400;
  text-decoration: none !important;
}
.question-link:hover {
  color: #4d565f;
}

.question-author {
  font-weight: bold;
  color: #dc3545;
}

</style>
