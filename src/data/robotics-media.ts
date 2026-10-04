export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  caption: string;
  poster?: string;
};
const photo = (file: string, caption: string): ProjectMedia => ({
  type: "image",
  src: `/media/robotics/${file}`,
  caption,
});
const video = (file: string, caption: string): ProjectMedia => ({
  type: "video",
  src: `/media/robotics/${file}.mp4`,
  poster: `/media/robotics/${file}-poster.jpg`,
  caption,
});

export const roboticsMedia: Record<string, ProjectMedia[]> = {
  "black-mamba": [
    video("drone1", "Fixed-wing prototype · outdoor demonstration"),
  ],
  "robot-arm": [
    video("robotarm2", "Robot arm · prototype demonstration"),
    video("robotarmV2", "Robot arm V2 · assembly overview"),
    photo("robotarm1.jpg", "Robotic hand and electronics · workbench setup"),
    video("robothand1", "Five-finger robotic hand · prototype"),
    video("robothanddemo2", "Robotic hand · demonstration"),
    video("Planetarygearbox1", "Planetary gearbox · design walkthrough"),
    photo("planetarygearbox.jpg", "Planetary gearbox · CAD assembly"),
    photo("planetarygear1.jpg", "Planet carrier · FreeCAD model"),
    photo("planetarygear4.jpg", "Gearbox component · CAD detail"),
  ],
  "gun-turret": [
    photo("Turret1.jpg", "Two-axis prototype · joint and motor assembly"),
    photo("TurretCAD.jpg", "Mechanical assembly · exploded CAD view"),
    video("turret1", "Turret prototype · build video 01"),
    video("turret2", "Turret prototype · build video 02"),
    video("TurretCameraTest", "Camera test · prototype documentation"),
  ],
  "embedded-control": [
    photo("circuitboard6.jpg", "PCB layout · board routing"),
    video("PCB2", "PCB design · walkthrough"),
    photo("Circuitboard5.jpg", "Arduino and stepper-driver schematic"),
    photo("Circuitboard4.jpg", "Circuit design · KiCad schematic"),
    photo("Circuitboard2.jpg", "PCB design · component placement"),
    photo("circuitboard1.jpg", "Electronics workbench · prototyping notes"),
  ],
};
