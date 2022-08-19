import Head from 'next/head'
import Image from 'next/image'
import image from "../assets/gallery.png"
import Navbar from "../components/navbar";
import Link from "next/link";

//Todo - Firebase hook

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-emerald-100 h-screen">
          <Navbar />
          <sec className="w-screen flex h-full">
              <div className="w-1/2 self-center flex flex-col items-center">
                  <h1 className="text-6xl font-bold">
                      IMAGE <br/>
                        GALLERY.
                  </h1>
                  <Link href='/upload'>
                      <button className="bg-red-50 p-6 w-36 m-10 rounded-2xl hover:scale-110">
                          UPLOAD
                      </button>
                  </Link>

              </div>
              <div className="relative w-2/5 h-3/5 self-center ">
                  <div className="absolute w-96 h-96 bg-red-50 rounded-full"></div>
                  <Image
                        src={image}
                        alt="Gallery"
                        layout={'fill'}
                        className="top-20"
                  />
              </div>
          </sec>



      </main>
    </div>
  )
}
