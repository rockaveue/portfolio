import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

type GridItemProps = {
  children: any
  href: string
  title: string
  thumbnail: string
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox>
        <img
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export default GridItem
