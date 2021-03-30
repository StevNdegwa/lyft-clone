import React from "react";
import { Center, Link, RecursiveCSSObject } from "@chakra-ui/react";

import { Link as Link2 } from "react-router-dom";

const Links: React.FC<{sx: RecursiveCSSObject<{}>}> = ({ sx })=>(
    <>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    RIDER
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    BUSINESS
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    LOGIN
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    SIGNUP
                </Link>
            </Link2>
        </Center>
    </>
);


export default Links;