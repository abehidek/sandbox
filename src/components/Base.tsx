import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";

interface Props {
  children: React.ReactNode;
  metaProps?: {
    [key: string]: string;
  };
}

const Base = ({ children, metaProps }: Props) => {
  const router = useRouter();
  const meta = {
    title: "abehidek.me",
    description: "Drafts and guides from my journey as dev",
    type: "website",
    ...metaProps,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://abehidek.me${router.asPath}`}
        />
        <link rel="canonical" href={`https://abehidek.me${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="abehidek.me" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div>
        <NavbarComponent />
      </div>
      <main>
        {children}
        <FooterComponent />
      </main>
    </div>
  );
};

export default Base;
