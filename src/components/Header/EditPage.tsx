import { useState } from "react"
import { Input } from "../Input"
import { SocialMediaLink } from "./SocialMediaLink";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
/*import { Link } from*/ 

interface Link{
    name: string,
    url: string,
}


export const EditPage = () => {
    const[name, setName] = useState("Arrascaeta");
    const [links, setLinks] = useState<Link[]>([]);

    const [linkedIn, setLinkedIn] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [github, setGithub] = useState("")

    const handleAddLink = () => {
        setLinks([...links, {name:"", url:""}]);
    }

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...links];

        updatedLinks[index] = {
            ...updatedLinks[index],
            [field] : value,
        }
        setLinks(updatedLinks);
    }

    return  (
        <div>
            <div className="container mx-auto flex ">
                <main className="w-8/12 bg-red-300 p-4">
                    <form className="space-y-4" onSubmit={(event) => {event.preventDefault()}}>
                        <Input name="Nome" id="name" placeholder=" Ex: Zico" value={name} onChange={(event) =>{setName(event.target.value)}}/>

                        <Input name="GitHub" id="github" placeholder="Ex: Flabest" value={github} onChange={(event) =>{setGithub(event.target.value)}}/>

                        <div className="grid grid-cols-4 gap-4">

                        <Input name="LinkedIn" id="linkedIn" placeholder="Ex: Flabest" value={linkedIn} onChange={(event) =>{setLinkedIn(event.target.value)}}/>

                        <Input name="Instagram" id="instagram" placeholder="Ex: Flabest" value={instagram} onChange={(event) =>{setInstagram(event.target.value)}}/>

                        <Input name="TikTok" id="tiktok" placeholder=" Ex: FlaBet" value={tiktok} onChange={(event) =>{setTiktok(event.target.value)}}/>

                        <Input name="Facebook" id="facebook" placeholder="Ex: Flabest" value={facebook} onChange={(event) =>{setFacebook(event.target.value)}}/>
                        
                        </div>                    
                    
                      <div className="space-y-4">
                        {
                            links.map((link, index) => {
                                return (
                                    <div className="flex gap-4">
                                      <Input
                                        name={"Nome do Link " + (index + 1)}
                                        id={"link-" + index}
                                        value={link.name}
                                        placeholder="Ex: Portfolio"
                                        onChange={(event) => {handleLinkChange (index, "name", event.target.value)}}
                                        />

                                      <Input
                                        name={"URL do Link"}
                                        id={"link-url-" + index}
                                        value={link.url}
                                        placeholder="Ex: https://portfolio.com"
                                        onChange={(event) => {handleLinkChange (index, "url", event.target.value)}}
                                        />
                                    </div>
                                )
                            }) 
                        }
                       <button className=" text-amber-50
                                           bg-red-700 rounded 
                                           cursor-pointer px-4 py-2 
                                           uppercase 
                                           hover:opacity-20 
                                           transition-opacity 
                                           duration-1000"
                       onClick={handleAddLink}>Adicionar Link</button>
                      </div>                    
                    
                    </form>
                </main>

                <aside className="w-4/12 p-4 bg-white">
                        <div className="rounded border-8 p-4 max-w-lg mx-auto">
                            <div className="flex flex-col gap-2 items-center">
                                <span className="block w-16 h-16 rounded-full bg-blue-300"></span>
                                    <h1 className="font-bold">{name}</h1>
                            </div>
 
                            <ul className="flex gap-2 items-center justify-center">
                                {github !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://github.com/" + github}><SiGithub/>
                                        </SocialMediaLink>
                                    </li>
                                    
                                ) }
                                {linkedIn !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://linkedin.com/" + linkedIn}><GrLinkedin/>
                                        </SocialMediaLink>
                                    </li>
                                    
                                ) }
                                {instagram !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://instagram.com/" + instagram}>I
                                        </SocialMediaLink>
                                    </li>
                                )}
                                {facebook !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://facebook.com/" + facebook}>F
                                        </SocialMediaLink>
                                    </li>
                                )}
                                {tiktok !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://tiktok.com/" + tiktok}>T
                                        </SocialMediaLink>
                                    </li>
                                )}
                                                                    
                                </ul>
                        </div>
                </aside>
            </div>
        </div>
    )
}