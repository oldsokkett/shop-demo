export default function ProductGridSkeleton() {
  return (
    <div
      className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Загрузка товаров"
      role="status"
    >
      {Array.from({ length: 8 }, (_, index) => (
        <div className="min-w-0 animate-pulse p-4" key={index}>
          <div className="aspect-square w-full bg-muted" />
          <div className="mt-3 h-5 w-3/4 rounded bg-muted" />
          <div className="mt-2 h-5 w-1/3 rounded bg-muted" />
          <div className="mt-3 h-9 w-full rounded-4xl bg-muted" />
        </div>
      ))}
    </div>
  );
}
