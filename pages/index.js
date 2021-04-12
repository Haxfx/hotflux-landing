import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-800 font-Poppins h-screen w-screen text-white leading-loose">
      <div className="container mx-auto px-2">
        <Header />

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col my-auto">
            <div className="">
              <div className="bg-brand-white10 inline-flex justify-center items-center rounded-full">
                <div className="bg-white text-black font-semibold rounded-full m-0 py-2 px-4">
                  75% SAVE
                </div>
                <p className="text-white px-4 py-2 pr-6">For Paasweekend</p>
              </div>
            </div>
            <h1 className="lg:text-6xl font-bold pt-8 md:text-6xl text-4xl text-shadow-white">
              Fastest & secure platform to invest in crypto
            </h1>
            <p className="pt-8 md:w-1/2 opacity-70 textShadowMd text-shadow-white">
              Buy and sell, trusted by 10 trillion wallets with over $30 quadrillion in
              transactions.
            </p>
            <div className="pt-8">
              <a
                href="/"
                className="px-5 py-2 bg-brand-white10 rounded-full inline-flex justify-center items-center space-x-2"
              >
                <span className="mx-4 py-1">GIVE US YOUR MONEY</span>
                <span className=" text-sm text-brand-button rounded-full bg-white h-6 w-6 text-center flex justify-center items-center">
                  <img src="/rounded-arrow.svg" alt="rounded arrow" />
                </span>
              </a>
            </div>
          </div>
          <div className="">
            <img src="/bitcoin.svg" alt="btc" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between py-32">
          <div className="flex flex-row space-x-5 justify-center pt-4">
            <div className="bg-brand-white10 h-20 w-20 p-6 rounded-full">
              <img src="/chart.svg" alt="chart" />
            </div>
            <div className="felx flex-col my-auto justify-start space-y-2">
              <h1 className="text-4xl font-bold text-shadow-white">$30B</h1>
              <p className="opacity-80 text-sm text-shadow-white">Double counted transactions</p>
            </div>
          </div>
          <div className="flex flex-row space-x-5 justify-center pt-4">
            <div className="bg-brand-white10 h-20 w-20 p-6 rounded-full">
              <img src="/chart.svg" alt="chart" />
            </div>
            <div className="felx flex-col my-auto justify-start space-y-2">
              <h1 className="text-4xl font-bold text-shadow-white">$30B</h1>
              <p className="opacity-80 text-sm text-shadow-white">Manipulated volume</p>
            </div>
          </div>
          <div className="flex flex-row space-x-5 justify-center pt-4">
            <div className="bg-brand-white10 h-20 w-20 p-6 rounded-full">
              <img src="/chart.svg" alt="chart" />
            </div>
            <div className="felx flex-col my-auto justify-start space-y-2">
              <h1 className="text-4xl font-bold text-shadow-white">$30B</h1>
              <p className="opacity-80 text-sm text-shadow-white">Digital Currency Exchanged</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row  justify-between space-x-6 pb-32">
          <div className="flex flex-col my-auto">
            <img src="/mining.svg" alt="btc" />
          </div>
          <div className="flex flex-col my-auto justify-end items-end">
            <div className="w-full lg:w-4/5 flex flex-col">
              <h1 className="text-5xl font-bold leading-snug text-shadow-white">
                Why you should choose Hotflux
              </h1>
              <p className="text-sm opacity-70 pt-6 text-shadow-white">
                You can experience the next generation cryptocurrency platform. We give you
                financial borders, extra fees, and fake reviews.
              </p>
              <div className="pt-6">
                <a href="/" className="px-6 py-3 bg-brand-white10 rounded-full">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
