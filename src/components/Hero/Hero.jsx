import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to BistroBlog</h1>
            <p className="py-6">
            BistroBlog is the bridge between the complex world of technology and the curious minds eager to understand it
            </p>
            <button className="btn btn-primary">Read Blog</button>
            <button className="btn btn-primary">Bookmarks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
