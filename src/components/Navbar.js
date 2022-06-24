import React from "react";
import {
    createStyles,
    Header,
    Group,
    Button,
} from "@mantine/core";

function HeaderSearch() {
    const { classes } = useStyles();

    return (
        <Header height={80} className={classes.header} style={{ background: 'linear-gradient(45deg, green, yellow,  blue, red, orange, indigo, violet, red)' }}>
            <div className={classes.inner}>
                <Group>
                    <img src="../assets/CTF-logo.png" alt="logo" height={100} width={100} />
                    <Group ml={50} spacing={5} className={classes.links}>
                        <a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            About
                        </a>
                        <a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            FAQ
                        </a>
                        <a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            Users
                        </a>
                        <a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            Teams
                        </a>
                        <a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            Scoreboard
                        </a><a
                            href="/"
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            Challenges
                        </a>

                    </Group>

                    <Group>

                    </Group>
                    <Button>Register</Button>
                    <Button>Login</Button>
                </Group>
            </div>
        </Header>
    );
}

export default HeaderSearch;

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },



    inner: {
        height: 75,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    links: {
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    //   search: {
    //     [theme.fn.smallerThan("xs")]: {
    //       display: "none",
    //     },
    //   },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },
}));
