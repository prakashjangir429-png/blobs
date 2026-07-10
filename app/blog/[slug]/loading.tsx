// app/blog/[slug]/loading.tsx
export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gradient-to-t from-black via-[#0f2a6b]/90 to-white text-white">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl px-4 py-12 pt-24">
            {/* Category & Date */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-24 bg-white/20 rounded-full animate-pulse" />
              <div className="h-8 w-32 bg-white/20 rounded-full animate-pulse" />
            </div>

            {/* Title */}
            <div className="space-y-3 mb-8">
              <div className="h-12 w-full bg-white/20 rounded-lg animate-pulse" />
              <div className="h-12 w-4/5 bg-white/20 rounded-lg animate-pulse" />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-white/20 rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-32 bg-white/20 rounded animate-pulse" />
                <div className="h-4 w-48 bg-white/20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl sm:flex justify-between mx-auto px-4 py-16">
        <div className="space-y-6 w-[70%]">
          {/* Multiple paragraph skeletons */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div
                className="h-5 bg-gray-200 rounded animate-pulse"
                style={{ width: `${85 - (index * 5)}%` }}
              />
              {index % 3 === 0 && (
                <div className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: '70%' }} />
              )}
            </div>
          ))}

          {/* Subheading skeleton */}
          {[...Array(3)].map((_, index) => (
            <div key={`heading-${index}`} className="pt-6 space-y-4">
              <div className="h-8 w-64 bg-gray-300 rounded animate-pulse" />
              <div className="space-y-3">
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-4/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}

          {/* Code block skeleton */}
          <div className="my-8 p-6 bg-gray-100 rounded-xl space-y-3">
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse" />
          </div>

          {/* Image skeleton */}
          <div className="my-8 h-96 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        <div className="max-w-4xl px-4 w=[30%]">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div
                className="h-5 bg-gray-200 rounded animate-pulse"
                style={{ width: `${85 - (index * 5)}%` }}
              />
              {index % 3 === 0 && (
                <div className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: '70%' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related Articles Skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded-lg mx-auto animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}