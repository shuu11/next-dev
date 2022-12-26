import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

// circleなら円形に
const ImageWidthShape = styled(Image)<{ shape?: ImageShape }>`
	border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`

/**
 * シェイプイメージ
 */
const ShapeImage = (props: ShapeImageProps) => {
	const { shape, ...imageProps } = props

	return <ImageWidthShape shape={shape} {...imageProps}></ImageWidthShape>
}

export default ShapeImage
