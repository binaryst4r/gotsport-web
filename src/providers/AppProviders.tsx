import * as React from "react";
import { AuthProvider } from "./AuthContext";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AlertBannerProvider } from "./alerts/AlertBannerProvider";

const queryClient = new QueryClient();

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AlertBannerProvider>
          {children}
        </AlertBannerProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default AppProviders;
