export default function Loading() {
  return (
    <div aria-busy="true" className="p-6 max-w-7xl mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-40 bg-gray-200 rounded" />
        <div className="h-24 bg-gray-200 rounded" />
        <div className="h-24 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
