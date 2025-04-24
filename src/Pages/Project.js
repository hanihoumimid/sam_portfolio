import { useState } from "react";
import { InstagramEmbed, YouTubeEmbed, PinterestEmbed } from "react-social-media-embed";

// Import des images (remplacez par vos chemins réels)
import cve_logo from '../assets/cve_logo.svg';
import cve_banniere from '../assets/banniere_cve.webp';
import heyman_banniere from '../assets/banniere_heyman.webp';
import parotech_banniere from '../assets/parotech_banniere.webp';
import project_banniere from '../assets/project_banniere.webp';
import faye_banniere from '../assets/trust_banniere.png';
import lcoin_banniere from '../assets/lcoin_banniere.webp';
import heyman_logo from '../assets/icone_heyman.svg';
import lcoin_logo from '../assets/lcoin_logo.svg';
import parotech_logo from '../assets/parotech_logo.svg';
import project_logo from '../assets/project_logo.svg';
import trust_logo from '../assets/trust_logo.svg';

// Import des images de travail
import cve_1 from '../assets/work_cve1.webp';
import cve_2 from '../assets/work_cve2.webp';
import bande from '../assets/bande.webp';
import heyman_work from '../assets/heyman_work.webp';
import lcoin_work from '../assets/lcoin_work.webp';
import parotech_site from '../assets/parotech_site.png';
import parotech_work1 from '../assets/parotech_work1.webp';
import parotech_work2 from '../assets/parotech_work2.webp';
import project_work from '../assets/projects_work.webp';
import project_vid from '../assets/projects_vid.mp4';
import fest1 from '../assets/faye1.webp';
import fest2 from '../assets/faye2.webp';
import fest3 from '../assets/faye3.webp';
import fest4 from '../assets/faye4.webp';
import trust_work from '../assets/trust_work.webp';
import trust_work2 from '../assets/trust_work2.webp';
import trust_work3 from '../assets/trust_work3.webp';

