import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <img src="/path/to/your/photo.jpg" alt="Your Name" />
      <p>  Hi, I'm Ikran Ahmed! I'm a passionate web developer with experience in building modern,
  responsive, and user-friendly applications. I recently specialize in React, JavaScript, and front-end
  development. When I'm not designing websites, I enjoy learning new things like food recipes.</p>
    </motion.section>
  );
}
