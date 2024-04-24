<template>
    <div>
        <div class="card">
            <font-awesome-icon :icon="icon" class="card_icon"/>
            <h3>{{ cardTitle }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ad!</p>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            cardTitle: {
                type: String
            },
            icon: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
.card{
    border-radius: 10px;
    padding: 50px;
    color: #3E3E3E;
    height: 300px;
    box-shadow: 0px 0px 10px #AAAAAA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    &:hover{
        @include gradient-green;
        color: white;
        cursor: pointer;
    }

    & > * {
        padding: 10px 0px;
    }
    .card_icon {
        font-size: 50px;
    }
}
</style>