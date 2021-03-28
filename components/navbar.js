import Link from "next/link"

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
            <a class="navbar-brand">Navbar</a>
        </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <Link href="/">
                <a class="nav-link">Home</a>
            </Link>
            <Link href="/blog">
                <a class="nav-link">Blog</a>
            </Link>
        </div>
    </div>
    </nav>
)

export default Navbar;