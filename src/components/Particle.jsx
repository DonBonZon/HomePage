import React from "react";
import Particles from "react-tsparticles";

export default function Particle({ id, className, style }) {
  return (
    <Particles
      id={id}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        preset: "Stars",
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#3f3d56",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            value: 80,
          },
          opacity: {
            value: 0.8,
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
      className={className}
      style={style}
    />
  );
}
