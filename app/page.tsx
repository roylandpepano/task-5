"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
   hidden: { opacity: 0, y: 24 },
   show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
   },
});

export default function Home() {
   const gallery: Array<
      | { type: "image"; src: string; alt: string }
      | { type: "text"; content: string }
   > = [
      { type: "image", src: "/images/img1.png", alt: "Gallery image 1" },
      {
         type: "text",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      },
      { type: "image", src: "/images/img2.jpeg", alt: "Gallery image 2" },
      {
         type: "text",
         content:
            "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      },
      { type: "image", src: "/images/img3.jpeg", alt: "Gallery image 3" },
      {
         type: "text",
         content:
            "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      },
      { type: "image", src: "/images/img4.jpeg", alt: "Gallery image 4" },
      {
         type: "text",
         content:
            "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.",
      },
   ];

   return (
      <div className="relative">
         {/* Hero Section */}
         <section id="hero" className="container mx-auto px-6 py-24 max-w-6xl">
            <h2 className="text-xs uppercase tracking-wide mb-6 font-medium text-foreground/60">
               This is the Hero section
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <motion.h1
                     variants={fadeUp(0)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="text-4xl md:text-5xl font-semibold leading-tight"
                  >
                     This is a Heading
                  </motion.h1>
                  <motion.p
                     variants={fadeUp(0.1)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="text-lg text-foreground/70 max-w-prose"
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer nec odio. Praesent libero. Sed cursus ante dapibus
                     diam.
                  </motion.p>
                  <motion.div
                     variants={fadeUp(0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                  >
                     <Link
                        href="#testimonials"
                        className="hover:cursor-pointer inline-block rounded-md bg-foreground text-background dark:bg-white dark:text-black text-sm px-6 py-2 font-semibold shadow hover:bg-foreground/80 dark:hover:bg-white/80 transition-colors duration-200"
                        type="button"
                     >
                        This is a Call To Action
                     </Link>
                  </motion.div>
               </div>
               <motion.div
                  variants={fadeUp(0.15)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10"
               >
                  <Image
                     src="/images/testimonials/img1.jpeg"
                     alt="Hero image"
                     fill
                     priority
                     className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                  />
               </motion.div>
            </div>
         </section>

         {/* Testimonials Section */}
         <section
            id="testimonials"
            className="container mx-auto px-6 py-24 max-w-6xl"
         >
            <h2 className="text-xs uppercase tracking-wide mb-12 font-medium text-foreground/60">
               This is the Testimonial section
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { src: "/images/testimonials/img1.jpeg", alt: "Person 1" },
                  { src: "/images/testimonials/img2.jpeg", alt: "Person 2" },
                  { src: "/images/testimonials/img3.jpeg", alt: "Person 3" },
               ].map((person, idx) => (
                  <motion.div
                     key={person.src}
                     variants={fadeUp((idx + 1) * 0.1)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="rounded-xl border border-black/10 dark:border-white/10 p-6 flex flex-col gap-4 bg-background/50 backdrop-blur"
                  >
                     <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
                           <Image
                              src={person.src}
                              alt={person.alt}
                              fill
                              className="object-cover transition-transform duration-500 ease-out will-change-transform hover:scale-110"
                           />
                        </div>
                        <div className="text-sm font-medium">
                           This is a Name
                        </div>
                     </div>
                     <p className="text-sm leading-relaxed text-foreground/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                     </p>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* Gallery Section */}
         <section
            id="gallery"
            className="container mx-auto px-6 py-24 max-w-6xl"
         >
            <h2 className="text-xs uppercase tracking-wide mb-12 font-medium text-foreground/60">
               This is the Gallery section
            </h2>
            <div className="space-y-16">
               {/* Row 1: Photo - Text */}
               <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                     variants={fadeUp(0)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10"
                  >
                     <Image
                        src="/images/gallery/img1.png"
                        alt="Gallery image 1"
                        fill
                        className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                     />
                  </motion.div>
                  <motion.div
                     variants={fadeUp(0.05)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="flex items-center"
                  >
                     <p className="text-base font-medium">
                        This is a Gallery Text
                     </p>
                  </motion.div>
               </div>
               {/* Row 2: Text - Photo */}
               <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                     variants={fadeUp(0.1)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="flex items-center order-1 md:order-1"
                  >
                     <p className="text-base font-medium">
                        This is a Gallery Text
                     </p>
                  </motion.div>
                  <motion.div
                     variants={fadeUp(0.15)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 order-2 md:order-2"
                  >
                     <Image
                        src="/images/gallery/img2.jpeg"
                        alt="Gallery image 2"
                        fill
                        className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                     />
                  </motion.div>
               </div>
               {/* Row 3: Photo - Text */}
               <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                     variants={fadeUp(0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10"
                  >
                     <Image
                        src="/images/gallery/img3.jpeg"
                        alt="Gallery image 3"
                        fill
                        className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                     />
                  </motion.div>
                  <motion.div
                     variants={fadeUp(0.25)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="flex items-center"
                  >
                     <p className="text-base font-medium">
                        This is a Gallery Text
                     </p>
                  </motion.div>
               </div>
               {/* Row 4: Text - Photo */}
               <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                     variants={fadeUp(0.3)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="flex items-center order-1 md:order-1"
                  >
                     <p className="text-base font-medium">
                        This is a Gallery Text
                     </p>
                  </motion.div>
                  <motion.div
                     variants={fadeUp(0.35)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="group relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 order-2 md:order-2"
                  >
                     <Image
                        src="/images/gallery/img4.jpeg"
                        alt="Gallery image 4"
                        fill
                        className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                     />
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
