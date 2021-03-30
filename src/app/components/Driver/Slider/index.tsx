import React from "react";
import {
    Box,
    Center,
    Heading,
    HStack,
    Icon,
    Link,
    Text
} from "@chakra-ui/react";


import {FaGenderless, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft} from "react-icons/fa";


import frame_8 from "../../../assets/media/images/frame-8.c7273ad8.png";
import iPhoneX_01 from "../../../assets/media/images/iPhoneX_01-Get_Started_EN_2x.jpg";
import iPhoneX_02 from "../../../assets/media/images/iPhone_02-Offline_Home_EN_1x__1_.jpg";
import iPhoneX_03 from "../../../assets/media/images/iPhone_03-Accept_Ride_EN_1x.jpg";
import iPhoneX_04 from "../../../assets/media/images/iPhone_04-Earnings_EN_2x.jpg";

const Slider: React.FC < {
    sliderStep: string
} > = ({ sliderStep }) => {

    const [step, setSliderStep] = React.useState<string>(sliderStep);

    const leftSLide = ()=>{
        setSliderStep((s) => {
            let n = parseInt(s);
            n--;
            return `${
                Math.max(1, n)
            }`;
        })
    }

    const rightSlide = ()=>{
        setSliderStep((s) => {
            let n = parseInt(s);
            n++;
            return `${
                Math.min(4, n)
            }`;
        })
    }

    const kdEl = React.useCallback((evt)=>{
        switch(evt.code){
            case "ArrowRight":
                rightSlide();
                break;
            case "ArrowLeft":
                leftSLide();
                break;
            default:
                return;
        }
    }, []);

    React.useEffect(()=>{
        window.addEventListener("keydown", kdEl);
        return ()=>window.removeEventListener("keydown", kdEl);
    }, []);

    return (
        <>
            <Box className="stepsWrapper">
                {
                showSlide(step)
            } </Box>
            <Box h="10%">
                <Center h="100%">
                    <HStack>
                        <Icon as={FaRegArrowAltCircleLeft}
                            onClick={leftSLide}
                            width="1.5em"
                            height="1.5em"/>
                        <Icon as={FaGenderless}/>
                        <Icon as={FaGenderless}/>
                        <Icon as={FaGenderless}/>
                        <Icon as={FaGenderless}/>
                        <Icon as={FaRegArrowAltCircleRight}
                            onClick={rightSlide}
                            width="1.5em"
                            height="1.5em"/>
                    </HStack>
                </Center>
            </Box>
        </>
    )
}

type SlideProps = {
    step: number,
    details: JSX.Element,
    image: string
}

const Slide: React.FC < SlideProps > = ({ step, details, image }) => (
        <Box className="slide step one"
            bgImage={
                `url('${frame_8}')`
        }>
            <Box bgImage={
                    `url('${image}')`
                }
                h="100%"
                w="100%"
                bgPosition="center"
                bgSize="280px 460px"
                position="absolute" top="0" left="0"></Box>
            <Center className="p q">How does Lyft work?</Center>
            <Center className="p a">
                <Box w="100%">
                    <Heading as="h5" size="sm">STEP {step}</Heading>
                    {details} </Box>
            </Center>
        </Box>
    );

    function showSlide(step:string) : JSX.Element {
        switch (step) {
            case "1":
                return <Slide step={1}
                    details={
                        <Text>
                    <Link href="/">Apply to drive</Link>and get approved</Text>
                    }       
                    image={iPhoneX_01}/>
            case "2":
                return <Slide step={2}
                    details={
                        <Text>
                    Get the app on<Link href="/">Apple App Store</Link>or Google Play</Text>
                    }
                    image={iPhoneX_02}/>
            case "3":
                return <Slide step={3}
                    details={
                        <Text>Accept rides and earn money</Text>
                    }
                    image={iPhoneX_03}/>
            case "4":
                return <Slide step={4}
                    details={
                        <Text>Cash out instantly with Express Pay<br/><i>Express Pay is only available in the US</i></Text>
                    }
                    image={iPhoneX_04}/>
            default:
                return <Box/>;
                break;
        }
    }

export default Slider;
