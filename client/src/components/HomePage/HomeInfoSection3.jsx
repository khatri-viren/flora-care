/* eslint-disable react/no-unescaped-entities */
import productimg from "../../assets/product_13.png";
import { motion } from "framer-motion";

export default function HomeInfoSection3() {
  return (
    <section className="mx-16 lg:grid lg:grid-cols-2 text-udark  my-32 py-5">
      <motion.div
        className="leftSide mx-auto hidden lg:block"
        initial={{ translateX: -50, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { ease: "easeInOut", duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <img src={productimg} alt="" className="max-h-[500px]" />
      </motion.div>
      <motion.div
        className="rightSide flex flex-col my-auto mx-5 space-y-5"
        initial={{ translateX: 50, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { ease: "easeInOut", duration: 1.5 },
        }}
        viewport={{ once: true }}
      >
        <div>
          <h5 className="text-3xl font-bold">
            Expert Device Installation Services
          </h5>
          <p className="font-light text-sm my-3">
            Our team of skilled technicians will ensure seamless installation
            and setup of our IoT-based monitoring devices. We handle all the
            technical aspects, so you can focus on reaping the benefits.
          </p>
        </div>
        <div>
          <h5 className="text-3xl font-bold">Data Monitoring Solutions</h5>
          <p className="font-light text-sm my-3">
            With our advanced data collection capabilities, we provide real-time
            monitoring of your plants' vital metrics. Stay informed about their
            health, growth, and environmental conditions at all times.
          </p>
        </div>
        <div>
          <h5 className="text-3xl font-bold">
            Analytics Consultation Services
          </h5>
          <p className="font-light text-sm my-3">
            Unlock the power of data with our analytics consultation services.
            Our experts will help you interpret the insights gathered from your
            plant monitoring, enabling you to make data-driven decisions for
            optimal growth and resource management.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
