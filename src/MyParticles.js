import Particles from "react-tsparticles";

function MyParticles() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#5B89AE",
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ADF5FF",
          },
          links: {
            color: "#ADF5FF",
            distance: 200,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
      }}
    />
  );
}

export default MyParticles;
