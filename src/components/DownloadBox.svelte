<script>
	import { lang } from './../store.js';

</script>

<div class="down-box">
    <button>
        {$lang === 'en-US' ? 'Download for Windows' : 'Descarga para Windows'}
    </button>
    <button>
        {$lang === 'en-US' ? 'Download for Linux' : 'Descargar para Linux'}
    </button>
</div>

<style>
    .down-box {
        display: flex;
        flex-direction: column;
    }
    .down-box > button {
        margin-top:1em;
        background-color: var(--main-blue);
        color:#fff;
    }
    
    .down-box > button:hover {
        background-color: var(--third-blue);
    }
</style>