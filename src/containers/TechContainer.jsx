import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Divider } from '@chakra-ui/react';
import {v4 as uuidv4} from 'uuid';

function TechContainer(props) {
  return (
    <div className='tech-outer-container'>
    <h1>Tech</h1>
    <div className="tech-card-container">
        <Stack spacing='4' direction='row'>
        {props.articles.map((article) => (
                        <Card key={uuidv4()} maxW='sm' minW='sm'>
                            <CardBody>
                                <Image
                                    src={article.multimedia[1].url}
                                    alt={article.title}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{article.title}</Heading>
                                    <Text>
                                        {article.abstract}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                    <a href={article.url} target='_blank' rel="noreferrer">
                                        <Button variant='outline' colorScheme='blue'>
                                            Read More...
                                        </Button>
                                    </a>
                            </CardFooter>
                        </Card>
                    ))}
        </Stack>
    </div>
</div>
  )
}

export default TechContainer