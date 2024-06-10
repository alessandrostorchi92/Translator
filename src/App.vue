<script>

import SectionTextInput from "./components/SectionTextInput.vue";
import Title from "./components/Title.vue";
import SectionTranslateInput from "./components/SectionTranslateInput.vue"

export default {

    components: {
        Title,
        SectionTextInput,
        SectionTranslateInput
    },

}

</script>

<template>

    <section>
        <Title></Title>
    </section>

    <section>
        <SectionTextInput></SectionTextInput>
    </section>

    <section>
        <SectionTranslateInput></SectionTranslateInput>
    </section>

</template>

<style lang="scss">
@use "./styles/partials/_variables.scss" as *;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    overflow: hidden;
    background-color: $bg-main-color;
}

section {
    width: 100%;
}

@media screen and (min-width: 460px) {}
</style>
