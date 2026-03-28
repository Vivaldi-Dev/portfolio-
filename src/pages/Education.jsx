import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import collegeImg from '@/assets/education/college_img.jpg'
import schoolImg from '@/assets/education/school_img.jpg'
import bTechPdf from '@/assets/files/education_pdf/B Tech.pdf'
import hsMarkSheetPdf from '@/assets/files/education_pdf/HS MARK SHEET.pdf'

const Education = () => {
  const educationData = [
    {
      school: 'Universidade São Tomás de Moçambique',
      location: 'Maputo, Mozambique',
      duration: '2020 - 2026',
      degree: 'Bachelor’s Degree in Software Development',
      image: collegeImg,
      resultUrl: bTechPdf,
      coursework: [
        'Software Development',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Databases',
        'Operating Systems',
        'Computer Networks'
      ],
      description:
        'Currently completing my degree in Computer Science, with a strong focus on software development. Throughout my studies, I have worked on practical projects that strengthened my skills in building web and mobile applications, as well as understanding core computer science concepts.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.school}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[350px,1fr]">

                <div className="relative h-96 md:h-full">
                  <img
                    src={'/logo100marco.png'}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Award className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-gray-300 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Education
