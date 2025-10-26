"use client";

import { Program, Recording } from "@/db/schema";

export default function RecordingComponent({
  rec,
  play,
}: {
  rec: { recordings: Recording; programs: Program | null };
  play: (props: { src: string; title: string }) => void;
}) {
  if (!rec.recordings.fileUrl) return null;
  return (
    <button
      key={rec.recordings.id}
      onClick={() => {
        play({
          title: `${rec.programs?.name} – ${rec.recordings.episodeTitle}`,
          src: rec.recordings.fileUrl,
        });
      }}
      className="text-left py-1 hover:underline"
    >
      {rec.recordings.episodeTitle}
    </button>
  );
}
