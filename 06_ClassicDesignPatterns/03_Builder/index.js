import PiechurBuilder from "./Solution/PiechurBuilder";
import Garnizon from "./Solution/Garnizon";
import StrzelecBuilder from "./Solution/StrzelecBuilder";
import KonnyBuilder from "./Solution/KonnyBuilder";

let piechurBuilder = new PiechurBuilder("Tomasz", 34);
let strzelecBuilder = new StrzelecBuilder("Jan", 22);
let konnyBuilder = new KonnyBuilder("Mikołaj", 30);
let garnizon = new Garnizon(piechurBuilder);
const piechur = garnizon.recrutTraining();
console.log(piechur);
