import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techStackItems = useMemo(() => [
    { src: './logos/html.svg', alt: 'html' },
    { src: './logos/css.svg', alt: 'css' },
    { src: './logos/javascript.svg', alt: 'javascript' },
    { src: './logos/typescript.svg', alt: 'typescript' },
    { src: './logos/react.svg', alt: 'react.js' },
    { src: './logos/nextjs.svg', alt: 'next.js' },
    { src: './logos/redux.svg', alt: 'redux' },
    { src: './logos/node.svg', alt: 'node.js' },
    { src: './logos/git.svg', alt: 'git' },
    { src: './logos/graphql.svg', alt: 'graphql' },
    { src: './logos/scss.svg', alt: 'scss' },
    { src: './logos/tailwind.svg', alt: 'tailwind' },
    { src: './logos/java.svg', alt: 'java' },
    { src: './logos/spring.svg', alt: 'spring' },
    { src: './logos/mysql.svg', alt: 'mysql' },
    { src: './logos/postgre.svg', alt: 'postgres' },
  ], []);

  return (
    <div className="flex flex-wrap justify-between lg:gap-x-10 lg:gap-y-8 md:gap-x-20 md:gap-y-8 xs:gap-x-1.5 xs:gap-y-4">
      {techStackItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center card-bg neon-card-bg p-4 m-0 rounded-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            opacity: {
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: 'easeInOut',
              delay: index * 0.2,
            },
          }}
        >
          <img src={item.src} alt={item.alt} className="lg:w-12 md:w-20 xs:w-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
