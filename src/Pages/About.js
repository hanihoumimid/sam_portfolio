import { Link } from "react-router-dom";
import React from 'react';
import { label } from "framer-motion/client";

import they_worked_with_me from '../img/worked.webp';

const About = () => {
  const acc = [
    { value: '2+', label: 'Years of Experience' },
    { value: '8+', label: 'Successful Projects' },
    { value: '8+', label: 'Happy Clients' }
  ];

  const career = [
    { value: '4+', label: 'Years of Studies' },
    { value: '3', label: 'Different Jobs'},
    { value: '3', label: 'Years as Social Manager'},
    { value: '500+', label: 'Persons at my events'},
    { value: '800+', label: 'Followers on social media'},
    { value: '1', label: 'Year as president'}
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        
        {/* About Me Section */}
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About me
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              My name is Sam PAROT. I'm an apprentice graphic designer based in Montréal.
            </p>
          </div>

          <div className="space-y-10">
            <h2 className="text-2xl font-semibold text-white">Here is my story:</h2>
            
            <div className="space-y-8">
              <p className="text-lg leading-8 text-gray-300">
                Having always wanted to travel, I left my French countryside to go to Montréal. Now, I am a student in aeronautical design at the Ecole Nationale d'aérotechnique. In addition to my studies, I am the president of the student association at this school, for which I was also the graphic designer and social manager for 2 years.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Passionate about design, I learn through many projects. I have had the opportunity to create t-shirts and hoodies, numerous posters, and even keychains. All guided by passion.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                My next objective is to study design and winning experience. I would love to learn more about communication and work in some events.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Currently, I am the social manager of L'Coin, a gaming space in Montréal, and also of La Marockinerie, a venue for evening events in Montréal.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Always in search of new experiences and with a thirst for learning, I would be delighted to collaborate with you!
              </p>
            </div>
          </div>
        </div>

        {/* Accomplishments Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My accomplishments
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {acc.map((stat, index) => (
                <div key={index} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-3xl font-semibold leading-7 text-white">{stat.value}</dt>
                  <dd className="text-base leading-6 text-gray-300">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My career
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {career.map((stat, index) => (
                <div key={index} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-3xl font-semibold leading-7 text-white">{stat.value}</dt>
                  <dd className="text-base leading-6 text-gray-300">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* They Trusted Me Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              They trusted me
            </h2>
            
            <div className="mt-12 rounded-lg overflow-hidden">
              <img 
                src={they_worked_with_me} 
                alt="Companies and clients I've worked with" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;