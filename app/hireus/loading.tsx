// app/hire/loading.tsx
export default function HireLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="bg-[#f8f9fc] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-10 w-48 bg-gray-200 rounded-full animate-pulse" />
              <div className="space-y-3">
                <div className="h-14 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-14 w-1/2 bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 w-32 bg-gray-200 rounded-full animate-pulse" />
                ))}
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Benefits Grid Skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="h-10 w-48 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-12 w-96 bg-gray-200 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4 animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}