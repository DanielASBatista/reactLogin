import { createContext, useContext, useState, type ProfilerProps } from "react"
import type { Link } from "../interfaces/Link"
interface ProfileContextType{
    name : string;
    github : string;
    linkedin : string;
    instagram : string;
    tiktok: string;
    facebook : string;
    links : Link[];
    setName: (name:string) => void
    setGithub: (name:string) => void
    setLinkedIn: (name:string) => void
    setInstagram: (name:string) => void
    setTikTok: (name:string) => void
    setFacebook: (name:string) => void
    handleAddLink: () => void;
    handleLinkChange: (index: number, field: string, value: string) => void;
    }

interface ProfileProviderProps{
        children: React.ReactNode
    }
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({children} : ProfileProviderProps) =>{
    const[name, setName] = useState("Arrascaeta");
        const [links, setLinks] = useState<Link[]>([]);
    
        const [linkedin, setLinkedIn] = useState("");
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
    return(
        <ProfileContext.Provider value= {{
            name,github,linkedin,instagram,tiktok,facebook,links,setName,setGithub,setLinkedIn,setInstagram,setFacebook,setTiktok,handleAddLink,handleLinkChange(index, field, value) {
                
            },
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () =>{
    return useContext(ProfileContext)
}

