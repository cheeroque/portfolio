import Head from 'next/head';

import Hero from '../components/Hero';
import SectionAchievements from '../components/SectionAchievements';
import SectionEducation from '../components/SectionEducation';
import SectionExperience from '../components/SectionExperience';
import SectionProfile from '../components/SectionProfile';
import SectionSkills from '../components/SectionSkills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Yuriy Feschenko – Frontend web developer – Personal Website
        </title>
        <meta
          name="description"
          content="Personal website of Yuriy Feschenko, frontend web developer with 4+ years of experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <SectionProfile />
        <SectionSkills />
        <SectionAchievements />
        <SectionExperience />
        <SectionEducation />
      </main>
    </div>
  );
}
