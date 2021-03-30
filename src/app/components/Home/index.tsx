import React from "react";

import {
    Avatar,
    Box,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";

import TopBar from "./../TopBar";
import Article from "../Article";
import Footer from "../Footer";
import Links from "./Links";

import Woman_wearing_a_mask_ from "../../assets/media/images/Woman_wearing_a_mask_.jpg";
import Driver_wearing_a_mask_in_the_car from "../../assets/media/images/Driver_wearing_a_mask_in_the_car.jpg";
import Rentals_illustration from "../../assets/media/images/Rentals_illustration.png";
import Health_Safety_illustration from "../../assets/media/images/Health_Safety_illustration.jpg";

const Home: React.FC <{}> = () => {

    React.useEffect(()=>{
        document.title = "Become a Driver or Get a Ride Now";
    }, []);

    return (
        <Box>
            <TopBar Links={Links}/>
            <Container>
                <HStack>
                    <Box w="50%" h="900px" paddingTop="100px">
                        <Box fontWeight="600">READY WHEN YOU ARE</Box>
                        <Box textStyle="largestText">
                            <Text>
                                Wherever you’re headed, let’s get there together.
                            </Text>
                        </Box>
                        <HStack>
                            <Link href="/" variant="button" highlighted="true">
                                Sign up to ride
                            </Link>
                            <Link href="/" variant="button">
                                Apply to drive
                            </Link>
                        </HStack>
                    </Box>
                    <Box w="45%" position="relative" h="900px">
                        <Box w="85%" position="absolute" top="40px" left="40%">
                            <Image src={Woman_wearing_a_mask_}/>
                        </Box>
                        <Box w="100%" position="absolute" top="450px">
                            <Image src={Driver_wearing_a_mask_in_the_car}/>
                        </Box>
                    </Box>
                </HStack>
            </Container>
            <Container py="100px">
                <Box w="100%">
                    <Heading as="h4" fontSize="1.2em">LATEST UPDATES</Heading>
                </Box>
                <Flex>
                    <Box w="42%">
                        <Article src={Rentals_illustration}
                            heading="Renting a car is a breeze">
                            Road trips. Errands. Weekend escapes. 
                            The possibilities are limitless. And now you can get started right from the Lyft app (or web). 
                            Say goodbye to lengthy paperwork and long waits. Just reserve, pick up your rental, and go.
                            <Text>
                                <Link href="/" variant="highlight">Learn more about Lyft Rentals</Link>
                            </Text>
                        </Article>
                    </Box>
                    <Center w="16%">
                    <Divider orientation="vertical" h="400px"/>
                    </Center>
                    <Box w="42%">
                        <Article src={Health_Safety_illustration}
                            heading="Health and safety ride first">
                            Ride easy, knowing that Lyft takes your well-being as seriously as you do. 
                            All riders and drivers must agree to a few simple rules to help keep everyone safe, 
                            from wearing a face covering to keeping the car (and their hands) clean.
                            <Text>
                                <Link href="/" variant="highlight">Learn more about health safety</Link>
                            </Text>
                        </Article>
                    </Box>
                </Flex>
            </Container>
            <Footer/>
        </Box>
    )
}

export default Home;
