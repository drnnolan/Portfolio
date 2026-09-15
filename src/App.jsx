import useTheme from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-[920px] px-4 sm:px-6">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  );
}
