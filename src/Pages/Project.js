// src/pages/Project.js
import { useParams } from "react-router-dom";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Card from '../Components/Card.js';

import cve_logo from '../assets/cve_logo.svg';
import cve_1 from '../assets/work_cve1.webp';
import cve_2 from '../assets/work_cve2.webp';
import bande from '../assets/bande.webp';
import heyman_logo from '../assets/icone_heyman.svg';
import heyman_work from '../assets/heyman_work.webp';
import lcoin_logo from '../assets/lcoin_logo.svg';
import lcoin_work from '../assets/lcoin_work.webp';
//import YoutubeEmbed from "../Components/YoutubeEmbed.js";

// function Project() {
  // const { id } = useParams(); // Récupère l'ID depuis l'URL (/project/1)

  const Project = () => {
    // Tableau des sections (peut être dynamique)
    const sections = [
      {
        
        content: (
          <div>
            <h4>CVE - My student association</h4>
            <img src={cve_logo} alt="logo_cve" />
            <h5>The CVE</h5>
            <img src={bande} alt="bande" />
            <h6>About it</h6>
            <ol>
              <li>
                The CVE is the association of the National School of Aerotechnics based beside Montreal.
                In this association, we decide about the budget for the different clubs of the school. We organize different events, like activities or parties.
                We are also references for the students who need help.
              </li>
              <li>
                I have been the social manager for 2 years, and now I’m the president. During these 2 years,
                I had the occasion to realize some merch, logos, posters, photos, and scenography.
              </li>
            </ol>
            <img src={cve_1} alt="cve_work1" />
            <img src={cve_2} alt="cve_work2" />
            <YouTubeEmbed url="https://youtu.be/c5ZZy_2uwD4" />
            <YouTubeEmbed url="https://youtu.be/COYNI22hghE" />
            <YouTubeEmbed url="https://youtu.be/IEbZZ6G91z8" />
          </div>
        )
      },
      {
        content: (
          <div>
            <h3>Heyman</h3>
            <img src={heyman_logo} alt="heyman_logo" />
            <h5>Heyman</h5>
            <h6>About the project</h6>
            <ol>
              <li>Heyman is a morrocan Dj based in Montreal. He's mixing in some of the best clubs in Québec. This dude is amazing and let me create his brand. Thanks to him, I discovered the world of being a DJ in Montreal, and it was absolutely insane ! </li>
            </ol>
            <img src={heyman_work} alt="heyman_project" />
          </div>
        )
      },
      {
        content: (
          <div>
            <h3>L'coin</h3>
            <img src={lcoin_logo} alt="lcoin_logo" />
            <h5>L'coin</h5>
            <ol>
              <li>L'coin is a gaming place in Montreal. I was approached for the artistic direction and told: you have 4 days to do everything. 
                It was quite an experience but really enriching. Today, I am the social manager of this place, 
                even though everything is still in beta and everything will be redone by September.</li>
            </ol>
            <img src={lcoin_work} alt="lcoin_work" />
            <InstagramEmbed url="https://www.instagram.com/reel/C92hu_mAWpg/?utm_source=ig_web_copy_link" />
            <InstagramEmbed url="https://www.instagram.com/reel/C8n1Ty5Of3-/?utm_source=ig_web_copy_link" />
          </div>
        )
      }
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4">
        {sections.map((section, index) => (
          <div key={index}>
            
            {section.content}
          </div>
        ))}
      </div>
    );
  };
  
export default Project;      