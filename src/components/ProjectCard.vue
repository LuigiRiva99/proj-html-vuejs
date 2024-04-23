<template>
    <div class="card_container">
        <img  :src="cardImage" alt="">
        <div class="card_overlay">
            <h3>{{ cardTitle }}</h3>
            <p>{{ cardText }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            cardTitle:{
                type: String,
                default: 'cardTitle'
            },
            cardText:{
                type: String,
                default: 'cardText'
            },
            cardImage: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.card_container{
    margin: 2px 4px;
    position: relative;
    img{
        display: block;
        border-radius: 10px;
    }

    .card_overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(139,224,100,0.8) 27%, rgba(0,217,166,0.8) 90%); 
        z-index: 1;
        border-radius: 10px;

        // display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-end;
        padding: 0px 0px 20px 20px;
        color: white;
        font-size: 20px;
        display: none;
    }

    &:hover{
        .card_overlay{
            display: flex;
        }
        transform: scale(1.1);
        transition: 0.3s ease;
        z-index: 1;
        cursor: pointer;
    }
}
</style>