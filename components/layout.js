import Head from "next/head";
import React from "react";
import Navbar from "./navbar"

const layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <html lang="en" />
        <title>Turni Saha's Film Portfolio</title>
        <meta name="description" content="A Minimal Videographer" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default layout;
