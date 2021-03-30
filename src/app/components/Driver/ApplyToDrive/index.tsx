import React from "react";

import {
    chakra,
    Button,
    Checkbox,
    HStack,
    Input,
    VStack,
    Link
} from "@chakra-ui/react";

import {useForm} from "react-hook-form";

type ApplyData = {
    mobileNumber: string,
    tsAgree: boolean
}

const ApplyToDrive: React.FC = () => {

    const {register, handleSubmit} = useForm < ApplyData > ();

    const onSubmit = (data : ApplyData) => {
        console.log(data);
    }

    return (<chakra.form w="500px"
        onSubmit={
            handleSubmit(onSubmit)
    }>
        <VStack align="flex-start" spacing="20px">
            <Input ref={
                    register({required: true})
                }
                name="mobileNumber"
                placeholder="Enter mobile phone number*"
                w="300px"
                bg="white"/>
            <HStack>
                <Button type="submit" variant="brand">Apply to drive</Button>
                <Checkbox name="tsAgree" size="lg"
                    ref={register}>I agree to Lyft's <Link to="/">Terms of Service</Link></Checkbox>
            </HStack>
        </VStack>
    </chakra.form>);
}

export default ApplyToDrive;
