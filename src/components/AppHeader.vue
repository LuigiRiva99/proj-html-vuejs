<template>
    <div class="header_container">
        <div class="header_contacts flex">
            <div class="numebrs">
                <p>(001) 88451234 88455438</p>
            </div>
            <div class="socials flex">
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
            </div>
        </div>
        <div class="header_nav flex">
            <div class="logo">
                <img src="../assets/img/cropped-Group-39-2x.png" alt="">
            </div>
            <ul class="link_list flex">
                <li v-for="link in links">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
            <div class="search_bar">
                <AppButton class="header_button" :buttonText="buttonText"/>
                <font-awesome-icon class="search_icon" icon="search"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'
    export default {
        components: {
            AppButton
        },
        data() {
            return {
                links: [
                    {
                        text: 'HOME',
                        url: '#'
                    },
                    {
                        text: 'ABOUT',
                        url: '#'
                    },
                    {
                        text: 'SERVICES',
                        url: '#'
                    },
                    {
                        text: 'SHOWCASE',
                        url: '#'
                    },
                    {
                        text: 'BLOG',
                        url: '#'
                    },
                    {
                        text: 'CONTACT',
                        url: '#'
                    },
                ],
                buttonText: 'PURCHASE'
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
//header contatti 
.header_contacts {
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 35px;
    background-color: #3D3D3D;
    color: white;
}

.header_nav{
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.socials {
    gap: 15px;
}

//header nav

.link_list {
    gap: 50px;
}

.search_icon {
    color: $brand-color;
    margin-left: 20px;
}
</style>