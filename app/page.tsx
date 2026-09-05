export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-100">
      
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-[50vh] text-center px-6 overflow-hidden pt-12">
        {/* Subtle background glow - muted green */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 mb-6 relative z-10">
          Hello World, I am <span className="font-mono text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">Maarij</span>
        </h1>
        <p className="text-xl md:text-2xl font-mono text-zinc-500 max-w-2xl relative z-10 mb-8">
          Aspiring Functioning Human_
        </p>

        {/* Social Media Links - Terminal Style */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10 font-mono text-sm">
          <a href="https://github.com/maarijrizvi" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200">
            [ GitHub ]
          </a>
          <a href="https://x.com/maarijrizvii" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200">
            [ X ]
          </a>
          <a href="https://youtube.com/@_shadyy" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200">
            [ YouTube ]
          </a>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-24 relative z-10 mt-12">
        
        {/* About Me Section */}
        <section className="bg-zinc-900/40 border-l-4 border-emerald-500 border-y border-r border-zinc-800 p-8 shadow-lg">
          <h2 className="text-2xl font-mono font-bold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="text-emerald-500">~/</span> about-me
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            I am a technology enthusiast and I love making and tinkering with computers. I am passionate about Linux environments, frequently working with every major distribution like Fedora, Arch and Ubuntu on which I have hands-on experience. I also have a love for Web Development and I specialize in making web apps look and feel sleek, modern and full of personality.
          </p>
        </section>


        {/* Technical Arsenal Section */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-zinc-100 mb-8 flex items-center gap-3">
            <span className="text-emerald-500">~/</span> arsenal
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Card 1 */}
            <li className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-emerald-500/40 transition-colors duration-300">
              <h3 className="text-lg font-mono text-zinc-200 mb-4">./operating-systems</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Linux (Fedora/Arch/Ubuntu)</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Windows</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">MacOS</span>
              </div>
            </li>
            
            {/* Skill Card 2 */}
            <li className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-emerald-500/40 transition-colors duration-300">
              <h3 className="text-lg font-mono text-zinc-200 mb-4">./hardware</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">PC Assembly & Repair</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Laptop Troubleshooting</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">VM Deployment</span>
              </div>
            </li>

            {/* Skill Card 3 */}
            <li className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-emerald-500/40 transition-colors duration-300">
              <h3 className="text-lg font-mono text-zinc-200 mb-4">./window-managers</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Hyprland</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Wayland</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">Bash/Dotfiles</span>
              </div>
            </li>

            {/* Skill Card 4 */}
            <li className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-emerald-500/40 transition-colors duration-300">
              <h3 className="text-lg font-mono text-zinc-200 mb-4">./development</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">HTML/CSS/JS</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">React/Next.js</span>
                <span className="px-3 py-1 bg-black text-emerald-400 border border-emerald-900/50">C/C++</span>
              </div>
            </li>
          </ul>
        </section>
        {/* Linux Ricing Showcase Section */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="text-emerald-500">~/</span> showcase
          </h2>
          <p className="text-lg text-zinc-400 mb-6">
            A look at my custom Hyprland configuration and daily driver workflow.
          </p>
          
          <div className="relative overflow-hidden border border-zinc-800 bg-black shadow-[0_0_30px_-15px_rgba(52,211,153,0.2)]">
            {/* Fake Window Manager Title Bar */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <span className="ml-2 font-mono text-xs text-zinc-500">tty1 - maarij@system:~</span>
            </div>
            {/* Video Container */}
            <div className="aspect-video w-full flex items-center justify-center relative bg-zinc-950">
              <video 
                className="w-full h-full object-cover opacity-90"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/screenrecording-2026-09-05_15-25-50.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="border-t border-zinc-800 border-dashed pt-16">
          <h2 className="text-2xl font-mono font-bold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="text-emerald-500">~/</span> beyond-the-terminal
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-8">
            When I am not optimizing my desktop environment, or building the next billion dollar app, I spend my time getting better at Cricket or play competitive FPS:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/20 p-5 border border-zinc-800/80 hover:bg-zinc-900/60 transition-colors">
              <h4 className="text-zinc-200 font-mono mb-2"> Cricket</h4>
              <p className="text-sm text-zinc-500">Fast bowling all-rounder who could have excelled.</p>
            </div>
            <div className="bg-zinc-900/20 p-5 border border-zinc-800/80 hover:bg-zinc-900/60 transition-colors">
              <h4 className="text-zinc-200 font-mono mb-2"> Gaming</h4>
              <p className="text-sm text-zinc-500">Mostly competitive FPS games like CS2 or just having fun in Minecraft.</p>
            </div>
            <div className="bg-zinc-900/20 p-5 border border-zinc-800/80 hover:bg-zinc-900/60 transition-colors">
              <h4 className="text-zinc-200 font-mono mb-2"> Adventure</h4>
              <p className="text-sm text-zinc-500">Finding remote spots outside the city and going there by motorcycle.</p>
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black text-zinc-600 text-center py-8 font-mono text-sm">
        <p>EOF © 2026 [Maarij Rizvi]. Ready to end capitalism and bring world peace.</p>
      </footer>
    </main>
  );
}