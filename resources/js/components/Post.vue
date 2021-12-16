<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header"> {{ post.title }} </div>
            <div class="card-body">
                {{ post.content }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['post']
}
</script>
<style scoped>
.card{
    margin-bottom: 30px;
}
</style>
