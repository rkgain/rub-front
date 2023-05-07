import { Card, Text, Group, Badge, createStyles, Button, rem } from '@mantine/core';
import { Grid, Container, Skeleton } from '@mantine/core';

import { useEffect, useState } from 'react'
import axios from '../node_modules/axios/index';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: rem(5),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));

const mockdata = [
    { label: '4 passengers', icon: "" },
    { label: '100 km/h in 4 seconds', icon: "" },
    { label: 'Automatic gearbox', icon: "" }
];
interface Services {
    title: string;
    description: string;
    price: "string",
    duration: string,
}

function FeaturesCard() {

    const [services, setServices] = useState<Services[]>([]);

    const fetchData = () => (
        axios.get<Services[]>("https://rubapi.vercel.app/api/services").then((res) => { setServices(res.data) })
    )

    useEffect(() => {
        fetchData();
        return () => { }
    }, [])

    console.log(services);

    const { classes } = useStyles();

    if (services.length == 0)
        return <>
            <Grid mt={40} p={60}>
                {mockdata.map((item, index) => (
                    <Grid.Col xs={4} key={item.label + index}>
                        <Skeleton height={15} mb={12} width="60%" radius="xl" />
                        <Skeleton height={8} mt={30} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={16} mt={10} width="30%" radius="xl" />
                        <Skeleton height={12} mt={12} width="70%" radius="xl" />

                    </Grid.Col>
                ))}

            </Grid>
        </>

    return (
        <Container my="md">
            <Grid>
                {services.map((item, index) => (
                    <Grid.Col xs={4} key={index}><Card withBorder radius="md" className={classes.card}>
                        <Group position="apart" mt="md">
                            <div>
                                <Text fw={600}>{item.title}</Text>
                            </div>

                        </Group>

                        <Card.Section className={classes.section} mt="md">
                            <Text fz="sm" c="dimmed">
                                {item.description}
                            </Text>

                            <Group spacing={8} mt={8} mb={8}>
                                <Badge variant="outline"> <Text fz="sm" fw={500} sx={{ lineHeight: 1 }}>
                                    {item.duration} Hours
                                </Text>
                                </Badge>
                            </Group>
                        </Card.Section>

                        <Card.Section className={classes.section}>
                            <Group spacing={30}>
                                <div>
                                    <Text fz="xl" fw={600} sx={{ lineHeight: 1 }}>
                                        ₹ {item.price}
                                    </Text>
                                    <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                                        per month
               </Text>
                                </div>

                                <Button radius="xl" style={{ flex: 1 }}>
                                    Order Now
             </Button>
                            </Group>
                        </Card.Section>
                    </Card>
                    </Grid.Col>

                )
                )}
            </Grid>
        </Container>
    );
}

export default FeaturesCard;