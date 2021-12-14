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
                class="btn btn-sm btn-warning edit-btn me-1">
                Edit
            </router-link>
            <button 
                class="btn btn-sm btn-danger mx-1" 
                @click="showDeleteConfirmationBtn = !showDeleteConfirmationBtn"
                >
                Delete
            </button>
            <button 
                v-show="showDeleteConfirmationBtn" 
                class="btn btn-sm btn-outline-danger" 
                @click="triggerDeleteAnswer"
                >
                Confirm deletion
            </button>
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
    data() {
        return {
            showDeleteConfirmationBtn: false,
        }
    },
    computed: {
        isAnswerAuthor() {
            return this.answer.author === this.requestUser;
        }
    },
    methods: {
        triggerDeleteAnswer() {
            this.$emit("delete-answer", this.answer);
        }
    }
};
</script>