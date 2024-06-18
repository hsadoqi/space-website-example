import {
  About,
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
  Writing
 } from '@/components';


export default function Page() {
  return (
    <main>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Writing />
      <Contact />
    </main>
  );
}
