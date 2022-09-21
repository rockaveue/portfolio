import { Box, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax'

const PortfolioContainer = () => {
  const target = useRef(null)
  const something = useParallax({
    speed: -30,
    targetElement: target.current ?? undefined,
  })

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '1500px',
        position: 'relative',
      }}
      ref={target}
    >
      Box
      <Image
        sx={{
          bgImg: 'url("sl.png")',
          bgSize: 'cover',
          bgPos: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vw',
        }}
      />
      {/* <Parallax
        translateY={[100, 0]}
        style={{
          position: 'absolute',
          top: 0,
          left: '45%',
        }}
      > */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Text fontSize="5xl">hithere</Text>
      </Box>
      {/* </Parallax> */}
      <Box ref={something.ref as React.RefObject<HTMLDivElement>}>
        <Image src="pro2.jpg" sx={{ height: 150, width: 150 }} />
      </Box>
    </Box>
  )
}

export default PortfolioContainer
