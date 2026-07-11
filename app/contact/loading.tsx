// app/contact/loading.tsx
export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
          <div className="h-10 w-40 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="space-y-4 mb-6">
            <div className="h-14 w-3/4 bg-gray-200 rounded-lg mx-auto animate-pulse" />
            <div className="h-14 w-1/2 bg-gray-200 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="h-6 w-2/3 bg-gray-200 rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="flex justify-center gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-36 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Form & Offices Skeleton */}
      <div className="py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl border p-8 space-y-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-64 bg-gray-200 rounded animate-pulse" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
                  <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
                  <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
                </div>
                <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
                <div className="h-32 bg-gray-200 rounded-xl animate-pulse" />
                <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="h-[500px] bg-gray-200 rounded-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}