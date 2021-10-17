import Head from 'next/head'
import { MetaTags } from '../components/metatags'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>UI Challenges | Yog Panjarale</title>
        <link rel="icon" href="/owl.svg" />
        <MetaTags title="UI Challenges | Yog Panjarale" description="          Bunch of UI's I try to make as a challenge for myself." image_url="https://discord.com/assets/c2d98046d6f9b642f56a494bcbc76321.svg" url="https://ui-challenges.yogpanjarale.com"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="#">
            UI Challenges!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          {/* {' '} */}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          Bunch of UI's I try to make as a challenge for myself.
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.yogpanjarale.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made By{' '}
          <span className="text-blue-600 font-semibold ml-1">Yog Panjarale</span>
        </a>
      </footer>
    </div>
  )
}
