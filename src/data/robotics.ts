export const roboticsProjects = [
  {
    id: "black-mamba",
    title: "Black Mamba",
    category: "Fixed-wing UAV",
    status: "Prototype · Wicrypt Labs",
    kind: "aircraft",
    description:
      "Control-surface actuation for an MQ-9-inspired fixed-wing prototype, translating stick inputs into servo movement.",
    details: [
      "Configured MG90 servos for manual control-surface actuation.",
      "Integrated a DXW D3536 1200KV brushless motor and 90 A ESC for propulsion.",
      "Focused on direct manual control; no telemetry or autonomous-flight claim.",
    ],
    tags: ["Aircraft controls", "MG90 servos", "Brushless propulsion"],
  },
  {
    id: "robot-arm",
    title: "Five-axis robotic arm",
    category: "Robotic manipulation",
    status: "In development · Wicrypt Labs",
    kind: "arm",
    description:
      "Team development of a stepper-actuated arm with interchangeable five-finger hand and gripper tooling.",
    details: [
      "Modelled planetary gearing: an 8:1 base reduction and a two-stage 64:1 reduction for the load-bearing joint.",
      "Designed around 1.8 N·m and 3 N·m steppers, with servo actuation on the remaining three axes.",
      "A 10 kg payload at 1 m is a design target, pending physical validation.",
    ],
    tags: ["FreeCAD", "Inventor", "Planetary gearing"],
  },
  {
    id: "gun-turret",
    title: "Two-axis gun turret prototype",
    category: "Electromechanical design",
    status: "Prototype · Wicrypt Labs",
    kind: "board",
    description:
      "Mechanical design and electronics work on a two-axis turret prototype, from gear systems and joints to CAD modelling and simulation.",
    details: [
      "Designed and modelled the mechanical assembly in FreeCAD and Autodesk Inventor, including gearing and joints.",
      "Designed a KiCad PCB integrating TMC2209 stepper drivers, a 16-channel servo controller, and Arduino command handling.",
      "Explored simulation and visualisation as part of prototype development.",
    ],
    tags: ["FreeCAD", "Inventor", "KiCad", "Motion control"],
  },
  {
    id: "embedded-control",
    title: "Embedded motion control",
    category: "Electronics & integration",
    status: "PCB design · Wicrypt Labs",
    kind: "board",
    description:
      "An integrated control-board design for a two-axis electromechanical prototype supporting industrial robot-arm exploration for metal arc 3D printing.",
    details: [
      "Designed the PCB in KiCad with TMC2209 stepper drivers, a 16-channel servo controller, and Arduino command handling.",
      "Explored distributed image capture with Raspberry Pi Zero and Jetson Orin Nano, using OpenCV and YOLOv8.",
      "Mechanical CAD work also includes a two-axis turret prototype; contributions cover gearing, joints, electronics, and simulation.",
    ],
    tags: ["KiCad", "TMC2209", "Arduino", "Computer vision"],
  },
  {
    id: "simulation",
    title: "From simulation to motion",
    category: "Simulation & learning",
    status: "Research · Wicrypt Labs",
    kind: "arm",
    description:
      "Exploring robot-arm motion, visualisation, and reinforcement learning as a foundation for a simulation-to-hardware workflow.",
    details: [
      "Used ROS 2 Jazzy, Gazebo Harmonic, MoveIt, and RViz2 on Ubuntu for simulation and visualisation.",
      "Explored PPO policies for pick-and-place tasks and end-effector positioning for metal 3D printing.",
      "Studying pose, coordinate frames, inverse kinematics, Jacobians, trajectories, and feedback control; also exploring SLAM.",
    ],
    tags: ["ROS 2", "Gazebo", "MoveIt", "Python / PPO"],
  },
  {
    id: "fpv",
    title: "5-inch FPV quadcopter",
    category: "Personal build",
    status: "In progress · Personal project",
    kind: "drone",
    description:
      "Building an FPV quadcopter, from flight-controller and ESC integration to the camera, video transmitter, and goggles.",
    details: [
      "Integrating a Readytosky F4 V3S Plus flight controller with a separate ESC board.",
      "Configured Betaflight and FlySky radio inputs.",
      "Checked receiver response, motor operation, and receiver failsafe behaviour during bench setup.",
    ],
    tags: ["Betaflight", "FlySky", "FPV", "Bench integration"],
  },
];

export const roboticsSkills = [
  {
    title: "Mechanical design",
    text: "FreeCAD, Autodesk Inventor, SOLIDWORKS, Blender, planetary gearing, motor actuation.",
  },
  {
    title: "Electronics & embedded",
    text: "KiCad, Arduino, TMC2209, Raspberry Pi Zero, Jetson Orin Nano, servos, steppers, brushless motors and ESCs.",
  },
  {
    title: "Robotics & perception",
    text: "OpenCV, YOLOv8; exploratory ROS 2 Jazzy, Gazebo Harmonic, MoveIt, RViz2, SLAM and PPO.",
  },
  {
    title: "UAV systems",
    text: "Manual aircraft controls, ArduPilot mission planning, Betaflight configuration, flight-controller and sensor integration.",
  },
];
