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

    <!-- projects section -->
    <section class="projects">
        <div class="projects_container">
            <div class="projects_main">
                <div class="row">
                    <div class="col-6">
                        <AppDivider/>
                        <h2 class="projects_title">Our recent <span>web designs</span> & some examples of past <span>projects</span> </h2>
                        <AppDivider/>
                    </div>
                    <div class="col-6 projects_description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae iure eos aut odit quia cum porro in ex temporibus.</p>
                    </div>
                </div>
            </div>
            <div class="projects_images">
                <div class="row images_container">
                    <div v-for="project in projectFiles" class="col-3">
                        <ProjectCard :cardTitle="project.title" :cardImage="`../src/assets/img/${project.imgPath}`"/>
                    </div>
                    <div class="demos">
                        <div class="browse">
                            <p>
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                Browse Demos
                            </p>
                        </div>
                        <div class="buy">
                            <p>
                                <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                                Buy Now!
                            </p>
                        </div>
                        <div class="export">
                            <p>
                                <font-awesome-icon icon="fa-solid fa-file-export" />
                                Export Section
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects_button">
                <AppButton :buttonText="'READ MORE'"/>
            </div>
        </div>
    </section>

    <!-- client section -->
    <section class="client">
        <div class="client_container">
            <div class="client_content">
                <div><font-awesome-icon class="quote_icon" icon="fa-solid fa-quote-left" /></div>
                <div><p class="client_quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat quisquam similique, distinctio accusantium fuga molestias tempore rerum, laborum in cumque illo explicabo nulla neque perferendis cum fugit aspernatur quas.</p></div>
                <div class="client_image">
                    <img :src="'../src/assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg'" alt="">
                </div>
                <div class="client_info">
                    <h4>LISSA DURBIN</h4>
                    <p>Client</p>
                </div>
            </div>
        </div>
    </section>

    <!-- blog section -->
    <section class="blog">
        <div class="blog_container">
            <h2 class="blog_title">Latest News & Our <span>Blog</span></h2>
            <AppDivider class="blog_divider"/>
            <div class="blog_cards">
                <div class="row">
                    <div class="col-4" v-for="news in newsList">
                        <div class="card">
                            <img :src="`../src/assets/img/${news.imgPath}`" alt="">
                            <div class="card_description">
                                <p>{{ news.date }} by {{ news.author }}</p>
                                <h3><font-awesome-icon class="dot" icon="fa-solid fa-circle" />{{news.title}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppButton class="blog_button" :buttonText="'VIEW ALL POST'"/>
        </div>
    </section>

    <!-- sponsor section -->
    <section class="sponsor">
        <div class="sponsor_container">
            <div class="cards_container">
                <div class="row">
                    <div class="col-6">
                        <div class="sponsor_card project">
                            <p class="card_subtitle">Are You Ready?</p>
                            <h3 class="card_title">Star a New Project</h3>
                            <div class="submit_text">
                                <input type="text" class="text_input">
                                <button class="submit_btn">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="sponsor_card start">
                            <p class="card_subtitle">What Are You Waiting for?</p>
                            <h3 class="card_title">Let's Talk About Work</h3>
                            <AppButton class="start_button" :buttonText="'START NOW'"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sponsor_clients">
                <div class="row">
                    <div class="company col-2" v-for="sponsor in sponsorList"> 
                        <img :src="`../src/assets/img/${sponsor.imgPath}`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- fixed buttons -->
    <div class="fixed_buttons">
        <a href="#">
            <div class="arrow_button">
                <font-awesome-icon icon="fa-solid fa-arrow-up" />
            </div>
        </a>
        <a href="#">
            <div class="chat_message">
                
                <font-awesome-icon :icon="['far', 'comment']" class="message_icon" />
            </div>
        </a>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import BenefitCard from './BenefitCard.vue';
import AppDivider from './AppDivider.vue';
import ProjectCard from './ProjectCard.vue';
    export default {
        components: {
            AppButton,
            BenefitCard,
            AppDivider,
            ProjectCard
        },
        
        data() {
            return {
                //array project cards
                projectFiles: [
                    {
                        title: 'Beautiful flowers',
                        imgPath: 'ina-soulis-227104-unsplash-1024x1024.jpg'
                    },
                    {
                        title: 'A Famous Ferris Wheel',
                        imgPath: 'sunisa-misa-531163-unsplash-1024x1024.jpg'
                    },
                    {
                        title: 'Yellow Shoes',
                        imgPath: '355H-1024x1024.jpg'
                    },
                    {
                        title: 'Office Work',
                        imgPath: 'photo-1448932252197-d19750584e56-1024x1024.jpg'
                    },
                    {
                        title: 'Business Competition',
                        imgPath: 'business-competition-PB366D8-1024x1024.jpg'
                    },
                    {
                        title: 'Cozy Sofa',
                        imgPath: 'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg'
                    },
                    {
                        title: 'Hot Air Balloons',
                        imgPath: 'aa9a4539-PQGJ7HU-1024x1024.jpg'
                    },
                    {
                        title: 'Blue Lime',
                        imgPath: 'cody-davis-253928-unsplash-1024x1024.jpg'
                    },
                ],

                newsList: [
                    {
                        date: 'May 24 2018',
                        author: 'Alex',
                        imgPath: 'serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',
                        title: 'Marketing Ideas'
                    },
                    {
                        date: 'June 13 2018',
                        author: 'Alex',
                        imgPath: 'Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',
                        title: 'Rest During Working Hours'
                    },
                    {
                        date: 'July 22 2018',
                        author: 'Alex',
                        imgPath: 'simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',
                        title: 'Develop Your Starup Idea'
                    },
                ],

                sponsorList: [
                    {
                        imgPath: 'client-1-2x.png',
                    },
                    {
                        imgPath: 'client-9-2x.png',
                    },
                    {
                        imgPath: 'client-7-2x.png',
                    },
                    {
                        imgPath: 'client-3-2x.png',
                    },
                    {
                        imgPath: 'client-4-2x.png',
                    },
                    {
                        imgPath: 'client-5-2x.png',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;
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
            font-size: 70px;
    
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
            // background: rgb(131,131,131);
            // background: linear-gradient(90deg, rgba(131,131,131,1) 0%, rgba(61,61,61,1) 47%, rgba(0,0,0,1) 79%); 
            @include button-black;
    
            &:hover{
                cursor: pointer;
                // background: rgb(139,224,100);
                // background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%); 
                @include button-green
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
            @include gradient-black;
            color: white;
    
            & > * {
                border-radius: inherit;
                padding: 10px 15px;
                margin: 2px;
                font-weight: bold;
            }
    
            .page_one{
                @include gradient-green; 
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
        width: 800px;
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
        padding: 0px 100px;
    
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

//projects section
.projects{
    padding: 200px 0px;
    .projects_main{
        margin: 0px 20px;
        .projects_title{
            font-size: 50px;
    
            span {
                color: $brand-color;
            }
        }

        .projects_description{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    .images_container{
        row-gap: 0px;
        position: relative;
        padding: 0px 20px;
        .demos{
            position: absolute;
            right: 0;
            top: 30px;
            display: flex;
            flex-direction: column;
            align-items: end;
            z-index: 999;
            .browse, .buy, .export {
                background-color: rgba( rgb(97, 97, 97),0.5);
                width: fit-content;
                padding: 10px;
                border-radius: 10px 0px 0px 10px;
                margin: 5px 0px;
                color: white;

                &:hover{
                    background-color: rgba( black,1);
                    cursor: pointer;
                }
            }
        }
    }
    
    .projects_button{
        display: flex;
        justify-content: center;
        margin: 100px 0px
    }

}

//client section
.client{
    padding: 200px 0px;
    background-image: url('../src/assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba( #424242, 0.8);
        // background: linear-gradient(90deg, rgba(131,131,131,0.9) 0%, rgba(61,61,61,0.9) 47%, rgba(0,0,0,0.9) 79%); 
    }
    .client_container{
        position: relative;
        z-index: 1; 
        .client_content{
            margin: 0 auto;
            max-width: 900px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            .quote_icon{
                font-size: 50px;
                color: $brand-color;
            }

            .client_quote{
                font-size: 30px;
                font-style: italic;
                line-height: 50px;
            }
            & img{
                margin-top: 70px;
                object-fit: cover;
                border-radius: 50%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 150px;
                aspect-ratio: 1/1;
                box-shadow: 0px 0px 5px white;
            }

            .client_info{
                margin-top: 20px;
                h4{
                    font-size: 20px;
                    color: $brand-color;
                }
            }
        }
    }
}

//blog section
.blog{
    padding: 100px 0px;
    background-color: #F9F9F9;
    .blog_container{
        width: 100%;
        text-align: center;
        .blog_title{
            font-size: 50px;
    
            span{
                color: $brand-color;
            }
        }

        .blog_divider{
            display: flex;
            justify-content: center;
        }

        .blog_cards{
            .card{
                padding: 15px;
                position: relative;
                margin-bottom: 50px;
                img {
                    border-radius: 20px;
                }

                .card_description{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    gap: 10px;
                    margin: 0 auto;
                    border-radius: 10px;
                    position: absolute;
                    width: 80%;
                    height: 30%;
                    bottom: -10px;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    background-color: white;
                    padding: 30px 30px;
                    text-align: left;
                    font-size: 20px;
                    box-shadow: 0px 0px 2px lightgrey ;

                    .dot{
                        font-size: 10px;
                        padding-bottom: 3px;
                        margin-right: 10px;
                        color: $brand-color
                    }
                }
            }
        }

        .blog_button {
            @include gradient-black;
    
            &:hover{
                cursor: pointer;
                @include gradient-green;
            }
        }
    }
}

//sponsor section
.sponsor{
    background-color: #F9F9F9;
    padding: 100px 0px;
    .sponsor_container{
        padding: 20px;

        .sponsor_card.project{
            background: linear-gradient(90deg, rgb(105, 105, 105) 0%, rgba(61,61,61,1) 47%, rgb(33, 33, 33) 79%);
        }

        .sponsor_card.start{
            background: linear-gradient(90deg, rgba(139,224,100,1) 27%, rgba(0,217,166,1) 90%);
        }
        .sponsor_card {
            color: white;
            
            border-radius: 20px;
            text-align: center;
            padding: 60px;
            margin: 30px;

            & > * {
                margin-bottom: 50px ;
            }

            .card_title{
                font-size: 45px;
            }

            .start_button{
                margin-bottom: 0px;
                background: linear-gradient(90deg, rgb(105, 105, 105) 0%, rgba(61,61,61,1) 47%, rgb(33, 33, 33) 79%);
                box-shadow: 0px 0px 10px black;

                &:hover{
                    background: white;
                    color: black;
                }
            }
            .submit_text{
                height: 56px;
                border-radius: 999px;
                background-color: grey;
                color: white;
                display: inline-block;
                width: 500px;
                margin: 0 auto;
                display: flex;
                justify-content: flex-end;
                .text_input{
                    height: 100%;
                    border-radius: inherit;
                    background-color: inherit;
                    color: white;
                    border: none;
                    flex-grow: 1;
                    padding: 0px 30px;
                    &:focus{
                        outline: none;
                    }
                }

                .submit_btn{
                    height: 100%;
                    border-radius: inherit;
                    background-color: inherit;
                    font-weight: bold;
                    color: white;
                    border: none;
                    padding: 0px 30px;

                    &:hover{
                        cursor: pointer;
                        background-color: black;
                    }
                }
            }
        }
    }

    .company {
        display: flex;
        align-items: center;
        padding: 80px;
        img{
            width: 100%;
        } 
    }
}

//fixed buttons
.fixed_buttons{
    display: flex;
    align-items: center;
    gap: 15px;
    position: fixed;
    bottom: 20px; 
    right: 20px; 
    .arrow_button,
    .chat_message {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 50%;
        aspect-ratio: 1/1;
    }

    .arrow_button{
        width: 40px;
        border: 1px solid black;
        // height: 40px;

        &:hover{
            background-color: black;
            color: white;
        }
    }

    .chat_message{
        width: 60px;
        background-color: #527CEB;
        color: white;

        &:hover{
            background-color: $brand-color;
            color: white;
            border: 2px solid $brand-color;
        }

        .message_icon{
            font-size: 25px;
        }
    }
}
</style>