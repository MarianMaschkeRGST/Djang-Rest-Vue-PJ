<template>
    <div class="answer-body">
        <p class="text-muted">
            <strong>{{ answer.author}} &#8901; {{answer.created_at }}</strong>
        </p>
        <hr>
        <p class="answer-body-content"> {{ answer.body }}</p>
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
        }
    }
};
</script>