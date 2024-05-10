import content from "../datas/infos.json";
import Presentation from "../components/home/presentation";
import WhatAbout from "../components/home/whatabout";
import Recommandations from "../components/home/recommandations";
import Fun from "../components/home/fun";
import fs from "fs/promises";
import axios from "axios";

export default function Home({ datas }) {
  return (
    <>
      <Presentation datas={datas} />
      <h3>What about</h3>
      <WhatAbout datas={datas} />
      <h3>Recommandations</h3>
      <Recommandations datas={datas} />
      <h3>Fun Facts</h3>
      <Fun datas={datas} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const jsonData = await fs.readFile("./datas/infos.json", "utf8");
    const datas = JSON.parse(jsonData);
    return {
      props: {
        datas,
      },
    };
  } catch (error) {
    console.error("Failed to read data:", error);
    return {
      props: {
        datas: {},
      },
    };
  }
}
