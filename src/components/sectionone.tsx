import Image from 'next/image';
import { Container } from 'postcss';

const SectionOne = () => {
  return ( <div className='container'>
  <div className="flex p-5 font-sans">
  <div className="lg:w-1/2 lg:pt-24 sm:w-full">
    <h4 className='font-bold text-md mb-3'>AI-DRIVEN RFP SOFTWARE</h4>
   <h1 className='font-bold text-4xl mb-3'>Streamline your
response strategy</h1>
   <p className='text-2xl font-light leading-10'>Responsive helps proposal teams craft higher-quality compliant RFPs, RFIs, and more in less time with AI.</p>
   <button className='bg-blue-950 text-lime-400 font-semibold py-2 px-8 rounded-full mt-6 hover:bg-blue-900'>REQUEST DEMO</button>
  </div>
  <div className="lg:w-1/2 sm:w-full">
  <Image src='/images/AI_for_SRM.png' // Path relative to the 'public' directory
        width={600} // Specify the width of the image
        height={600} // Specify the height of the image
      />
  </div>
</div>
<div className='w-full'>
  <h1 className='font-bold text-4xl mb-8 text-center'>Trusted by nearly 2,000 companies globally</h1></div>
  </div>
  
  );
};

export default SectionOne;