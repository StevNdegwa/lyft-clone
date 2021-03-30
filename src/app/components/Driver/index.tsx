import React from "react";
import {
    AspectRatio,
    Box,
    Container,
    Flex,
    Heading,
    Link,
    Text,
    useMultiStyleConfig,
    VStack
} from "@chakra-ui/react";

import Links from "./Links";
import TopBar from "../TopBar";
import ApplyToDrive from "./ApplyToDrive";
import Slider from "./Slider";
import Footer from "../Footer";

import Article from "../Article";

import DL_Car from "../../assets/media/images/DL_car.png";
import Bg_Illustration from "../../assets/media/images/Bg_Illustration.jpg";

export default function Driver(): JSX.Element {

    let style = useMultiStyleConfig("Pages", {variant: "driver"});

    React.useEffect(() => {
        document.title = "Become a Driver - Drive with Lyft";
    }, []);

    return (
        <Box>
            <TopBar Links={Links}/>
            <Box h="500px"
                sx={
                    style.main
            }>
                <Container>
                    <Heading as="h4" size="sm">DRIVE TOWARDS WHAT MATTERS</Heading>
                    <Text textStyle="largestText">
                        Want to be your own boss?<br/>
                        Start today.
                    </Text>
                    <Box>
                        <ApplyToDrive/>
                    </Box>
                </Container>
            </Box>
            <Box bgImage={
                    `url('${DL_Car}')`
                }
                sx={
                    style.articles
            }>
                <Container h="100%">
                    <Flex justifyContent="space-between" alignItems="center" width="900px" height="100%">
                        <Article heading="Reliable earnings" w="200px">
                            The Lyft Driver app and its features help you make money you can depend on. When you're ready, cash out instantly.
                            <Box>
                                <Link href="/" variant="highlight">Make money</Link>
                            </Box>
                        </Article>
                        <Article heading="A few necessities" w="200px">
                            You’ll need to meet the age requirement for your region, have a smartphone, and pass an online DMV and background check.                                                                                                                                                                                                                       Requirements vary across cities.
                            <Box>
                                <Link href="/" variant="highlight">Find your city</Link>
                            </Box>
                        </Article>
                        <Article heading="Need a car?" w="200px">
                            Get one when you want from our trusted Express Drive partners. Also included: insurance, maintenance, and unlimited miles to earn with Lyft.
                            <Box>
                                <Link href="/" variant="highlight">Get yours</Link>
                            </Box>
                        </Article>
                    </Flex>
                </Container>
            </Box>
            <Box sx={
                style.howItWorks
            }>
                <Box h="90%">
                    <Box bgImage={
                            `url('${Bg_Illustration}')`
                        }
                        h="calc(100% - 150px)"
                        bgRepeat="no-repeat"
                        bgSize="100% 100%"></Box>
                    <Box h="150px"></Box>
                </Box>
                <Slider sliderStep={"1"}/>
            </Box>
            <Box>
                <Container>
                    <AspectRatio maxW="1200px" ratio={ 16/9 } m="auto">
                        <iframe title="naruto" src="https://www.youtube.com/embed/FX8Ez2WRfsU?autoplay=1&loop=0&rel=0&controls=1&iv_load_policy=3&modestbranding=1" allowFullScreen/>
                    </AspectRatio>
                    <Box paddingLeft="200px" h="200px" paddingTop="50px">
                        <Text textStyle="largerText">Earnings, flexibility, and support</Text>
                        <Text>See how Ivette, Bleejay, Lou, and Ariana use Lyft to drive toward their dreams.</Text>
                    </Box>
                </Container>
            </Box>
            <Box sx={style.feedback}>
                <Container>
                    <VStack>
                        <Text fontSize="3em" textAlign="center" fontWeight="100">“The quality of life that I get from working with Lyft is essential to doing the projects that I love.”</Text>
                        <Text>— Ivette</Text>
                        <Box>LA</Box>
                    </VStack>
                </Container>
            </Box>
            <Footer/>
        </Box>
    )
}
