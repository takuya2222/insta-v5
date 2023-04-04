import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      {/* left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            layout="fill"
            alt="logo-img"
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            layout="fill"
            alt="logo-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            className="object-contain"
          />
        </div>

        <h1>Right sides</h1>
      </div>

      {/* middle */}

      {/* right */}
    </>
  );
}
