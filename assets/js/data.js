const projects = [
  {
    slug: "pentagon-robot",
    title: "Pentagon Robot",
    subtitle: "Five-bar parallel arm pick-and-place automation",
    category: "Robotics",
    year: "August 2025 - May 2026",
    role: "Mechanical design, fabrication, controls integration",
    hero: "assets/media/projects/pentagon-robot/expo-poster.jpg",
    thumbnail: "assets/media/projects/pentagon-robot/expo-poster.jpg",
    youtubeId: "VL2kFgpxKj4",
    summary:
      "Low-cost five-bar pick-and-place robot designed and fabricated to transfer ping-pong balls between matrix locations.",
    challenge:
      "Develop a compact robotic system capable of repeatable object placement while balancing stiffness, speed, cost, and controls complexity.",
    approach:
      "Modeled the full assembly in SolidWorks, exported URDF into ROS 2/RViz2 to validate reachability and clearances, and built a hybrid Raspberry Pi 4 plus Arduino UNO/CNC Shield controls architecture.",
    outcome:
      "Targeted cycle times of 10 seconds or less and placement accuracy within +/-0.5 mm while keeping the prototype budget near $350.",
    skills: [
      "SolidWorks",
      "URDF/RViz2",
      "ROS 2",
      "Arduino",
      "Raspberry Pi",
      "CNC Shield",
      "Stepper Motor Control",
      "Sensors",
      "DFM",
    ],
    stats: [
      { value: "<=10s", label: "target cycle time" },
      { value: "+/-0.5 mm", label: "placement target" },
      { value: "$350", label: "prototype budget" },
    ],
    gallery: [
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
        src: "assets/media/projects/pentagon-robot/photo-output.jpg",
        alt: "Pentagon Robot photo collage showing the five-bar arm, end effector, and ping pong ball pick-and-place setup",
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
    slug: "microscopy-image-classification",
    title: "Microscopy Image Classification",
    subtitle: "Python machine-learning workflow for COMI BPAEC images",
    category: "Machine Learning",
    year: "Spring 2026",
    role: "Python modeling, validation, performance analysis",
    hero: "assets/media/projects/microscopy-image-classification/sample-train-images.png",
    thumbnail: "assets/media/projects/microscopy-image-classification/sample-train-images.png",
    summary:
      "Image-classification workflow comparing traditional machine learning, a custom CNN, and transfer learning for microscopy image classes.",
    challenge:
      "Classify 2,079 COMI BPAEC microscopy images across actin, mitochondria, and nucleus classes while reducing leakage risk in the data split.",
    approach:
      "Built a Python pipeline with group-based train, validation, and test splits, then compared Random Forest with PCA, a custom CNN, and ResNet18 transfer learning.",
    outcome:
      "Achieved 95.96% test accuracy and 95.93% macro F1 with Random Forest plus PCA on a 297-image held-out test set.",
    skills: ["Python", "PyTorch", "scikit-learn", "Random Forest", "PCA", "CNN", "ResNet18"],
    stats: [
      { value: "2,079", label: "source images" },
      { value: "95.96%", label: "test accuracy" },
      { value: "95.93%", label: "macro F1" },
    ],
    gallery: [
      {
        src: "assets/media/projects/microscopy-image-classification/model-comparison-chart.png",
        alt: "Model comparison chart for random forest, baseline CNN, and ResNet18 metrics",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/confusion-matrix-comparison.png",
        alt: "Cross-model confusion matrix comparison for microscopy image classification",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/classwise-f1-comparison.png",
        alt: "Classwise F1 score comparison across model types",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/rf-featurization-panel.png",
        alt: "Random forest PCA featurization panel showing original image, resized image, and flattened vector",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/rf-pca-reconstructions.png",
        alt: "PCA reconstruction comparison showing image quality across principal component counts",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/rf-pca-scatter.png",
        alt: "PCA scatter plots comparing train and test image feature projections",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/resnet-gradcam-examples.png",
        alt: "ResNet18 Grad-CAM examples showing attention regions for microscopy image predictions",
      },
      {
        src: "assets/media/projects/microscopy-image-classification/resnet-embedding-projection.png",
        alt: "ResNet18 embedding projection showing class separation across actin, mitochondria, and nucleus",
      },
    ],
  },
  {
    slug: "residential-hvac-load-analysis",
    title: "Residential HVAC Load Analysis",
    subtitle: "Heating and cooling load model for a Chicago residence",
    category: "Thermal",
    year: "Spring 2026",
    role: "HVAC load calculations, heat transfer, Excel modeling",
    hero: "assets/media/projects/residential-hvac-load-analysis/cooling-rts.png",
    thumbnail: "assets/media/projects/residential-hvac-load-analysis/cooling-rts.png",
    summary:
      "Excel-based HVAC load model calculating heating and cooling requirements for a 1,000 ft2 Chicago residence.",
    challenge:
      "Estimate envelope, infiltration, solar, and cooling response loads clearly enough to size residential HVAC capacity.",
    approach:
      "Calculated envelope U-values, effective leakage area infiltration, solar radiation, sol-air temperature, and CTS/RTS cooling response in Excel.",
    outcome:
      "Calculated a peak heating load of 23,148 Btu/h and peak total cooling load of 14,993 Btu/h at 14:00, equivalent to 1.25 tons of cooling capacity.",
    skills: ["Excel", "HVAC Load Calculations", "Heat Transfer", "CTS/RTS Methods", "Solar Loads", "Thermal Analysis"],
    stats: [
      { value: "1,000 ft2", label: "residence modeled" },
      { value: "23,148", label: "Btu/h heating peak" },
      { value: "1.25 tons", label: "cooling capacity" },
    ],
    gallery: [
      {
        src: "assets/media/projects/residential-hvac-load-analysis/cooling-rts.png",
        alt: "Hourly cooling load chart with sensible, latent, and total cooling loads",
      },
      {
        src: "assets/media/projects/residential-hvac-load-analysis/heating-load.png",
        alt: "Peak heating load by building component",
      },
      {
        src: "assets/media/projects/residential-hvac-load-analysis/infiltration.png",
        alt: "Hourly infiltration chart with flow and sensible load",
      },
      {
        src: "assets/media/projects/residential-hvac-load-analysis/sol-air.png",
        alt: "Sol-air temperature by building surface over 24 hours",
      },
      {
        src: "assets/media/projects/residential-hvac-load-analysis/solar.png",
        alt: "Total solar irradiation by surface over 24 hours",
      },
      {
        src: "assets/media/projects/residential-hvac-load-analysis/weather.png",
        alt: "Hourly outdoor design dry-bulb temperature",
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
  graduation: "Graduated May 2026",
  summary:
    "Mechanical engineering graduate from UIC building across robotics, CAD, simulation, HVAC analysis, manufacturing, controls, and data-driven modeling. I like projects where the model, the hardware, and the test data all have to agree.",
  skills: [
    "SolidWorks",
    "AutoCAD",
    "Revit",
    "ANSYS",
    "ANSYS Mechanical/Fluent",
    "Python",
    "MATLAB",
    "C++",
    "PyTorch",
    "scikit-learn",
    "Random Forest",
    "CNN/ResNet18",
    "Excel",
    "Arduino",
    "Raspberry Pi",
    "ROS 2",
    "URDF/RViz2",
    "CNC Shield",
    "CNC Machining",
    "FDM 3D Printing",
    "GD&T",
    "DFM",
    "BOMs",
    "HVAC Load Calculations",
    "Heat Transfer",
    "CTS/RTS Methods",
    "FEA",
    "CFD",
  ],
};

window.portfolioData = { projects, profile };
