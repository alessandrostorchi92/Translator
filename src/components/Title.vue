<script>

export default {

}

</script>

<template>

    <div>

        <div class="title-container">
            <h1>TRANSLATEAPP</h1>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins.scss' as *;

.title-container {
    @include flex-center;
    min-width: 390px;
    width: 100%;
    height: 6rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    background: rgb(2, 0, 36);
    background: linear-gradient(127deg, rgba(2, 0, 36, 1) 0%, rgba(20, 9, 121, 1) 16%, rgba(0, 146, 255, 1) 79%);
}


h1 {
    font-size: 2rem;
    color: whitesmoke;
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>
