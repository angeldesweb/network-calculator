<script>
	import { lang } from './../store.js';

</script>

<div class="foot-section">
    {#if $lang === 'en-US'}
        <p>
            Hi, i'm angeldesweb and i'm looking for a job. If you have interesting for contact to me visit my portfolio 
            <a href="https://angeldesweb-portfolio.vercel.app" target='blank' alt="Author portfolio">here</a>
        </p>
    {/if}
    {#if $lang === 'es-ES'}
        <p>
            Hola, soy angeldesweb, me encuentro en la búsqueda de empleo. Si deseas puedes visitar mi portafolio
            <a href="https://angeldesweb-portfolio.vercel.app" target='blank' alt="Author portfolio">aquí</a>
        </p>
    {/if}
</div>

<style>
    .foot-section {
        color:#fff;
        font-size: .8em;
        text-align: center;
    }
    a {
        color: var(--second-blue);
    }
</style>