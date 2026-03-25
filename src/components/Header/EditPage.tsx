import { useState } from "react"
import { Input } from "../Input"

export const EditPage = () => {
    const[name, setName] = useState("Arrascaeta");

    return  (
        <div>
            <div className="container mx-auto flex ">
                <main className="w-8/12 bg-red-300 p-4">
                    <form className="space-y-4">
                        <Input name="Nome" id="name" placeholder=" Ex: Zico" value={name} onChange={(event) =>{setName(event.target.value)}}/>

                        <Input name="GitHub" id="github" placeholder=" Ex: FlaBest" />

                        <div className="grid grid-cols-4 gap-4">

                        <Input name="LinkedIn" id="linkedIn" placeholder=" Ex: FlaBest" />

                        <Input name="Instagram" id="instagram" placeholder=" Ex: FlaBest" />

                        <Input name="TikTok" id="tiktok" placeholder=" Ex: FlaBet" />

                        <Input name="Facebook" id="facebook" placeholder=" Ex: FlaBest" />
                        
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