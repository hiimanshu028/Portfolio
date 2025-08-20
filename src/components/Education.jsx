import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3
            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="max-h-full min-h-screen flex flex-col justify-center px-4 md:px-10" id="education">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                Education
            </h2>
            <div className="h-1 w-20 mb-8 bg-white"></div>

            <motion.div
                className="space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between">
                            {/* Year */}
                            <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                                {edu.yearRange}
                            </div>

                            {/* Card */}
                            <div className="md:w-3/4 mb-10">
                                <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                                    <h2 className="text-xl mb-2">{edu.title}</h2>
                                    <p className="mb-4 text-sm italic">{edu.location}</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        {edu.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Education
