<template>
    <footer>
        <div class="container_info">
            <div class="row">
                <div class="company_info col-3">
                    <img src="../assets/img/cropped-Group-39-2x.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, at maiores earum beatae cum ducimus sapiente, aspernatur ad inventore, quisquam in. Nihil harum ipsa veniam voluptatem reprehenderit autem et minima.</p>
                </div>
                <div class="company_links col-3">
                    <h2>QUICK LINKS</h2>
                    <AppDivider/>
                    <ul>
                        <li v-for="link in companyLinks"><a :href="link.url">{{ link.text }}</a></li>
                    </ul>
                </div>
                <div class="company_contacts col-3">
                    <h2>CONTACT</h2>
                    <AppDivider/>
                    <ul>
                        <li>Patricia C.Amedee 4401 Waldeck Street <br> Grapevine Nashville, TX 76051
                        </li>
                        <li>info@yourdomain.com</li>
                        <li>+99 (0) 101 0000 888</li>
                    </ul>
                </div>
                <div class="company_map col-3">
                    <h2>LOCATION ON MAP</h2>
                    <AppDivider/>
                    <img :src="'/assets/img/map.png'" alt="">
                </div>
            </div>
        </div>
        <div class="footer_bar flex">
            <div class="copyright">
                <p>&copy; 2020 PHLOX BUSINESS THEME.</p>
            </div>
            <div class="socials flex">
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
            </div>
        </div>
    </footer>
</template>

<script>
import AppDivider from './AppDivider.vue';
    export default {
        components: {
            AppDivider
        },

        props:{
            companyLinks : {
                type: Array
            }
        },

        data() {
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>

footer{
    padding-top: 100px;
    .container_info{
        height: 450px;

        .company_info,
        .company_links,
        .company_contacts,
        .company_map{
            padding: 50px;
            color: grey;

            ul{
                display: flex;
                flex-direction: column;
                gap: 15px;

                li:hover{
                    color: black;
                }
            }
            h2{
                color: black;
            }
        }
    }

    .footer_bar{
        padding: 0px 20px;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(90deg, rgb(74, 73, 73) 0%, rgba(61,61,61,1) 47%, rgb(32, 32, 32) 79%);
        color: white;
        .socials {
            gap: 15px;
        }
    }
}
</style>