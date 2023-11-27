import React from 'react'
import {
    Box,
    Heading,
    Container,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel/>
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    borderBottom={'2px solid'}
                    // fit-content will make border upto the heading space
                    w={'fit-content'}
                    // auto will make it center
                    m={'auto'}
                >
                    Services
                </Heading>
                <Stack h='full' p={'4'} alignItems={'center'}
                    // for small screen or phone , we prefer column and for big screen we use row
                    direction={['column', 'row']}>
                        {/* responsive , we use array syntax and put 1st value  for small screen i.e mobile and 2nd value is for windows */}
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
                    <Text
                        letterSpacing={"widest"}
                        lineHeight={'170%'}
                        p={['4', '8']}
                        textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione quis autem
                        accusantium doloribus placeat, ab sunt, itaque tempore nostrum aliquam! Optio,
                        illo tempora quo eligendi tempore similique architecto quis atque facere? Amet
                        suscipit facere officia saepe pariatur, odit hic, quas voluptatibus officiis
                        modi sit adipisci! Amet atque quaerat esse deleniti excepturi cumque repellat
                        nam autem recusandae ipsum molestias tempore, blanditiis delectus laboriosam
                        earum molestiae minus iure illo odio aut unde. Vel, repellat est magnam
                        distinctio ad itaque perferendis error iste quia consectetur consequatur
                        explicabo nulla. Tempore voluptate, minus atque rem alias dolorem odit possimus
                        vero ratione beatae? Amet, ex laboriosam soluta dolorem ipsa quis debitis
                        minima, pariatur, illum temporibus ut numquam sequi itaque fugit cupiditate
                        ullam quas repudiandae nisi Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Et unde, voluptatum quidem asperiores dolorum fugit nisi possimus totam
                        laborum in.
                    </Text>
                </Stack>

            </Container>

        </Box>
    )
};

const MyCarousel = () => (
    <Carousel
        autoPlay="autoPlay"
        infiniteLoop="infiniteLoop"
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}>
        <Box w='full' h={'100vh'}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life is awesome
            </Heading>
        </Box>

    </Carousel>
)
export default Home;