import { useState } from 'react';
import { Heart } from 'lucide-react';
import RoseDayMoments from './components/RoseDayMoments';
import PersonalizationForm from './components/PersonalizationForm';

function App() {
  const [girlfriendName, setGirlfriendName] = useState('My Love');
  const [senderName, setSenderName] = useState('Your Forever');
  const [customMessage, setCustomMessage] = useState(
    'Every moment with you feels like a beautiful garden in full bloom. You bring color, fragrance, and endless joy to my life. Happy Rose Day!'
  );

  const handleReset = () => {
    setGirlfriendName('My Love');
    setSenderName('Your Forever');
    setCustomMessage(
      'Every moment with you feels like a beautiful garden in full bloom. You bring color, fragrance, and endless joy to my life. Happy Rose Day!'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 border-b border-rose-200/30 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/rose-icon.dim_256x256.png"
              alt="Rose"
              className="h-10 w-10"
              width={40}
              height={40}
            />
            <span className="font-serif text-xl font-semibold text-rose-600">Rose Day</span>
          </div>
          <Heart className="h-6 w-6 fill-rose-500 text-rose-500" />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-rose-200/30 bg-gradient-to-br from-rose-50 via-cream-50 to-blush-50 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-6">
                <h1 className="font-serif text-4xl font-bold leading-tight text-rose-900 md:text-5xl lg:text-6xl">
                  Happy Rose Day
                  <br />
                  <span className="text-rose-600">{girlfriendName}</span>
                </h1>
                <p className="text-lg leading-relaxed text-rose-800/90 md:text-xl">
                  {customMessage}
                </p>
                <p className="font-serif text-xl italic text-rose-700">
                  With all my love,
                  <br />
                  <span className="font-semibold">{senderName}</span>
                </p>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/rose-hero.dim_1600x900.png"
                  alt="Beautiful roses"
                  className="h-auto w-full rounded-2xl shadow-2xl"
                  width={800}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personalization Section */}
        <section className="border-b border-rose-200/30 bg-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <PersonalizationForm
              girlfriendName={girlfriendName}
              setGirlfriendName={setGirlfriendName}
              senderName={senderName}
              setSenderName={setSenderName}
              customMessage={customMessage}
              setCustomMessage={setCustomMessage}
              onReset={handleReset}
            />
          </div>
        </section>

        {/* Rose Day Moments Section */}
        <section className="bg-gradient-to-br from-blush-50 via-cream-50 to-rose-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-3 font-serif text-3xl font-bold text-rose-900 md:text-4xl">
                Our Rose Day Moments
              </h2>
              <p className="text-lg text-rose-700">
                Click each card to reveal a special message
              </p>
            </div>
            <RoseDayMoments />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-rose-200/30 bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-rose-700">
            © 2026. Built with{' '}
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-rose-300 underline-offset-2 transition-colors hover:text-rose-900"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
