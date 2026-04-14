import { SocialMediaLink } from "./SocialMediaLink";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

interface Link{
    name: string,
    url: string,
}

interface AsideProps {
  name: string;
  github: string;
  linkedIn: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  links: Link[];
}

export const Aside = ({name, github, linkedIn, instagram, tiktok, facebook, links}: AsideProps) => {
    return  (
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
                                        <SocialMediaLink link = {"https://instagram.com/" + instagram}><FaInstagram/>
                                        </SocialMediaLink>
                                    </li>
                                )}
                                {facebook !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://facebook.com/" + facebook}><FaFacebookSquare/>
                                        </SocialMediaLink>
                                    </li>
                                )}
                                {tiktok !== "" && (
                                    <li>
                                        <SocialMediaLink link = {"https://tiktok.com/" + tiktok}><FaTiktok/>
                                        </SocialMediaLink>
                                    </li>
                                )}
                                                                    
                                </ul>
                                <ul className="mt-6 flex flex-col gap-3">
  {links.map((link, index) => {
    if (!link.name || !link.url) return null;

    return (
      <li key={index}>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-gray-200 hover:bg-gray-300 transition p-2 rounded"
        >
          {link.name}
        </a>
      </li>
    );
  })}
</ul>
                        </div>
                </aside>
    );
}  