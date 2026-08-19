import { Outlet, createRootRoute } from "@tanstack/react-router";

import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import "../styles.css";
import Header from "#/components/shell/header";
import { ProductSearchContext } from "#/lib/productSearch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  const [productSearchQuery, setProductSearchQuery] = useState("");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductSearchContext.Provider value={productSearchQuery}>
          <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Header query={productSearchQuery} onQueryChange={setProductSearchQuery} />
            <div className="py-8">
              <Outlet />
            </div>
          </main>
        </ProductSearchContext.Provider>

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </QueryClientProvider>
    </>
  );
}
