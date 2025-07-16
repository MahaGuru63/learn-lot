import Image from 'next/image';
import { Container } from 'postcss';

const SectionTwo = () => {
  return ( <div className='container'>
  <div class="flex p-10 font-sans">
  <div className="lg:w-1/2 lg:pt-24 sm:w-full">
  <Image src='/images/rfi-image.png' // Path relative to the 'public' directory
        width={600} // Specify the width of the image
        height={600} // Specify the height of the image
      />
   
  </div>
  <div className="lg:w-1/2 sm:w-full mt-64">
  <h1 className='font-bold text-4xl mb-3'>Streamline your
response strategy</h1>
   <p className='text-2xl font-light leading-10'>Responsive helps proposal teams craft higher-quality compliant RFPs, RFIs, and more in less time with AI.</p>
   <button className='bg-blue-950 text-lime-400 font-semibold py-2 px-8 rounded-full mt-6 hover:bg-blue-900'>REQUEST DEMO</button>
  </div>
</div>

<div class="flex p-10 font-sans">
  <div className="lg:w-1/2 lg:pt-24 sm:w-full mt-16">
 
  <h1 className='font-bold text-4xl mb-3'>Turn your RFIs into a strategic advantage</h1>
   <p className='text-2xl font-light leading-10'>RFIs getting in the way of your sales process? With our automated RFI software solution, you’ll respond faster with greater accuracy and better quality — increasing your odds of taking the next step and winning the deal.</p>
   
  </div>

  <div className="lg:w-1/2 sm:w-full">
  <Image src='/images/rfi-r.png' // Path relative to the 'public' directory
        width={600} // Specify the width of the image
        height={600} // Specify the height of the image
      />
   
</div>
</div>
  </div>
 
  );
};

export default SectionTwo;