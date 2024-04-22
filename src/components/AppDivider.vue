<template>
    <div class="flex divider_container">
        <hr class="divider_small">
        <hr class="divider_large">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .divider_container{
        gap: 10px;
    }

    .divider_small,.divider_large{
        border: none;
        border-radius: 999px;
        height: 5px;
        background: rgb(139,224,100);
        background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%); 
        margin: 30px 0px;
    }

    .divider_small {
        width: 10px;
    }

    .divider_large {
        width: 50px;
    }
</style>