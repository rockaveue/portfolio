import { Box, Flex, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

type WorkGridItemProps = {
  children: any
  id: string
  title: string
  thumbnail: string
}

const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => {
  return (
    <Flex w="100%" justifyContent="center">
      <Box>
        <LinkBox cursor="pointer">
          <img src={thumbnail} alt={title} className="grid-item-thumbnail" />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Box>
    </Flex>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  ></Global>
)

export default WorkGridItem
