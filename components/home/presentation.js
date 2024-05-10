import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Presentation({ datas }) {
  let X_MAX = -60;
  let X_MIN = -40;
  let Y_MAX = -60;
  let Y_MIN = -40;
  let [positionX, setPositionX] = useState((X_MAX + X_MIN) / 2);
  let [positionY, setPositionY] = useState((Y_MAX + Y_MIN) / 2);
  const mouveImg = (e) => {
    let d = document.querySelector(".profilPicture");

    if (e.pageX < d.offsetLeft + d.offsetWidth / 2 && positionX < X_MIN)
      setPositionX((positionX) => positionX + 1);
    else if (e.pageX > d.offsetLeft + d.offsetWidth / 2 && positionX > X_MAX)
      setPositionX((positionX) => positionX - 1);

    if (e.pageY < d.offsetTop + d.offsetHeight / 2 && positionY < Y_MIN)
      setPositionY((positionY) => positionY + 1);
    else if (e.pageY > d.offsetTop + d.offsetHeight / 2 && positionY > Y_MAX) {
      setPositionY((positionY) => positionY - 1);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", mouveImg);
    return () => {
      document.body.removeEventListener("mousemove", mouveImg);
    };
  }, [positionX, positionY]);

  return (
    <div className="presentation">
      <div className="profilPicture">
        <Image
          priority
          src="/images/profile.png"
          layout="fixed"
          height={600}
          width={400}
          alt="profile"
          objectPosition={`${positionX}px ${positionY}px`}
          quality={100}
        />
      </div>
      <div className="description">
        <h2>{datas.work}</h2>
        <h1>
          {datas.surname} {datas.name}
        </h1>
        <p>{datas.presentation}</p>
        <div className="buttons">
          <Link href="/files/cv.pdf">
            <a className="borderBlue">Download CV</a>
          </Link>
          {/* <Link href='/' ><a className='borderWhite'>Contact</a></Link> */}
        </div>
      </div>
    </div>
  );
}
