import { useState } from "react"
import { Aside } from "./Aside";
import { EditForm } from "./EditForm";


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
                <EditForm
                    name={name}
                    setName={setName}
                    linkedIn={linkedIn}
                    setLinkedIn={setLinkedIn}
                    facebook={facebook}
                    setFacebook={setFacebook}
                    instagram={instagram}
                    setInstagram={setInstagram}
                    tiktok={tiktok}
                    setTiktok={setTiktok}
                    github={github}
                    setGithub={setGithub}
                    links={links}
                    setLinks={setLinks}
                    handleAddLink={handleAddLink}
                    handleLinkChange={handleLinkChange}
                />                 
                <Aside name={name} github={github} linkedIn={linkedIn} instagram={instagram} tiktok={tiktok} facebook={facebook} links={links}/>
            </div>
        </div>
    )
}