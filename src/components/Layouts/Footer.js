import {
    Text,
    Stack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2022 Resumegen. Designed By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/'} target={'_blank'} color={'blue.600'}>Sanjeevkumar</Text>
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/Sanjeevkumar-woks'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
