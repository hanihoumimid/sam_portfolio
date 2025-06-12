import { useState, useEffect, useRef } from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { motion, AnimatePresence } from 'framer-motion';

// Importez toutes vos images
import cve_logo from '../assets/cve_logo.svg';
import cve_1 from '../assets/work_cve1.webp';
import cve_2 from '../assets/work_cve2.webp';
import bande from '../assets/bande.webp';
import cve_banniere from '../assets/banniere_cve.webp';
import heyman_banniere from '../assets/banniere_heyman.webp';
import parotech_banniere from '../assets/parotech_banniere.webp';
import project_banniere from '../assets/project_banniere.webp';
import faye_banniere from '../assets/trust_banniere.png';
import lcoin_banniere from '../assets/lcoin_banniere.webp';
import heyman_logo from '../assets/icone_heyman.svg';
import heyman_work from '../assets/heyman_work.webp';
import lcoin_logo from '../assets/lcoin_logo.svg';
import lcoin_work from '../assets/lcoin_work.webp';
import parotech_site from '../assets/parotech_site.png';
import parotech_logo from '../assets/parotech_logo.svg';
import parotech_work1 from '../assets/parotech_work1.webp';
import parotech_work2 from '../assets/parotech_work2.webp';
import project_work from '../assets/projects_work.webp';
import project_logo from '../assets/project_logo.svg';
import project_vid from '../assets/projects_vid.mp4';
import fest1 from '../assets/faye1.webp';
import fest2 from '../assets/faye2.webp';
import fest3 from '../assets/faye3.webp';
import fest4 from '../assets/faye4.webp';
import trust_logo from '../assets/trust_logo.svg';
import trust_work from '../assets/trust_work.webp';
import trust_work2 from '../assets/trust_work2.webp';
import trust_work3 from '../assets/trust_work3.webp';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);
  const modalRef = useRef(null);

  // Bloque le scroll quand l'image est agrandie
  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [expandedImage]);

  // Composant pour les médias avec taille contrôlée
  const MediaContainer = ({ children, maxWidth = 'md' }) => (
    <div className={`w-full max-w-${maxWidth} mx-auto my-4`}>
      {children}
    </div>
  );

  const projects = [
    {
      id: 'cve',
      title: 'CVE - My student association',
      banner: cve_banniere,
      logo: cve_logo,
      content: (
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">CVE - My student association</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={cve_logo} alt="CVE Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">The CVE</h2>
            <img src={bande} alt="divider" className="w-full h-px my-4 dark:opacity-50" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">About it</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
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
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(cve_1)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={cve_1} alt="CVE Work 1" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(cve_2)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={cve_2} alt="CVE Work 2" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </div>

            <MediaContainer type="youtube">
              <YouTubeEmbed 
                url="https://youtu.be/c5ZZy_2uwD4" 
                width="100%" 
                height="400px"
                className="rounded-lg overflow-hidden" 
              />
            </MediaContainer>
            <MediaContainer type="youtube">
              <YouTubeEmbed 
                url="https://youtu.be/COYNI22hghE" 
                width="100%" 
                height="400px"
                className="rounded-lg overflow-hidden" 
              />
            </MediaContainer>
            <MediaContainer type="youtube">
              <YouTubeEmbed 
                url="https://youtu.be/IEbZZ6G91z8" 
                width="100%" 
                height="400px"
                className="rounded-lg overflow-hidden" 
              />
            </MediaContainer>
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
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Heyman</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={heyman_logo} alt="Heyman Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                Heyman is a Moroccan DJ based in Montreal. He's mixing in some of the best clubs in Québec.
                This dude is amazing and let me create his brand. Thanks to him, I discovered the world of
                being a DJ in Montreal, and it was absolutely insane!
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">LOGOS</h2>
            <MediaContainer maxWidth="lg">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(heyman_work)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={heyman_work} alt="Heyman Brand Work" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </MediaContainer>
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
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">L'coin</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={lcoin_logo} alt="L'coin Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                L'coin is a gaming place in Montreal. I was approached for the artistic direction and told:
                you have 4 days to do everything. It was quite an experience but really enriching. Today,
                I am the social manager of this place, even though everything is still in beta and everything
                will be redone by September.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Gallery</h2>
            <MediaContainer maxWidth="lg">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(lcoin_work)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={lcoin_work} alt="L'coin Work" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </MediaContainer>
            <p className="text-gray-500 dark:text-gray-400">I also helped create these two videos on Instagram.</p>
            <MediaContainer type="instagram">
              <div className="aspect-[4/5] w-full">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/C92hu_mAWpg/" 
                  width="100%" 
                  className="!w-full" 
                />
              </div>
            </MediaContainer>
            <MediaContainer type="instagram">
              <div className="aspect-[4/5] w-full">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/C8n1Ty5Of3-/" 
                  width="100%" 
                  className="!w-full" 
                />
              </div>
            </MediaContainer>
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
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Parotech</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={parotech_logo} alt="Parotech Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                At Parotech, I designed two websites: the first is a showcase site that traces their history,
                and the second is more focused on their current business. I was able to develop my marketing
                and design skills there.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Websites</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  The first one is:{' '}
                  <a
                    href="https://www.parotech.com/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                  >
                    <img
                      src={parotech_site}
                      alt="Parotech website preview"
                      className="w-8 h-auto rounded shadow-md dark:shadow-gray-700 hover:opacity-90 transition-opacity"
                    />
                    Parotech
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  And the second one:{' '}
                  <a
                    href="https://www.parotechpld.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                  >
                    <img
                      src={parotech_site}
                      alt="Parotech LED Design website preview"
                      className="w-8 h-auto rounded shadow-md dark:shadow-gray-700 hover:opacity-90 transition-opacity"
                    />
                    Parotech Led Design Porte Menu Led | Parotech LED Design | France
                  </a>
                </p>
              </div>

            </div>

            <p className="text-gray-700 dark:text-gray-300 pt-4">
              I was able to develop their social media, but due to a lack of time, I couldn't do much.
              I left them with a good foundation, but unfortunately, they don't have the time and resources on their side.
            </p>

            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 pt-6">Social Media</h3>
            <MediaContainer maxWidth="md">
              <InstagramEmbed url="https://www.instagram.com/parotechpld/" width="100%" />
            </MediaContainer>
            <div className="flex flex-col items-center">
          <a
            href="https://www.pinterest.fr/communicationpld/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
            Voir notre profil Pinterest
          </a>

          {/* Option: Widget de profil Pinterest (nécessite le script Pinterest) */}
          <div className="pinterest-profile-widget">
            <a
              data-pin-do="embedUser"
              data-pin-board-width="400"
              data-pin-scale-height="240"
              data-pin-scale-width="80"
              href="https://www.pinterest.fr/communicationpld/"
            >
              Voir le profil Pinterest
            </a>
          </div>
        </div>

            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 pt-6">Merchandising</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(parotech_work1)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={parotech_work1} alt="Parotech Work 1" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(parotech_work2)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={parotech_work2} alt="Parotech Work 2" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
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
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects Events</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={project_logo} alt="Projects Events Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">La Marockinerie</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                I was contacted to help organize parties and especially to communicate about them.
                Here it is: La Marockinerie. The representation of Moroccan rap culture, rap, music,
                and especially the ambiance.
              </li>
            </ul>
            <div className="space-y-4">
              <MediaContainer maxWidth="xl">
                <motion.div
                  className="cursor-zoom-in"
                  onClick={() => setExpandedImage(project_work)}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={project_work} alt="Projects Work" className="rounded-lg shadow-md dark:shadow-gray-700" />
                </motion.div>
              </MediaContainer>
              <MediaContainer>
              <video
                src={project_vid}
                controls
                className="w-full rounded-lg shadow-md dark:shadow-gray-700"
                style={{ maxHeight: '400px' }}
              />
            </MediaContainer>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">La Garaye Fest</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                La Garaye Fest is a small festival of 300 persons in the countryside of Bretagne, in France.
                They asked me to design them a t-shirt to sell at the festival. They only told me: the theme is the 90s.
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(fest1)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={fest1} alt="Festival 1" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(fest2)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={fest2} alt="Festival 2" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(fest3)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={fest3} alt="Festival 3" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(fest4)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={fest4} alt="Festival 4" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">They sold 100 t-shirts for 250 persons!</p>
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
        <div className="space-y-8 p-6 dark:text-gray-200 text-center">
          <div className="flex justify-center items-start flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">They Trusted me</h1>
              <div className="mt-2 h-1 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
            </div>
            <img src={trust_logo} alt="They Trusted me Logo" className="h-16 mx-auto" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About the project</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                One day, I met the president of the Quebec Aircraft Maintenance Technicians Association.
                It went very well, and I designed a flyer for them. There will be more to come!
              </li>
            </ul>
            <MediaContainer maxWidth="xl">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(trust_work)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={trust_work} alt="Trust Work" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </MediaContainer>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Music Group Promotion</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I helped a small music group to make promotion for their first concert:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(trust_work2)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={trust_work2} alt="Music Group Work 1" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
              <motion.div
                className="cursor-zoom-in"
                onClick={() => setExpandedImage(trust_work3)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={trust_work3} alt="Music Group Work 2" className="rounded-lg shadow-md dark:shadow-gray-700" />
              </motion.div>
            </div>
          </section>
        </div>
      )
    }
  ];

  const openProjectModal = (projectId) => {
    setActiveProject(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeProjectModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeProjectModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project.id)}
              className="group relative cursor-pointer transition-all duration-500 hover:z-10"
            >
              <div className="h-full transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:rotate-1">
                <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <motion.div
                      className="cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedImage(project.banner);
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={project.banner}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                      <h3 className="text-white text-xl font-bold text-center w-full">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-grow dark:text-gray-200 text-center">
                    <div className="flex justify-center mb-2">
                      <img src={project.logo} alt={`${project.title} logo`} className="h-12 mx-auto" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Click to view details</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeProjectModal}
          ></div>

          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div
              ref={modalRef}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              {activeProject && (
                <>
                  {projects.find(p => p.id === activeProject)?.content}
                  <div className="sticky bottom-0 bg-gradient-to-t from-white dark:from-gray-700 to-transparent h-20 flex items-end justify-center pb-4">
                    <button
                      onClick={closeProjectModal}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg text-gray-700 dark:text-gray-200 transition-colors duration-200 font-medium shadow-md"
                    >
                      Close Project
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Overlay plein écran avec animation */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center p-0"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedImage}
                alt="Expanded view"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />

              <motion.button
                className="absolute top-6 right-6 text-white text-4xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setExpandedImage(null)}
                whileHover={{ scale: 1.1 }}
                aria-label="Close image"
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
