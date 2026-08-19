import { QueryErrorResetBoundary, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import ProductGrid from "#/components/products/grid/productGrid";
import ProductGridError from "#/components/products/grid/productGridError";
import ProductGridSkeleton from "#/components/products/grid/productGridSkeleton";
import { getProducts } from "#/lib/api/dummyJson";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <ProductGridError onRetry={resetErrorBoundary} />
          )}
        >
          <Suspense fallback={<ProductGridSkeleton />}>
            <Products />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

function Products() {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return <ProductGrid products={data.products} />;
}
