<template>
    <section class="intro_section flex">
        <div class="intro_description">
            <div>
                <p class="experience">17 years of experience</p>
                <h1 class="intro_title">We Are a <br/>Web Design <span class="title_agency">Agency</span></h1>
            </div>
            <p class="intro_subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separeted they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separeted they live in Bookmarksgrove</p>
            <AppButton class="intro_button" :buttonText="'READ MORE'"/>
            <div class="intro_socials flex">
                <ul class="flex social_links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
                <div class="flex page_selector">
                    <div class="page_one">01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppButton from './AppButton.vue'
    export default {
        components: {
            AppButton
        },
        
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.intro_section {
    align-items: center;
    height: 900px;
    background-image: url('../src/assets/img/Group-36-2x.png');
    background-size: 60%;
    background-position: right center;
    background-repeat: no-repeat;
}

.intro_description {
    width: 50%;
    padding: 50px 50px 50px 100px;

    .intro_title{
        margin: 10px 0px;
        font-size: 64px;

        .title_agency{
            color: $brand-color;
        }
    }

    .experience{
        letter-spacing: 5px;
        color: $brand-color;
        font-weight: bold;
    }

    .intro_subtitle {
        line-height: 25px;
    }

    p, button{
        margin: 50px 0px;
    }

    .intro_button {
        background: rgb(131,131,131);
        background: linear-gradient(90deg, rgba(131,131,131,1) 0%, rgba(61,61,61,1) 47%, rgba(0,0,0,1) 79%); 

        &:hover{
            cursor: pointer;
            background: rgb(139,224,100);
            background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%); 
        }
    }

    .intro_socials {
        justify-content: space-between;
        align-items: center;

        .social_links{
            gap: 15px;
            font-weight: bold;
        }
    }

    .page_selector {
        border-radius: 999px;
        background: rgb(131,131,131);
        background: linear-gradient(90deg, rgba(131,131,131,1) 0%, rgba(61,61,61,1) 47%, rgb(44, 44, 44) 79%); 
        color: white;

        & > * {
            border-radius: inherit;
            padding: 10px 15px;
            margin: 2px;
            font-weight: bold;
        }

        .page_one{
            background: rgb(139,224,100);
            background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%); 
        }
    }
}
</style>