import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link } from '@remix-run/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  // padding: 5px 10px 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/ra.png`

  return (
    <Link to="/">
      <LogoBox>
        <Image src={footPrintImg} width={8} height={8} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Dulguun Tuguldur
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
