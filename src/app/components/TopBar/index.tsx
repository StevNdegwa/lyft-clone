import React from "react";
import {ReactSVG} from "react-svg";

import {
    useMultiStyleConfig,
    Box,
    Center,
    Flex,
    HStack,
    Spacer,
    Icon,
    Drawer,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    Container,
    RecursiveCSSObject
} from "@chakra-ui/react";

import {Link} from "react-router-dom";

import {FaBars} from "react-icons/fa";

import Logo from "../../assets/media/logo.svg"

type TopBarProps = {
    Links: React.FC<{ sx: RecursiveCSSObject<{}> }>,

}

const TopBar: React.FC<TopBarProps> = ({ Links }) => {
    const [scroll, setScroll] = React.useState(0);

    const barRef = React.useRef<HTMLDivElement>(null);

    const {isOpen, onOpen, onClose} = useDisclosure();
    const menuRef = React.useRef<HTMLDivElement>(null);

    const styles = useMultiStyleConfig("TopBar", {});

    React.useEffect(() => {
        window.onscroll = () => {
            let s = document.documentElement.scrollTop;
            let bar = barRef.current as HTMLDivElement;
            if (s < scroll) {
                bar.classList.add("sticky");
            }else{
                bar.classList.remove("sticky");
            }
            setScroll(s);
        }
    })

    return (<>
        <Box ref={barRef}
            sx={
                styles.bar
        }>
            <Container>
                <Flex>
                    <Center sx={
                        styles.logo
                    }>
                        <Link to="/">
                            <ReactSVG src={Logo}
                                alt="Lyft Logo"/>
                        </Link>
                    </Center>
                    <Spacer/>
                    <HStack sx={
                        styles.hmenu
                    }>
                        <Links sx={styles.links}/>
                    </HStack>
                    <Box sx={
                        styles.vmenu
                    }>
                        <Center sx={
                                styles.links
                            }
                            ref={menuRef}
                            onClick={onOpen}>
                            <Icon fontSize="2em"
                                as={FaBars}/>
                        </Center>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Drawer isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={menuRef}
            size="full">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerBody>
                        <Links sx={styles.links}/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>)
}

export default TopBar;
