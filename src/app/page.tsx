export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light">
            Welcome to your Next.js application
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
            This is a simple Hello World page built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-red-700 font-medium shadow-sm">
              Next.js 15
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-pink-700 font-medium shadow-sm">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-rose-700 font-medium shadow-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="mt-8">
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
}