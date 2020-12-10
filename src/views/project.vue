<template>
<div>
    <Navbar :search="value"/>
    <div class="container">
        <div id="project">
            
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import Footer from '../components/footer'
import Navbar from '../components/navbar'
export default {
components: {Footer,Navbar},
data() {
return {
    value:''
};
},
created() {

},
methods: {

},
}
</script>
<style scoped>
</style>