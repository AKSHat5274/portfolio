import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const metadata = {
    title: 'Akshat Sharma| Portfolio',
    description: 'Akshat Sharma Portfolio',
  };
  return (
    <Html lang="en">
      <Head />
      <title>
        Akshat Sharma| Portfolio
      </title>
      <meta name="description" content={metadata.description}/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
