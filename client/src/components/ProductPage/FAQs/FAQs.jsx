import Accordian from "./Accordian/Accordian";

const FAQs = () => {
  return (
    <section className="mx-5 lg:mx-20 my-12 pb-12">
      <h4 className="font-bold text-3xl">FAQs</h4>
      <p className="font-light text-sm mt-4">
        Find answers to commonly asked questions about our product, its usage,
        and maintenance.
      </p>
      <hr className="border border-solid border-umedium my-4" />
      <Accordian
        title="Q: How do these devices benefit my plants compared to traditional care methods?"
        content="Smart IoT plant care devices offer real-time monitoring and data analysis, allowing for precise adjustments to watering, lighting, and other conditions. This level of automation and customization is often challenging with traditional methods, leading to optimized plant health."
      />
      <Accordian
        title="Q: Can these devices be used for both indoor and outdoor plants?"
        content="Yes, most of our smart plant care devices are designed to cater to both indoor and outdoor plants. The sensors and features are adaptable to various environments, providing flexibility for users with diverse gardening spaces."
      />
      <Accordian
        title="Q: How do I receive alerts and notifications from the smart devices?"
        content="Alerts and notifications are sent directly to your mobile device through a dedicated app. You can customize the notification settings to receive alerts for specific conditions such as low soil moisture, extreme temperatures, or other parameters based on your plant care preferences."
      />
      <Accordian
        title="Q: Are these devices compatible with other smart home ecosystems, such as Alexa or Google Home?"
        content="Yes, many of our smart plant care devices are compatible with popular smart home platforms like Alexa and Google Home. This integration allows you to seamlessly incorporate plant care into your overall smart home setup and control devices through voice commands."
      />
      <Accordian
        title="Q: Do I need a deep understanding of gardening to use these devices?"
        content="No, these devices are designed to be user-friendly, catering to both beginners and experienced gardeners. The accompanying mobile apps provide intuitive interfaces with simple instructions, making it easy for users of all levels to monitor and care for their plants effectively."
      />
    </section>
  );
};

export default FAQs;
