<script>

export default {

    data() {

        return {

            selectedOption: null,

            languageOptions: [
                { value: 'Spanish', label: '🇪🇸' },
                { value: 'English', label: '🇬🇧' },
                { value: 'French', label: '🇫🇷' },
                { value: 'German', label: '🇩🇪' },
                { value: 'Portuguese', label: '🇵🇹' },
            ],

        }

    }

}

</script>


<template>

    <div class="container">

        <div class="input-group py-4">

            <select id="selectLanguages" name="languageOptions" v-model="selectedOption">

                <option selected disabled :value="null">🌎</option>

                <option v-for="languageOption in languageOptions" :key="languageOption.value">
                    {{ languageOption.label }}</option>

            </select>

            <button type="button" class="btn btn-primary translate-btn">Translate</button>

        </div>

    </div>

</template>


<style lang="scss" scoped>
@use 'src/styles/partials/mixins.scss' as *;

.input-group {
    justify-content: center;
}

#selectLanguages,
.translate-btn {
    padding: 0.8rem;
    border: 1px solid #ccc;
    text-transform: uppercase;
}

#selectLanguages {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 2rem;
    width: 5.5rem;
    text-align: center;
}

select option:first-child {
    font-size: 1rem;
}

.translate-btn {
    font-size: 1rem;
    width: 8rem;
    font-weight: bold;
}
</style>