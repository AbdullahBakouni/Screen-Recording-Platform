import VideoDetailHeader from "@/components/VideoDetailHeader";
import VideoInfo from "@/components/VideoInfo";
import VideoPlayer from "@/components/VideoPlayer";
import { getTranscript, getVideoById } from "@/lib/actions/video";
import { redirect } from "next/navigation";


const page = async ({ params }: Params) => {
  const { video_id } = await params;

  const { user, video } = await getVideoById(video_id);
   const transcript = await getTranscript(video_id);
  if (!video) redirect("/404");
  return (
    <main className="wrapper page">
      
      <VideoDetailHeader
        title={video.title}
        createdAt={video.createdAt}
        userImg={user?.image}
        username={user?.name}
        videoId={video.videoId}
        ownerId={video.userId}
        visibility={video.visibility}
        thumbnailUrl={video.thumbnailUrl}
      />
     
      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={video.videoId} />
        </div>
         <VideoInfo
          transcript={transcript}
          title={video.title}
          createdAt={video.createdAt}
          description={video.description}
          videoId={video_id}
          videoUrl={video.videoUrl}
        />
      </section>
    </main>
  );
};

export default page;
