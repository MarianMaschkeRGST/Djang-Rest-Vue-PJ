<template>
    <div class="container my-2">
        <h1 class="mb-3">Ask a Question</h1>
        <form @submit.prevent="onSubmit">
            <textarea 
                v-model="questionBody"
                class="form-control" 
                placeholder="What do you want to ask?" 
                rows="4"
            ></textarea>
            <button type="submit" class="btn btn-success mt-3">Publish</button>
        </form>
        <p v-if="error" class="muted mt-2">You made an whoopsie!: {{ error }}</p>
    </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
    name: "QuestionEditor",
    data() {
        return {
            questionBody: null,
            error: null
        }
    },
    methods: {
        async performNetworkRequest() {
            let endpoint = "/api/v1/questions/";
            let method = "POST";
            try {
                const response = await axios({
                    method: method,
                    url: endpoint,
                    data: { content: this.questionBody }
                });
                this.$router.push({ name: 'question', params: { slug: response.data.slug } })
            } catch (error) {
                alert(this.error = error.response.statusText);
            }
        },
        onSubmit() {
            if (!this.questionBody) {
                this.error = "You can't send an empty question!";
            } else if ( this.questionBody.length > 240 ) {
                this.error = "Maximum 240 characters";
            } else {
                this.performNetworkRequest();
            }
        }
    }
}
</script>