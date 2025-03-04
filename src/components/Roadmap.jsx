import { check2, grid, loading, loading1 } from "../assets"
import { roadmap } from "../constant"
import Button from "./Button"
import Heading from "./Heading"
import Section from "./Section"
import Tagline from "./Tagline"

const Roadmap = () => {
  return (
    <Section id='roadmap' className='overflow-hidden'>
        <div className="container md:pb-10">
            <Heading tag='ready to get started' title='What we are working on'/>
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item)=>{
                    const status = item.status === 'done'? 'Done':'In Progress';
                    return(
                        <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}>
                            <div className="relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15 max">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img src={grid} className="w-full" width={550} height={550} alt="grid"/>
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>
                                        <div className="flex items-center px-4 py-1.5 bg-n-1 rounded text-n-8">
                                            <img src={item.status === 'done'? check2 : loading1} className="mr-2.5" width={16} height={16} alt={status}/>
                                            <div className="tagline">
                                                {status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <img src={item.imageUrl} className="w-full" width={630} height={420} alt={item.title}/>
                                     </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center mt-12 md:mt-[4rem]">
                <Button className=''>Our Roadmap</Button>
            </div>
        </div>
    </Section>
  )
}

export default Roadmap