<template>
   <button>
    {{ buttonText }}
   </button>
</template>

<script>
    export default {
        props : {
            buttonText: {
                type: String,
                default: 'ciao'
            }
        }
    }
</script>

<style lang="scss" scoped>
button {
    border: none;
    padding: 20px 50px;
    border-radius: 999px;
    color: white;
    box-shadow: 0px 0px 10px rgb(139,224,100);
    background: rgb(139,224,100);
    background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%); 

    &:hover{
        cursor: pointer;
        background: rgb(131,131,131);
        background: linear-gradient(90deg, rgba(131,131,131,1) 0%, rgba(61,61,61,1) 47%, rgba(0,0,0,1) 79%); 
    }
}
</style>