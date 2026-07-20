import { Accomplishment, Instrument } from '../types';

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    id: "acc-1",
    text: "Achieved record thermoelectric figure-of-merit zT = 1.18 in MoS2 by engineering sulphur vacancies via MoO3 hole injection — among the highest reported for 2D TMDCs.",
    reference: "Chemical Engineering Journal, 2021"
  },
  {
    id: "acc-2",
    text: "Demonstrated ambipolar Seebeck coefficient in MoS2/MoS2–MoO2 graded composites, enabling reversible p/n switching by junction reciprocation.",
    reference: "The Journal of Physical Chemistry Letters, 2024"
  },
  {
    id: "acc-3",
    text: "Decoupled Seebeck coefficient and electrical conductivity trade-off in MoS2 via controlled out-plane lattice dynamics.",
    reference: "Applied Physics Letters, 2022"
  },
  {
    id: "acc-4",
    text: "Developed flexible thermoelectric nanocomposite based on PEDOT:PSS / Cu12+xSb4S13 / MWCNTs achieving >2x power factor improvement over pristine PEDOT:PSS.",
    reference: "AGH, 2025"
  },
  {
    id: "acc-5",
    text: "Modulated Fermi energy in few-layer MoS2 via metal passivation, achieving enhanced near-IR detectivity for photodetectors.",
    reference: "Journal of Materials Chemistry C, 2024"
  },
  {
    id: "acc-6",
    text: "Demonstrated room-temperature NO2 gas sensing (ppb-level) using vertically grown SnS2 nanosheets and SnS2/SnS 2D heterostructures.",
    reference: "Applied Surface Science & Journal of Alloys and Compounds, 2024"
  },
  {
    id: "acc-7",
    text: "Constructed a bespoke high-temperature Seebeck coefficient (2-probe) and electrical resistivity (4-probe linear) measurement system calibrated to >99% accuracy with constantan standard."
  },
  {
    id: "acc-8",
    text: "First report on preparation and optimization of highly stable densified MoS2/polyaniline composites for temperature dependent transport property measurements."
  },
  {
    id: "acc-9",
    text: "Decoupled trade-off thermoelectric relation in MoS2/polyaniline nanocomposites via optimizing potential barrier height <0.1 eV."
  },
  {
    id: "acc-10",
    text: "Track record on optimization of active sites in nanostructures towards high performance photoelectrode, gas sensing, and photocatalytic applications via defects, surface, and nanoarchitectures engineering."
  },
  {
    id: "acc-11",
    text: "Prepared ultrathin layered nanosheets of MoS2 with optimized thickness of 15-20 nm for high performance photocatalytic applications."
  }
];

export const INSTRUMENTS: Instrument[] = [
  { id: "ins-1", category: "Synthesis", name: "CVD (2-zone & 3-zone)", details: "Growth of 2D TMDCs (MoS2, WS2, MoS2-MoOx, SnS2, 2D heterostructures) — monolayer to bulk, lateral & vertical.", image: "/images/instruments/cvd.png" },
  { id: "ins-2", category: "Synthesis", name: "Hydrothermal & Solution-processed", details: "Synthesis of organic–inorganic & inorganic–inorganic nanocomposites.", image: "/images/instruments/hydrothermal.png" },
  { id: "ins-3", category: "Synthesis", name: "Arc Melting & Ball Milling", details: "Planetary ball milling & alloy fabrication.", image: "/images/instruments/ball_milling.png" },
  { id: "ins-4", category: "Synthesis", name: "Spark-Plasma Sintering (SPS) & Hot Press", details: "Densification and sintering of bulk thermoelectric materials.", image: "/images/instruments/sps.png" },
  { id: "ins-5", category: "Synthesis", name: "Thermal/E-beam Evaporation & Spray Pyrolysis", details: "Thin-film deposition and in-situ polymerization systems.", image: "/images/instruments/evaporation.png" },
  { id: "ins-6", category: "Characterization", name: "ZEM-3 (Thermoelectric Transport)", details: "Measurement of Seebeck coefficient & electrical resistivity (home-built high-temp 2-probe/4-probe system calibrated to >99% accuracy).", image: "/images/instruments/zem3.png" },
  { id: "ins-7", category: "Characterization", name: "LFA 467HT & Van der Pauw", details: "Thermal diffusivity & Hall effect carrier transport measurement systems.", image: "/images/instruments/lfa.png" },
  { id: "ins-8", category: "Characterization", name: "XRD & Raman Spectroscopy", details: "Structural analysis (RINT-Ultima III, LAB-RAM NRS-7100).", image: "/images/instruments/xrd.png" },
  { id: "ins-9", category: "Characterization", name: "FESEM, TEM/STEM & EPMA", details: "Advanced microstructural imaging and elemental mapping (JEOL JSM-7001F, JEOL JEM-2100F, EPMA JEOL JXA-8530F).", image: "/images/instruments/tem.png" },
  { id: "ins-10", category: "Characterization", name: "XPS, UV-Vis & TGA", details: "Surface chemistry, bandgap analysis, and thermal stability (ESCA / Shimadzu Axis Ultra DLD, JASCO V-750, TGA DTG-60A).", image: "/images/instruments/xps.png" },
  { id: "ins-11", category: "Software", name: "Data & Analysis Suites", details: "Origin, MS Office, XPS peak41, GATAN, Image J, XEI-SW, XpertHighScore." }
];
