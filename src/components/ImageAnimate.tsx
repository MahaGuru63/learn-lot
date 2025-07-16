'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    image: '/images/AI_for_SRM.png',
    title: 'Step 1: Select your product',
    description: 'Browse our wide range and choose what suits you best.',
  },
  {
    image: '/images/AI_for_SRM.png',
    title: 'Step 2: Customize it',
    description: 'Tailor your product to match your preferences.',
  },
  {
    image: '/images/AI_for_SRM.png',
    title: 'Step 3: Order and Relax',
    description: 'Place your order and we’ll deliver it to your doorstep.',
  },
];

export default function ProductExplainAnimation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20">
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="sticky top-32 hidden lg:block">
        <Image
          src={steps[0].image}
          alt="Product"
          width={500}
          height={500}
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}
