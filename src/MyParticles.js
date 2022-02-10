import Particles from "react-tsparticles";

function MyParticles() {
  return (
    <Particles
      id="tsparticles"
      options={{
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
            value: "#D3D3D3",
          },
          links: {
            color: "#D3D3D3",
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
              area: 1000,
            },
            value: 50,
            limit: 100,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: false,
            value: 2,
          },
        },
      }}
    />
  );
}

export default MyParticles;
