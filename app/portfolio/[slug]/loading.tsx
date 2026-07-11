// app/portfolio/[slug]/loading.tsx
export default function PortfolioDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
        
      {/* Hero Skeleton */}
      <div className="relative h-[50vh] bg-gray-800">
        <div className="absolute max-w-7xl mx-auto bottom-0 left-0 right-0 p-4">
          <div className="flex gap-3 mb-4">
            <div className="h-8 w-28 bg-gray-600 rounded-full animate-pulse" />
            <div className="h-8 w-24 bg-gray-600 rounded-full animate-pulse" />
          </div>
          <div className="h-10 w-3/4 bg-gray-600 rounded-lg animate-pulse mb-3" />
          <div className="h-6 w-1/2 bg-gray-600 rounded animate-pulse" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
            <div className="h-48 bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}