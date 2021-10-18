<script>
    import {version} from '../../package.json';
    import {lang} from '../store';
</script>

<div class="name-box">
    <h1>{$lang === 'en-US' ? 'Networking calculator' : 'Calculadora de redes'} 
        <small>{$lang === 'en-US' ? `version ${version} (IPv4 only)` : `versión ${version} (Solo IPv4)`}</small>
    </h1>
    <p>
        <a href="https://angeldesweb-portfolio.vercel.app" alt="Author portfolio" target="blank">{$lang === 'en-US' ? 'By ' : 'Por '} angeldesweb</a>
    </p>
</div>

<style>
    .name-box {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: var(--main-blue);
    }
    p > a {
        color:#fff;
        font-size: .8em;
    }
    h1 {
        font-size: 3rem;
        color:#fff;
    }
    small {
        font-size: 1rem;
        color:var(--second-blue);
    }
    p {
        color: #fff;
        font-size: 1.5rem;
    }
</style>