import SiteLogo from "./SiteLogo"
import {Nav} from "./Navigation"

export default function Header(){  

    return(
        <header className="md:container md:mx-auto py-4">
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <SiteLogo />
                </div>
                <div className="basis-3/4">
                    <Nav />
                </div>
            </div>            
        </header>
    )
}