import { Input } from "../Input";

interface Link{
    name: string,
    url: string,
}

interface EditFormProps {
    name: string,
    setName: (name: string) => void,
    linkedIn: string,
    setLinkedIn: (linkedIn: string) => void,
    instagram: string,
    setInstagram: (instagram: string) => void,
    tiktok: string,
    setTiktok: (tiktok: string) => void,
    facebook: string,
    setFacebook: (facebook: string) => void,
    github: string,
    setGithub: (github: string) => void,
    links: Link[],
    setLinks: (links: Link[]) => void,
    handleAddLink: () => void,
    handleLinkChange: (index: number, field: string, value: string) => void,
}

export const EditForm = ({name, setName, linkedIn, setLinkedIn, instagram, setInstagram, tiktok, setTiktok, facebook, setFacebook, github, setGithub, links, handleAddLink, handleLinkChange}: EditFormProps) => {
return  (
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
    

                );
        }
 


