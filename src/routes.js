import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/auth/Login.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Index from './components/Index.vue';
import Signup from './components/auth/Signup.vue';
import Tree from './components/Tree.vue';
import Padre from './components/Padre.vue';
//import Products from './components/product/Index.vue';
//import Details from './components/product/Details.vue';
import Error from './components/layouts/Error.vue';
import Webcam from './components/extras/WebCam.vue';

const Products = r => require.ensure([],()=>{  r(require('./components/product/Index.vue'))}, 'product')

const Details = r =>require.ensure([],()=>{ r(require('./components/product/Details.vue'))}, 'product')


const routes = [
    { path: '/', component: Index },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/signup', component: Signup },
    { path: '/webcam', component: Webcam },
    { path: '/register-now', redirect:'/signup' },
    { path: '/products', component: Products,children:[
        { path: ':id', component: Details,name:'product' },
    ] },
    { path: '/404', component: Error },
    { path: '*', redirect:'/404' },
    /*{ path: '/products/product-detail/:id', component: Details,name:'product' },*/
    
    /*
    { path: '/tree', component: Tree },
    { path: '/padre', component: Padre },
    */
];


export default routes;