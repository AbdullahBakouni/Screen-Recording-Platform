import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { DummyVideos } from "@/constants";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <main className="wrapper page">
      <Header
        subHeader="aboodbak70@gmail.com"
        title="Abdullah Bakouni"
        userImg="/assets/images/dummy.jpg"
      />
       <section className="video-grid">
         {DummyVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
       ))}
      </section>
    </main>
  );
};

export default Page;
