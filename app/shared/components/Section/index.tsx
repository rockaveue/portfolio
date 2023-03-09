import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

type SectionProps = {
  children: any
  delay: number
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </MotionBox>
  )
}

export default Section
