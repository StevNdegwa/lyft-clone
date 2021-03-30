import React from "react";
import {
    Box,
    Center,
    Heading,
    Image,
    Text,
    useMultiStyleConfig
} from "@chakra-ui/react";

type ArticleProps = {
    src?: string,
    children: any,
    heading: string,
    w?:string
}

export default function Article({src, children, heading, w} : ArticleProps): JSX.Element {

    const style = useMultiStyleConfig("Article", {});

    return (<Box as="article"
        sx={
            style.wrapper
    } w = {w || "100%"}>
        <Center>
            <Image src={src}
                sx={
                    style.image
                }/>
        </Center>
        <Box sx={
            style.content
        }>
            <Heading as="h3"> {heading}</Heading>
            <Text as="span"> {children} </Text>
        </Box>
    </Box>)
}
