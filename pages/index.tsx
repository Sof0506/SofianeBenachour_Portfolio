import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { urlFor } from '../sanity'
import { Experience, PageInfo, Project, skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  console.log("pageinfo", pageInfo);
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <Head>
        <title>Sofiane Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
{/*Header */}
<Header socials={socials} />
{/*Hero */}
<section id="hero" className="snap-start">
  <Hero pageInfo={pageInfo}/>
</section>
{/*About */}
<section id="about" className="snap-center">
  <About pageInfo={pageInfo}/>
</section>
{/*Skills */}
<section id="skills" className="snap-start">
  <Skills skills={skills}/>
</section>
{/*Projects */}
<section id="projects" className="snap-start">
  <Projects projects={projects}/>
</section>
{/*Contact-me */}
<section id="contact" className="snap-start">
  <ContactMe/>

</section>
<Link href="#hero">
<footer className="sticky bottom-5 w-full cursor-pointer">
  <div className="flex items-center justify-start">
    <img 
    
    className="hidden md:inline h-12 w-12 animate-pulse
     rounded-full filter grayscale
      hover:grayscale-0 cursor-pointer hover:scale-125 ml-2"
src={urlFor(pageInfo.profilePic).url()}   
 alt="pic" />

  </div>
</footer>
</Link>
    
    </div>
  )
}

export default Home;

export const getStaticProps:GetStaticProps <Props>=async()=>{
  const pageInfo:PageInfo = await fetchPageInfo();
  const skills:skill[] = await fetchSkills();
  const projects:Project[] = await fetchProjects();
  const experiences:Experience[] = await fetchExperience();
  const socials:Social[]= await fetchSocials();
  

  return {
    props: {
      pageInfo,
      skills,
      projects,
      experiences,
      socials,
    },
    revalidate:10,
  }
} 
