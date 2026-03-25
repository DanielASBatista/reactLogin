import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header(){
    return (
        <header className="bg-amber-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Logo/>
                         
                <Menu/>
            </div>

            <div></div>
        </header>
    );
}
