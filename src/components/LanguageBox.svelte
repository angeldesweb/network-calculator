<script>
	import { lang } from './../store.js';

    const changeLang = (e) => {
        e.preventDefault(e);

        if(e.target.id === 'es') lang.esp();

        if(e.target.id === 'en') lang.eng();

        console.log($lang);
    }
</script>


<div class="box">
    <a href="#/" alt="lang" on:click={changeLang} id="es">{$lang === 'en-US' ? 'Spanish' : 'Español'} 🇪🇸</a>
    <a href="#/" alt="lang" on:click={changeLang} id="en">{$lang === 'en-US' ? 'English' : 'Inglés'} 🇺🇸</a>
</div>




<style>
    .box {
        padding:0;
        margin:0;
        color:var(--second-blue)
    }
    .box > a {
        padding:1em;
        font-size:.8rem;
    }
</style>