import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-stone-900 h-screen text-white flex items-center justify-center">
      <motion.h1 initial={{ y: -100 }} animate={{ y: 0 }} className="text-8xl">
        Hello World
      </motion.h1>
    </div>
  );
}

export default App;
