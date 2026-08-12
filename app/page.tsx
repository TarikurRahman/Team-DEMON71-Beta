import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  verification: {
    google: '<meta name="google-site-verification" content="PpYzYYnPqcuRPaarexbZqtGXIZRov7UHxn12qzvIwR4" />',
  },
};

export default function Home() {
  return <HomeClient />;
}
