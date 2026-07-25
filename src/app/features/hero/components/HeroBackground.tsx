"use client";

export default function Background() {
  return (
    <>
      {/* grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* blue */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* cyan */}

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

      {/* purple */}

      <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[140px]" />
    </>
  );
}