import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { DummyVideos } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <main className="wrapper page">
      <Header subHeader="Public Library" title="All Videos" />
      <section className="video-grid">
       {DummyVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
       ))}
      </section>
    </main>
  );
};

export default Home;
