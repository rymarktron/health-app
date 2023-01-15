import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <a href ="/"><div>
                <Image src = "/logo.svg" alt = "logo for app" width = {80} height = {80}/>
            </div></a>
        </nav>
     );
}
 
export default Navbar;