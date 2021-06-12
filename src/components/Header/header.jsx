import './header.scss';

export default function Header() {
    return(
        <header>
            <div class="buscar">
            <div class="btn1">
                <form>
                    <input type="search" placeholder="¿Adónde quieres ir?"/>
                    </form></div>
            <div class="btn2"><button> <i className="fas fa-search"> </i>Buscar </button></div>
        </div>
        </header>
    )
}