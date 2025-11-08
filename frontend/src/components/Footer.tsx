import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer 
      className="w-full fixed bottom-0 left-0 z-10 p-4 
                 bg-black/30 backdrop-blur-md"
    >
      <div className="container mx-auto text-center text-space-light text-sm">
        <p className="mb-2">
          ©️ 2025 – Criado por Anderson de Souza Bezerra | Explorando o universo digital
        </p>
        
        
        <motion.p
          className="font-orbitron text-xs"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 2, repeat: Infinity }}
        >
          O universo é infinito — assim como as possibilidades do código.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;