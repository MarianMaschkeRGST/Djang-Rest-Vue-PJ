<template>
    <div class="answer-body">
        <p class="text-muted">
            <strong>{{ answer.author}} &#8901; {{answer.created_at }}</strong>
        </p>
        <hr>
        <p class="answer-body-content"> {{ answer.body }}</p>
        <div v-if="isAnswerAuthor">
            <router-link 
                :to="{ name: 'answer-editor', params: { uuid: answer.uuid } }"
                class="btn btn-sm btn-warning edit-btn">
                Edit
            </router-link>
        </div>
        <hr>
    </div>   
</template>

<script>
export default {
    name: "AnswerComponent",
    props: {
        answer: {
            type: Object,
            required: true
        },
        requestUser: {
            type: String,
            required: true
        }
    },
    computed: {
        isAnswerAuthor() {
            return this.answer.author === this.requestUser;
        }
    }
};
</script>