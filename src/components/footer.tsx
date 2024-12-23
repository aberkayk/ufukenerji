import { navbarItems } from "@/lib/constants";
import LogoWhite from "../../public/logo.png";

import { Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Navbar");
  const y = useTranslations("Footer");

  return (
    <div className="w-full bg-brand-green">
      <div className="w-full xl:container flex gap-8 flex-col py-12 px-8">
        {/* Top Info */}
        {/* <div className="w-full flex gap-10 flex-col justify-center items-center text-center lg:hidden">
          <h1 className="text-white max-w-[500px] text-2xl font-bold">
            UFUK ENERJİ ELEKTRİK <br /> ÜRETİM A.Ş.
          </h1>
        </div> */}
        <div className="flex lg:hidden relative max-w-64 self-center">
          <Image src={LogoWhite} alt={"Logo"} />
        </div>
        {/* Bottom Contact and Links */}
        <div className="w-full flex justify-between text-white">
          {/* Contact */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 lg:max-w-56 text-sm lg:text-base">
            <h5 className="text-lg md:text-xl lg:text-2xl">
              {y("contact")}
            </h5>
            <p className="flex gap-4 font-light text-white/70">
              <Mail className="shrink-0" />
              ufukenerji@guclugrup.com
            </p>
            <p className="flex gap-4 font-light text-white/70">
              <Phone className="shrink-0" />0 (266) 597 10 52
            </p>
            <p className="flex gap-4 font-light text-white/70">
              <Printer className="shrink-0" />0 (266) 597 10 36
            </p>
            <p className="flex gap-4 font-light text-white/70">
              <MapPin className="shrink-0" />
              Soğucak Mah. Soğucak Sokak NO:77 Mustafakemalpaşa/BURSA
            </p>
          </div>
          {/* Logo and Info after lg */}
          {/* <div className="hidden lg:flex gap-6 flex-col justify-center items-center text-center w-1/3 max-w-56">
            <h1 className="text-white max-w-[500px] text-3xl font-bold leading-relaxed">
              UFUK ENERJİ ELEKTRİK ÜRETİM A.Ş.
            </h1>
          </div> */}
          <div className="hidden lg:flex relative max-w-96 self-center">
            <Image src={LogoWhite} alt={"Logo"} />
          </div>
          {/* Links */}
          <div className="hidden md:flex flex-col items-end gap-4 md:w-1/2 lg:w-1/3 lg:max-w-56">
            <h5 className="text-2xl h-8"> </h5>

            {navbarItems.map((item, index) => (
              <Link
                className=" transition text-white/70 hover:text-white capitalize"
                href={item.href}
                key={index.toString()}
              >
                <p>{t(item.label)}</p>
              </Link>
            ))}
          </div>
        </div>

        <Separator className=" bg-text-secondary" />

        <div className="w-full flex flex-col xl:flex-row gap-2 xl:gap-10 justify-between text-xs md:text-sm lg:text-base">
          <p className="text-text-secondary">{y("rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
