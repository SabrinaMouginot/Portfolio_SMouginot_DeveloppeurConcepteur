import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTransition = ({ children, delay = 0.8 }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {showContent && children}
    </motion.div>
  );
};

export default PageTransition;
