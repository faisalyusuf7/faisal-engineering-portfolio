const projects = [
  {
    slug: "pentagon-robot",
    title: "Pentagon Robot",
    subtitle: "Five-bar parallel arm pick-and-place automation",
    category: "Robotics",
    year: "2025 - Present",
    role: "Mechanical design, controls integration, prototyping",
    hero: "assets/media/projects/pentagon-robot/expo-poster.jpeg",
    thumbnail: "assets/media/projects/pentagon-robot/expo-poster.jpeg",
    summary:
      "Autonomous five-bar parallel planar robot designed for fast pick-and-place cycles, workspace validation, and low-cost scalable prototyping.",
    challenge:
      "Develop a compact robotic system capable of repeatable object placement while balancing stiffness, speed, cost, and controls complexity.",
    approach:
      "Built the mechanical assembly in SolidWorks, validated motion and link interference, selected dual NEMA 17 stepper motors, and integrated Raspberry Pi and Arduino hardware for inverse kinematics and real-time motor control.",
    outcome:
      "Targeted cycle times under 5 seconds and placement accuracy within +/-0.5 mm while keeping the prototype budget near $350.",
    skills: [
      "SolidWorks",
      "Model-Based Design",
      "Inverse Kinematics",
      "Arduino",
      "Raspberry Pi",
      "Motion Simulation",
      "DFM",
    ],
    stats: [
      { value: "<5s", label: "target cycle time" },
      { value: "+/-0.5 mm", label: "placement target" },
      { value: "$350", label: "prototype budget" },
    ],
    gallery: [
      {
        src: "assets/media/projects/pentagon-robot/expo-poster.jpeg",
        alt: "Faisal presenting the Pentagon Robot project at the UIC Engineering Expo",
      },
      {
        src: "assets/media/projects/pentagon-robot/build-view-1.jpeg",
        alt: "Pentagon Robot prototype front view",
      },
      {
        src: "assets/media/projects/pentagon-robot/build-view-2.jpeg",
        alt: "Pentagon Robot prototype with electronics and mechanism visible",
      },
      {
        src: "assets/media/projects/pentagon-robot/assembly-detail.jpeg",
        alt: "Mechanical assembly detail for the Pentagon Robot",
      },
      {
        src: "assets/media/projects/pentagon-robot/cad-workspace.png",
        alt: "CAD workspace for the five-bar robot",
      },
      {
        src: "assets/media/projects/pentagon-robot/cad-assembly.png",
        alt: "SolidWorks assembly model of the Pentagon Robot",
      },
      {
        src: "assets/media/projects/pentagon-robot/control-layout.png",
        alt: "Controls layout screenshot for the robot system",
      },
    ],
    documents: [
      {
        label: "Project Poster",
        href: "assets/media/projects/pentagon-robot/pentagon-robot-poster.pdf",
      },
    ],
  },
  {
    slug: "ansys-exhaust-manifold",
    title: "ANSYS Exhaust Manifold",
    subtitle: "Thermal-structural simulation study",
    category: "Simulation",
    year: "2025",
    role: "FEA, thermal analysis, report synthesis",
    hero: "assets/media/projects/ansys-exhaust-manifold/elastic-strain-no-convection.png",
    thumbnail: "assets/media/projects/ansys-exhaust-manifold/temperature-with-convection.png",
    summary:
      "ANSYS study comparing exhaust manifold behavior under thermal loading with and without convection and radiation effects.",
    challenge:
      "Understand how heat transfer assumptions change stress, strain, total deformation, and thermal behavior in a manifold-like geometry.",
    approach:
      "Ran thermal and static structural cases, compared contour plots across boundary-condition variants, and documented the engineering interpretation in a report.",
    outcome:
      "Produced a comparison set of simulation outputs that make the effect of convection/radiation assumptions visually and quantitatively reviewable.",
    skills: ["ANSYS", "FEA", "Thermal Analysis", "Structural Analysis", "Engineering Reporting"],
    stats: [
      { value: "12", label: "result plots" },
      { value: "2", label: "boundary-condition sets" },
      { value: "FEA", label: "analysis method" },
    ],
    gallery: [
      {
        src: "assets/media/projects/ansys-exhaust-manifold/elastic-strain-no-convection.png",
        alt: "Equivalent elastic strain result without convection and radiation",
      },
      {
        src: "assets/media/projects/ansys-exhaust-manifold/elastic-strain-with-convection.png",
        alt: "Equivalent elastic strain result with convection and radiation",
      },
      {
        src: "assets/media/projects/ansys-exhaust-manifold/total-deformation-no-convection.png",
        alt: "Total deformation result without convection and radiation",
      },
      {
        src: "assets/media/projects/ansys-exhaust-manifold/total-deformation-with-convection.png",
        alt: "Total deformation result with convection and radiation",
      },
      {
        src: "assets/media/projects/ansys-exhaust-manifold/temperature-no-convection.png",
        alt: "Temperature result without convection and radiation",
      },
      {
        src: "assets/media/projects/ansys-exhaust-manifold/temperature-with-convection.png",
        alt: "Temperature result with convection and radiation",
      },
    ],
  },
  {
    slug: "cantilever-bridge",
    title: "Cantilever Bridge",
    subtitle: "Lightweight bridge design and strain validation",
    category: "Design",
    year: "2025",
    role: "CAD, drawings, structural validation",
    hero: "assets/media/projects/cantilever-bridge/engineering-drawing.jpg",
    thumbnail: "assets/media/projects/cantilever-bridge/bridge-capture.jpg",
    summary:
      "A CAD-driven bridge design exercise combining engineering drawings, geometry refinement, and strain analysis.",
    challenge:
      "Create a bridge geometry that communicates clear manufacturing dimensions while keeping structure and load path in mind.",
    approach:
      "Prepared a dimensioned drawing, generated analysis views, and reviewed strain behavior to connect CAD decisions with structural performance.",
    outcome:
      "Created a readable design package with drawing views and simulation results suitable for engineering review.",
    skills: ["CAD", "Engineering Drawings", "Structural Analysis", "Design Iteration", "GD&T Awareness"],
    stats: [
      { value: "816 mm", label: "main span shown" },
      { value: "200 mm", label: "width shown" },
      { value: "1:96", label: "drawing scale" },
    ],
    gallery: [
      {
        src: "assets/media/projects/cantilever-bridge/engineering-drawing.jpg",
        alt: "Dimensioned engineering drawing for the cantilever bridge",
      },
      {
        src: "assets/media/projects/cantilever-bridge/strain-result.jpg",
        alt: "Bridge strain analysis result",
      },
      {
        src: "assets/media/projects/cantilever-bridge/bridge-capture.jpg",
        alt: "Bridge model capture",
      },
    ],
  },
  {
    slug: "fidget-toy",
    title: "Fidget Toy",
    subtitle: "3D printed tactile mechanism",
    category: "Product Design",
    year: "2025",
    role: "CAD, FDM printing, prototype refinement",
    hero: "assets/media/projects/fidget-toy/printed-prototype.png",
    thumbnail: "assets/media/projects/fidget-toy/printed-prototype.png",
    summary:
      "A compact 3D printed fidget mechanism that explores tactile motion, printability, and ergonomic hand feel.",
    challenge:
      "Design a small interactive object with satisfying motion that could be printed reliably and assembled simply.",
    approach:
      "Modeled the body and track features in CAD, printed the prototype using FDM, and evaluated surface texture, clearances, and usability.",
    outcome:
      "Produced a functional prototype with visible print texture and a sliding interaction built into the part geometry.",
    skills: ["SolidWorks", "FDM 3D Printing", "Prototyping", "Clearance Design", "DFM"],
    stats: [
      { value: "FDM", label: "process" },
      { value: "2", label: "core parts" },
      { value: "CAD", label: "design source" },
    ],
    gallery: [
      {
        src: "assets/media/projects/fidget-toy/printed-prototype.png",
        alt: "Printed fidget toy prototype",
      },
      {
        src: "assets/media/projects/fidget-toy/cad-model.png",
        alt: "CAD model of the fidget toy",
      },
    ],
  },
  {
    slug: "phone-stand",
    title: "Phone Stand",
    subtitle: "Parametric desktop support concept",
    category: "Product Design",
    year: "2025",
    role: "CAD modeling and design refinement",
    hero: "assets/media/projects/phone-stand/cad-render.png",
    thumbnail: "assets/media/projects/phone-stand/cad-render.png",
    summary:
      "A desktop phone stand concept focused on support angle, curved contact geometry, and printable structure.",
    challenge:
      "Create a stable stand geometry that supports a phone cleanly while remaining visually simple and manufacturable.",
    approach:
      "Modeled a curved cradle, base, rear support, rib details, and cable/pass-through features for practical desktop use.",
    outcome:
      "Produced a clean CAD render ready for print planning, tolerance checks, and future physical prototyping.",
    skills: ["SolidWorks", "Product Design", "3D Modeling", "DFM", "Ergonomics"],
    stats: [
      { value: "CAD", label: "current stage" },
      { value: "1", label: "main body" },
      { value: "FDM", label: "planned process" },
    ],
    gallery: [
      {
        src: "assets/media/projects/phone-stand/cad-render.png",
        alt: "CAD render of the phone stand",
      },
    ],
  },
];

const profile = {
  name: "Faisal Yusuf Ughratdar",
  title: "Mechanical Engineering Portfolio",
  location: "Chicago, IL",
  email: "faisalyusufd@gmail.com",
  linkedin: "https://linkedin.com/in/mechengineerfaisal",
  resume: "assets/media/resume/faisal-ughratdar-resume.pdf",
  degree: "B.S. Mechanical Engineering, University of Illinois Chicago",
  graduation: "Expected May 2026",
  summary:
    "Mechanical engineering student at UIC building across robotics, CAD, simulation, manufacturing, and controls. I like projects where the model, the hardware, and the test data all have to agree.",
  skills: [
    "SolidWorks",
    "AutoCAD",
    "ANSYS",
    "Python",
    "MATLAB",
    "C++",
    "Arduino",
    "Raspberry Pi",
    "ROS 2",
    "CNC Machining",
    "FDM 3D Printing",
    "GD&T",
    "FEA",
    "CFD",
    "Thermal Analysis",
  ],
};

window.portfolioData = { projects, profile };
