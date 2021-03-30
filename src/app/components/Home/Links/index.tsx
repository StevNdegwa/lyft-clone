import React from "react";
import {Avatar, Center, Link, RecursiveCSSObject} from "@chakra-ui/react";

import {Link as Link2} from "react-router-dom";

const Links: React.FC<{ sx: RecursiveCSSObject<{}> }> = ({sx}) => {
    return (<>
        <Center sx ={ sx}>
            <Link2 to="/driver">
                <Link as="span">
                    Driver
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    Rider
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Link2 to="/">
                <Link as="span">
                    Business
                </Link>
            </Link2>
        </Center>
        <Center sx={sx}>
            <Avatar/>
        </Center>
    </>)
}

export default Links;
