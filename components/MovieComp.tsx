import { Box, Button, createStyles, Text } from "@mantine/core";
import { FC } from "react";

interface btnProps {
  title: string;
  color: boolean;
}

const useStyles = createStyles((theme) => ({
  box: {
    width: 190,
    height: 180,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: "2%",
    cursor: 'pointer'
  },

  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: 700,
    paddingTop:"40%",
    fontSize:'20px'
  },
}));

const MovieComp: FC<btnProps> = ({ title, color }) => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Box bg={color ? "#0D7490" : "#0F766E"} className={classes.box}>
        <Text className={classes.text}>{title}</Text>
      </Box>
    </>
  );
};

export default MovieComp;
