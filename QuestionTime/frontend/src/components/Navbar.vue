<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light my-navbar">
    <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                QuestionTime
            </router-link>
        <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li>
                    <router-link class="btn btn-danger nav-item me-2" :to="{ name: 'question-editor' }">
                        Ask a question!
                    </router-link>
                </li>
                <li>
                    <a class="btn btn-outline-success nav-item" href="/accounts/logout/">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
    .my-navbar {
        border-bottom: 1px solid #ddd;
    }
    .navbar-brand{
        font-weight: bold;
        font-size: 150%;
    }

    .navbar-brand:hover{
        color: #dc3545 !important;
    }
</style>