const ProjectsGallery = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 'cve',
      title: 'CVE - My student association',
      banner: cve_banniere,
      logo: cve_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CVE - My student association</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={cve_logo} alt="CVE Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">The CVE</h2>
            <img src={bande} alt="divider" className="w-full h-px my-4" />
            <h3 className="text-xl font-medium text-gray-700">About it</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                The CVE is the association of the National School of Aerotechnics based beside Montreal.
                In this association, we decide about the budget for the different clubs of the school. 
                We organize different events, like activities or parties.
                We are also references for the students who need help.
              </li>
              <li>
                I have been the social manager for 2 years, and now I'm the president. During these 2 years,
                I had the occasion to realize some merch, logos, posters, photos, and scenography.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={cve_1} alt="CVE Work 1" className="rounded-lg shadow-md" />
              <img src={cve_2} alt="CVE Work 2" className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-4">
              <YouTubeEmbed url="https://youtu.be/c5ZZy_2uwD4" width="100%" />
              <YouTubeEmbed url="https://youtu.be/COYNI22hghE" width="100%" />
              <YouTubeEmbed url="https://youtu.be/IEbZZ6G91z8" width="100%" />
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'heyman',
      title: 'Heyman',
      banner: heyman_banniere,
      logo: heyman_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Heyman</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={heyman_logo} alt="Heyman Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Heyman is a morrocan DJ based in Montreal. He's mixing in some of the best clubs in Québec. 
                This dude is amazing and let me create his brand. Thanks to him, I discovered the world of 
                being a DJ in Montreal, and it was absolutely insane!
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">LOGOS</h2>
            <div className="grid grid-cols-1 gap-6">
              <img src={heyman_work} alt="Heyman Brand Work" className="rounded-lg shadow-md" />
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'lcoin',
      title: "L'coin",
      banner: lcoin_banniere,
      logo: lcoin_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">L'coin</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={lcoin_logo} alt="L'coin Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                L'coin is a gaming place in Montreal. I was approached for the artistic direction and told: 
                you have 4 days to do everything. It was quite an experience but really enriching. Today, 
                I am the social manager of this place, even though everything is still in beta and everything 
                will be redone by September.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
            <img src={lcoin_work} alt="L'coin Work" className="rounded-lg shadow-md" />
            <p className="text-gray-500">I also helped create these two videos on Instagram.</p>
            <div className="space-y-4">
              <InstagramEmbed url="https://www.instagram.com/reel/C92hu_mAWpg/" width="100%" />
              <InstagramEmbed url="https://www.instagram.com/reel/C8n1Ty5Of3-/" width="100%" />
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'parotech',
      title: 'Parotech',
      banner: parotech_banniere,
      logo: parotech_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Parotech</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={parotech_logo} alt="Parotech Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                At Parotech, I designed two websites: the first is a showcase site that traces their history, 
                and the second is more focused on their current business. I was able to develop my marketing 
                and design skills there.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Websites</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The first one is: <a href="https://www.parotech.com/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Parotech</a>
              </p>
              <img src={parotech_site} alt="Parotech Website" className="rounded-lg shadow-md" />
              
              <p className="text-gray-700">
                And the second one: <a href="https://www.parotechpld.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Parotech LED Design</a>
              </p>
            </div>

            <p className="text-gray-700">
              I was able to develop their social media, but due to a lack of time, I couldn't do much. 
              I left them with a good foundation, but unfortunately, they don't have the time and resources on their side.
            </p>

            <h3 className="text-xl font-medium text-gray-700">Social Media</h3>
            <div className="space-y-4">
              <InstagramEmbed url="https://www.instagram.com/parotechpld/" width="100%" />
              <PinterestEmbed url="https://fr.pinterest.com/communicationpld/" width="100%" />
            </div>

            <h3 className="text-xl font-medium text-gray-700">Merchandising</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={parotech_work1} alt="Parotech Work 1" className="rounded-lg shadow-md" />
              <img src={parotech_work2} alt="Parotech Work 2" className="rounded-lg shadow-md" />
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects Events',
      banner: project_banniere,
      logo: project_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Projects Events</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={project_logo} alt="Projects Events Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">La Marockinerie</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                I was contacted to help organize parties and especially to communicate about them. 
                Here it is: La Marockinerie. The representation of Moroccan rap culture, rap, music, 
                and especially the ambiance.
              </li>
            </ul>
            <div className="space-y-4">
              <img src={project_work} alt="Projects Work" className="rounded-lg shadow-md" />
              <video src={project_vid} controls className="w-full rounded-lg shadow-md" />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">La Garaye Fest</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                La Garaye Fest is a small festival of 300 persons in the countryside of Bretagne, in France. 
                They asked me to design them a t-shirt to sell at the festival. They only told me: the theme is the 90s.
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <img src={fest1} alt="Festival 1" className="rounded-lg shadow-md" />
              <img src={fest2} alt="Festival 2" className="rounded-lg shadow-md" />
              <img src={fest3} alt="Festival 3" className="rounded-lg shadow-md" />
              <img src={fest4} alt="Festival 4" className="rounded-lg shadow-md" />
            </div>
            <p className="text-gray-700">They sold 100 t-shirts for 250 persons!</p>
          </section>
        </div>
      )
    },
    {
      id: 'trust',
      title: 'They Trusted me',
      banner: faye_banniere,
      logo: trust_logo,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">They Trusted me</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <img src={trust_logo} alt="They Trusted me Logo" className="h-16" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                One day, I met the president of the Quebec Aircraft Maintenance Technicians Association. 
                It went very well, and I designed a flyer for them. There will be more to come!
              </li>
            </ul>
            <img src={trust_work} alt="Trust Work" className="rounded-lg shadow-md" />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Music Group Promotion</h2>
            <p className="text-gray-700">
              I helped a small music group to make promotion for their first concert:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={trust_work2} alt="Music Group Work 1" className="rounded-lg shadow-md" />
              <img src={trust_work3} alt="Music Group Work 2" className="rounded-lg shadow-md" />
            </div>
          </section>
        </div>
      )
    }
  ];

  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              expandedProject === project.id ? 'md:col-span-2 lg:col-span-3' : ''
            }`}
          >
            {/* Bannière cliquable */}
            <div 
              className="relative cursor-pointer group"
              onClick={() => toggleProject(project.id)}
            >
              <img 
                src={project.banner} 
                alt={project.title} 
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold text-center px-4">{project.title}</h3>
              </div>
            </div>
            
            {/* Contenu détaillé */}
            {expandedProject === project.id && (
              <div className="animate-fadeIn p-6">
                {project.content}
                <div className="pt-6 text-center">
                  <button 
                    onClick={() => setExpandedProject(null)}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors duration-200 font-medium"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;