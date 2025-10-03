import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PageTransition = ({ children, delay = 0.8 }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {showContent && children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default PageTransition;
