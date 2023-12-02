export interface GearItem{
  title: string;
  foto: string;
  description: string;
}

export const gearItems: GearItem[] = [
  {
    title: "Lumix GX80",
    foto: "gx80.jpg",
    description: "The Lumix GX80 (GX85 in the US) is a capable small camera and fits perfektly in my Pocket",
  },
  {
    title: "Lumix 20mm f1.7",
    foto: "20mm.jpg",
    description: "My Primary lense is the 20mm from Lumix. It is tiny and the 40mm equivilent suites me very well",
  },
  {
    title: "Olympus 45mm f1.8",
    foto: "45mm.jpg",
    description: "Perfect for Portraits and nice Bokeh but a bit bigger than the 20 mil which is why i use it less than i should",
  },
  {
    title: "Lumix 14mm f2.5",
    foto: "14mm.jpg",
    description: "My newest addition is this 28mm equivilent wide angle lense. Even smaller than the 20mm.",
  }
];
