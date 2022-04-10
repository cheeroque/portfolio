import Head from 'next/head';

import Hero from '../components/Hero';
import SectionProfile from '../components/SectionProfile';

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
      </main>
    </div>
  );
}
