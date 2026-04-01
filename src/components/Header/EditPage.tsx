import { useState } from "react"
import { Input } from "../Input"
/*import { Link } from*/ 

interface Link{
    name: string,
    url: string,
}


export const EditPage = () => {
    const[name, setName] = useState("Arrascaeta");
    const [links, setLinks] = useState<Link[]>([]);

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

                        <Input name="GitHub" id="github" placeholder=" Ex: FlaBest" />

                        <div className="grid grid-cols-4 gap-4">

                        <Input name="LinkedIn" id="linkedIn" placeholder=" Ex: FlaBest" />

                        <Input name="Instagram" id="instagram" placeholder=" Ex: FlaBest" />

                        <Input name="TikTok" id="tiktok" placeholder=" Ex: FlaBet" />

                        <Input name="Facebook" id="facebook" placeholder=" Ex: FlaBest" />
                        
                        </div>                    
                    
                      <div className="space-y-4">
                        {
                            links.map((link, index) => {
                                return (
                                    <div className="flex gap-4">
                                      <Input
                                        name={"Nome do Link " + index + 1}
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

                <aside className="w-4/12 bg-red-500">
                    Seu nome: {name}
                </aside>
            </div>
        </div>
    )
}