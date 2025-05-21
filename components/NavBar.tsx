import Image from "next/image";
import Link from "next/link";

const user = {};
const NavBar = () => {
  return (
    <header className="navbar">
        <nav>
      <Link href="/">
        <Image src="/assets/icons/logo.svg" width={32} height={32} alt="Logo" />
        <h1>Snap Cast</h1>
      </Link>

      {user && (
        <figure>
            <button>
                <Image 
                src="/assets/images/dummy.jpg"
                alt="user"
                width={36}
                height={36}
                className="rounded-full aspect-square"/>                
            </button>
             <button>
                <Image 
                src="/assets/icons/logout.svg"
                alt="LogOut"
                width={24}
                height={24}
                className="rotate-180"/>                
            </button>
        </figure>
      )}
      </nav>
    </header>
  );
};

export default NavBar;
