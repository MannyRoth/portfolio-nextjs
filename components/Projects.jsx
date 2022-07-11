import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/socialMedia.png';
import cryptoImg from '../public/assets/projects/nbaMVP.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/chess.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Social Media'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Django, Python'
          />
          <ProjectItem
            title='Predicting NBA MVP'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Python, Data Modeling'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Chess'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Python, Pygame'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
