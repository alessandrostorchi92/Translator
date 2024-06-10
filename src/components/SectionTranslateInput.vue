<script>

export default {


}

</script>


<template>

    <div class="language-select">

        <select id="options" name="options">

            <option value="Spanish">🇪🇸</option>
            <option value="English">🇬🇧</option>
            <option value="French">🇫🇷</option>
            <option value="German">🇩🇪</option>
            <option value="Portuguese">🇵🇹</option>

        </select>

    </div>

    <div class="position-translate-btn">
        <button type="button" class="btn btn-primary translate-btn">Translate</button>
    </div>

</template>


<style lang="scss" scoped>
@use 'src/styles/partials/mixins.scss' as *;

.language-select {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 2rem;

}

select {

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 2.6rem;
    width: 3.6rem;
    border-radius: 8px;
    font-size: 1.8rem;

}

option {
    text-align: center;
}

.position-translate-btn {
    position: relative;
}

.translate-btn {
    margin-top: 3.5rem;
    @include position-center;
}
</style>