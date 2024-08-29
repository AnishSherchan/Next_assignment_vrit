// app/hoc/withAuth.tsx
"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/app/components/LoadingSpinner/LoadingSpinner";

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return function WithAuth(props: any) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Get the authentication token from cookies
      const token = Cookies.get("isAuthenticated");

      if (!token) {
        // Redirect to login page if not authenticated
        redirect("/login");
      } else {
        setIsAuthenticated(true);
      }

      // Set loading to false once the authentication check is complete
      setLoading(false);
    }, []);

    // Show loading spinner or nothing while checking authentication
    if (loading) {
      return <Loading />; // or a loading spinner component
    }

    // Render the wrapped component if authenticated
    if (!isAuthenticated) {
      return null; // or handle redirection in a more user-friendly way
    }

    return <WrappedComponent {...props} />;
  };
};
