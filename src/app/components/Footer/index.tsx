import React from "react";
import { Container, Flex, Heading, HStack, Icon, Link, ListItem, Text, UnorderedList, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer(): JSX.Element {

    const styles = useMultiStyleConfig("Footer", {  });

    return (
        <Container sx={styles.wrapper}>
            <Flex justify="space-around">
                <UnorderedList styleType="none">
                    <Heading as="h3" size="md">DRIVER</Heading>
                    <ListItem></ListItem>
                    <ListItem><Link href="/">Become a Driver</Link></ListItem>
                    <ListItem><Link href="/">Cities</Link></ListItem>
                    <ListItem><Link href="/">Help</Link></ListItem>
                    <ListItem><Link href="/">Safety</Link></ListItem>
                    <ListItem><Link href="/">Express Drive</Link></ListItem>
                    <ListItem><Link href="/">Application Requirements</Link></ListItem>
                    <ListItem><Link href="/">Insurance</Link></ListItem>
                    <ListItem><Link href="/">Earnings</Link></ListItem>
                    <ListItem><Link href="/">Bonus</Link></ListItem>
                    <ListItem><Link href="/">Lyft Rewards</Link></ListItem>
                    <ListItem><Link href="/">Jobs</Link></ListItem>
                    <ListItem><Link href="/">Hub</Link></ListItem>
                </UnorderedList>
                <UnorderedList styleType="none">
                    <Heading as="h3" size="md">RIDER</Heading>
                    <ListItem></ListItem>
                    <ListItem><Link href="/">Get a Ride</Link></ListItem>
                    <ListItem><Link href="/">Business Profile</Link></ListItem>
                    <ListItem><Link href="/">Cities</Link></ListItem>
                    <ListItem><Link href="/">Help</Link></ListItem>
                    <ListItem><Link href="/">Safety</Link></ListItem>
                    <ListItem><Link href="/">Rewards</Link></ListItem>
                    <ListItem><Link href="/">Events</Link></ListItem>
                    <ListItem><Link href="/">Fare Estimates</Link></ListItem>
                    <ListItem><Link href="/">Airports</Link></ListItem>
                    <ListItem><Link href="/">Gift Cards</Link></ListItem>
                    <ListItem><Link href="/">Donate</Link></ListItem>
                    <ListItem><Link href="/">Blog</Link></ListItem>
                </UnorderedList>
                <UnorderedList styleType="none">
                    <Heading as="h3" size="md">LYFT</Heading>
                    <ListItem></ListItem>
                    <ListItem><Link href="/">LyftUp</Link></ListItem>
                    <ListItem><Link href="/">Careers</Link></ListItem>
                    <ListItem><Link href="/">Business</Link></ListItem>
                    <ListItem><Link href="/">Seft Driving</Link></ListItem>
                    <ListItem><Link href="/">Developers</Link></ListItem>
                    <ListItem><Link href="/">Bikes</Link></ListItem>
                    <ListItem><Link href="/">Scooters</Link></ListItem>
                    <ListItem><Link href="/">Rentals</Link></ListItem>
                    <ListItem><Link href="/">Press</Link></ListItem>
                    <ListItem><Link href="/">Investor Relations</Link></ListItem>
                </UnorderedList>
                <VStack>
                    <Link variant="button" w="100%">Lyft driver app</Link>
                    <Link variant="button" w="100%">Lyft rider app</Link>
                    <Link variant="button" w="100%">Ride on web</Link>
                </VStack>
            </Flex>
            <Flex justify="flex-end" h="80px">
                <HStack spacing="20px" fontSize="12px">
                    <Link href="/">Terms</Link>
                    <Link href="/">Privacy</Link>
                    <Text>&copy; 2021 Lyft, Inc</Text>
                    <Text>CPUC ID No. TCP0032513-P</Text>
                    <Icon as={FaFacebook}/>
                    <Icon as={FaTwitter}/>
                </HStack>
            </Flex>
        </Container>
    )
}
