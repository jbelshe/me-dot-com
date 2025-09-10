import Card from '@/components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome To Jack&apos;s Website</h1>
        <p className="text-xl md:text-2xl text-gray-600">Give him a break, it&apos;s still a work in progress</p>
      </div>
      
      {/* Who is this man? Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Who is this man?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Me Card */}
          <Card
            title="About Me"
            subtitle="The existential question of self"
            imageSrc="/images/home/who-am-i.png"
            alt="Jack Belshe"
            route="/about"
            aspectRatio="16/9"
          />
          
          {/* Jack's Picks Card */}
          <Card
            title="Jack's Picks"
            subtitle="Get to know our host better with some book and podcast recs"
            imageSrc="/images/home/my_picks.png"
            alt="Jack's Picks"
            route="/jacks-picks"
            aspectRatio="16/9"
          />
        </div>
      </div>
      {/* What has this man done? <div className="grid grid-cols-1 gap-8"> Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-left">What has this man done?</h2>
        <div className="flex justify-center mb-4">
            <Card
              title="Projects"
              subtitle="The things I do for the love of the game"
              imageSrc="/images/home/voronoi_3.png"
              alt="Side Quests"
              route="/projects"
              aspectRatio="4/3"
              className="w-full max-w-lg"
            />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Yes, yes, but HOW has he done this?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/uses" className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl p-6 flex items-center justify-center border border-gray-100">
            <span className="text-lg font-semibold text-gray-800">How</span>
          </Link>
          <Link href="/now" className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl p-6 flex items-center justify-center border border-gray-100">
            <span className="text-lg font-semibold text-gray-800">Now</span>
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-left">What else you got going on?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Woodwork"
            subtitle="What I used to do when I lived in a place with a backyard"
            imageSrc="/images/home/woodwork1.jpeg"
            alt="Woodwork"
            route="/woodwork"
            aspectRatio="16/9"
          />
          <Card
            title="The Great Escape"
            subtitle="This one is my travel blog"
            imageSrc="/images/home/great_escape1.jpeg"
            alt="The Great Escape"
            route="/the-great-escape"
            aspectRatio="16/9"
          />
          <Card
            title="Techno-Blogic"
            subtitle="Coming soon..."
            imageSrc="/images/home/coming_soon.png"
            alt="Techno-Blogic"
            route="/techno-blogic"
            aspectRatio="16/9"
          />
        </div>
      </div>
    </div>
  );
}
