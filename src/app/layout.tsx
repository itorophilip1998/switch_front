"use client";
import "@/sass/index.scss";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Loading from "@/components/Loading";
import { Provider } from "react-redux";
import store from "@/store";
import { PrimeReactProvider } from "primereact/api";
import React, { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
 import { ToastContainer } from 'react-toastify';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const queryClient = new QueryClient(); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Switchive</title>
        <meta
          name="description"
          content="Make mobile top-ups, buy gift cards, and pay bills with crypto for more than 14,000 products worldwide in over 170 countries and earn points."
        />
        <meta
          name="keywords"
          content="crypto, mobile top-ups, gift cards, bill payments, crypto payments, global products, crypto points"
        />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
          defer
        ></script>
      </head>

      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PrimeReactProvider>
              {!isMounted ? (
                <Loading />
              ) : (
                <Suspense fallback={<Loading />}>
                 <Header />

                  {children}
                <Footer />
                  
                  </Suspense>
              )}
            </PrimeReactProvider>
          </Provider>
        </QueryClientProvider>

        <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light" 
              />
 
      </body>
    </html>
  );
}


 
