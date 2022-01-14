import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const Home = ({ providers }) => {
  
  return (
    <div className="space-y-10 space-x-10 relative">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative h-10 w-36">
          <Image
            src="https://rb.gy/vtbzlp"
            layout="fill"
            objectFit="contain"
            alt="LinkedIn"
          />
        </div>
        <div className="flex items-center divide-gray-300 sm:divide-x">
          <div className="hidden pr-4 space-x-8 sm:flex">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-x-10">
          <h1 className="text-4xl md:text-5xl text-blue-900/80 max-w-xl font-bold !leading-snug pl-4 xl:pl-0">
            ¡Te damos la bienvenida a tu comunidad profesional!
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl text-gray-700 font-semibold">
                Buscar un empleo
              </h2>
              <ArrowForwardIosRoundedIcon className="text-gray-500" />
            </div>
            <div className="intent">
              <h2 className="text-xl text-gray-700 font-semibold">
                Encontrar a personas que conoces
              </h2>
              <ArrowForwardIosRoundedIcon className="text-gray-500" />
            </div>
            <div className="intent">
              <h2 className="text-xl text-gray-700 font-semibold">
                Adquirir una nueva aptitud
              </h2>
              <ArrowForwardIosRoundedIcon className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80  xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
