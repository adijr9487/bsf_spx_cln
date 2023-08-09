import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Utility/Asset/Logo.svg";
import cover from "../../Utility/Asset/cover.jpg";
import falcon from "../../Utility/Asset/falcon.svg";
import arrow from "../../Utility/Asset/arrow.svg";
import dragon from "../../Utility/Asset/dragon.svg";
import "./Banner.css";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Recent", href: "#" },
  { name: "Launches", href: "#" },
  { name: "About", href: "#" },
];

const data = [
  {
    title: "falcon",
    type: "rockets",
    remark: "we make reusable rockets",
    image: falcon,
  },
  {
    title: "dragon",
    type: "capsules",
    remark: "we make reusable capsules",
    image: dragon,
  },
];

const carouselLength = data.length;

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [leftQueue, setLeftQueue] = useState([]);
  const [transition, setTransition] = useState(false);
  return (
    <div
      style={{
        background: `url(${cover})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div
        className="opacity-60 bg-gray-900"
        style={{ height: "100vh", width: "100%", position: "absolute" }}
      ></div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-full w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-300 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-slate-300 transition-colors hover:text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 transition-all" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:bg-slate-900">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-300 hover:text-white"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <div className="my-4">
          <div className="text-center relative">
            <div className="title">
              <h1
                className="font-bold uppercase tracking-tight text-white sm:text-4xl"
                style={{ letterSpacing: "10px" }}
              >
                {data[currentCarousel].title}
              </h1>
            </div>
            <div className="title absolute w-full" style={{ top: "0" }}>
              {leftQueue.map((item, index) => (
                <h1
                  key={index}
                  className="vanish w-full absolute align-center font-bold uppercase tracking-tight text-white sm:text-4xl"
                  style={{ letterSpacing: "10px" }}
                >
                  {data[item].title}
                </h1>
              ))}
            </div>
            <div
              className="flex justify-between items-center"
              style={{ height: "80vh" }}
            >
              <button
                className="h-full cursor-pointer transition-all hover:bg-opacity-30 hover:bg-slate-950"
                style={{ width: "100px", color: "white" }}
                onClick={() => {
                  setLeftQueue((prev) => [...prev, currentCarousel]);
                  setCurrentCarousel((prev) =>
                    currentCarousel === 0
                      ? data.length - 1
                      : currentCarousel - 1
                  );
                  setTimeout(()=>{
                    setLeftQueue((prev) => {prev.pop(); return prev});
                  }, 800)
                }}
              >
                <img src={arrow} alt="arrow" className="h-8 mx-auto" />
              </button>
              <div className="relative h-full justify-center items-center flex overflow-hidden">
                <img
                  key={data[currentCarousel].title}
                  src={data[currentCarousel].image}
                  alt={data[currentCarousel].title}
                  className="img-appear h-5/6 mx-auto hover:h-full transition-all absolute"
                />
                {leftQueue.length && leftQueue.map((item, index) => (
                  <img
                    key={index}
                    src={data[item].image}
                    alt={data[item].title}
                    className="img-vanish h-5/6 mx-auto hover:h-full transition-all absolute"
                  />
                ))}
                <h1
                  className="sm:text-4xl opacity-60 font-bold spacing-md"
                  style={{
                    color: "#919192",
                    pointerEvents: "none",
                    letterSpacing: "10px",
                  }}
                >
                  WE MAKE REUSABLE {data[currentCarousel].type.toUpperCase()}
                </h1>
              </div>
              <button
                className="h-full cursor-pointer transition-all rotate-180 hover:bg-opacity-30 hover:bg-slate-950"
                style={{ width: "100px", color: "white" }}
                onClick={() => {
                  setLeftQueue((prev) => [...prev, currentCarousel]);
                  setCurrentCarousel((prev) =>
                    currentCarousel === 1 ? 0 : currentCarousel + 1
                  );
                  setTimeout(()=>{
                    setLeftQueue((prev) => {prev.pop(); return prev});
                  }, 800)
                }}
              >
                <img src={arrow} alt="arrow" className="h-8 mx-auto" />
              </button>
            </div>
            <div className="scroll w-full">
              <img
              onClick={()=>{
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth', // Optional: Adds smooth scrolling animation
                })
              }}
                src={arrow}
                alt="arrow"
                className="h-8 mx-auto opacity-60 cursor-pointer"
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}