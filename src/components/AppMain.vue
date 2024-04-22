<template>
    <!-- intro section -->
    <section class="intro_section flex">
        <div class="intro_description col-6">
            <div>
                <p class="experience">17 years of experience</p>
                <h1 class="intro_title">We Are a <br/>Web Design <span class="title_agency">Agency</span></h1>
                <AppDivider/>
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

    <!-- benefits section -->
    <section class="benefits">
        <div class="row">
            <div class="col-5">
                <h2 class="benefits_title">We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h2>
                <AppDivider/>
                <AppButton :buttonText="'VIEW ALL'"/>
            </div>
            <div class="row col-7 cards">
                <BenefitCard class="col-6" :icon="'fa-solid fa-gauge-high'" :cardTitle="'Speed Optimization'"/>
                <BenefitCard class="col-6" :icon="'fa-solid fa-cloud'" :cardTitle="'Cloud Solutions'"/>
                <BenefitCard class="col-6" :icon="'fa-solid fa-tablet-screen-button'" :cardTitle="'Website Design'"/>
                <BenefitCard class="col-6" :icon="'fa-solid fa-stopwatch'" :cardTitle="'Online Marketing'"/>
            </div>
        </div>
    </section>

    <!-- mission section -->

    <section class="mission">
        <div class="mission_container">
            <div class="row">
                <div class="col-6">
                    <div class="mission_images">
                        <img class="background_image" :src="'../src/assets/img/busy-architect-PYVKWM4-1024x872.jpg'" alt="">
                        <div class="overlay_gradient"></div>
                        <img class="main_image" :src="'../src/assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg'" alt="">
                    </div> 
                </div>
                <div class="col-6 mission_info">
                    <h2 class="mission_title">learn more about our <span>missions</span></h2>
                    <AppDivider/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut laudantium illum est unde molestias necessitatibus voluptas accusamus ab consequuntur.</p>
                    <AppButton class="mission_button" :buttonText="'READ MORE'"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppButton from './AppButton.vue';
import BenefitCard from './BenefitCard.vue';
import AppDivider from './AppDivider.vue'
    export default {
        components: {
            AppButton,
            BenefitCard,
            AppDivider
        },
        
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
//intro section
.intro_section {
    align-items: center;
    height: 900px;
    background-image: url('../src/assets/img/Group-36-2x.png');
    background-size: 60%;
    background-position: right center;
    background-repeat: no-repeat;
    background-color: #FAFAFA;
    .intro_description {
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
}

//benefits section
.benefits {
    padding: 150px 15px;

    .cards{
        & > *{
            padding: 15px;
        }
    }

    .benefits_title{
        font-size: 50px;
        line-height: 80px;
        padding-right: 100px;

        span{
            color: $brand-color;
        }
    }
}

//mission section
.mission {
    padding: 150px 0px;
    background-color: #F9F9F9;
    .mission_images{
        position: relative;
        width: 500px;
        height: 100%;
        .background_image{
            border-radius: 0px 20px 20px 0px;
            height: 100%;
        }
    
        .main_image{
            position: absolute;
            left: 60px;
            top: 60px;
            border-radius: 20px;
            z-index: 2;
        }
    }
    
    .overlay_gradient{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(139,224,100,0.8) 27%, rgba(0,217,166,0.8) 90%); 
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 0px 20px 20px 0px;
    }
    
    .mission_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    
        .mission_title{
            font-size: 50px;
    
            span{
                color: $brand-color;
            }
        }
    
        .mission_button{
            margin-top: 20px;
        }
    }
}
</style>