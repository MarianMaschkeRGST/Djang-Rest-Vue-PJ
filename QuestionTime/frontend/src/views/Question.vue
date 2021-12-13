<template>
    <div class="container mt-3">
        <div v-if="question">
            <h1>{{ question.content}}</h1>
            <p class="mb-0">
                Posted by:
                <span class="question-author">{{ question.author }}</span>
            </p>
            <p>{{question.created_at}}</p>
        </div>
        <div v-else>
            <h1 class="error text-center">
                404 - Question Not Found
            </h1>
        </div>
        <div v-if="question">
            <AnswerComponent 
                v-for="answer in answers" 
                :key="answer.uuid" 
                :answer="answer"
                />
        </div>
        <div class="my-4">
            <p  v-show="loadingAnswers">...Loading...</p>
            <button v-show="next" @click="getQuestionAnswers" class="btn btn-sm btn-outline-success">
            Load More
            </button>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
import AnswerComponent from "@/components/Answer.vue";
export default {
    name: "Question",
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    components: {
        AnswerComponent
    },
    data(){
        return{
                question: null,
                answers: [],
                next: null,
                loadingAnswers: false,
        }
    },
    methods: {
        setPageTitle(title) {
            document.title = title;
        },
        async getQuestionData() {
            const endpoint = `/api/v1/questions/${this.slug}/`;
            try {
                const response = await axios.get(endpoint);
                this.question = response.data;
                this.setPageTitle (response.data.content);
            } catch (error) {
                console.log(error.response);
                const title = "404 - Not Found!";
                this.setPageTitle(title)
            }
        },
        async getQuestionAnswers() {
            let endpoint = `/api/v1/questions/${this.slug}/answers/`;
            if (this.next) {
                endpoint = this.next;
            }
            this.loadingAnswers = true;
            try {
                const response = await axios.get(endpoint);
                this.answers.push(...response.data.results);
                this.loadingAnswers = false;
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
    created(){
        this.getQuestionData();
        this.getQuestionAnswers();
    }
};
</script>

<style>
.question-author {
  font-weight: bold;
  color: #dc3545;
}
.error {
    color: #dc3545;
}
</style>
