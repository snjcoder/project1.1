import React from "react";
import {
  AppBar,
  Container,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

const AboutUs = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography varient="h5">ABOUT US</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "100px", textAlign: "center" }}>
        <Typography varient="h2">ABOUT US</Typography>
        <br />
        <Typography paragraph>
          Bringing it to the Table: On Farming and Food
        </Typography>
        <Typography paragraph>
          “Why do farmers farm, given their economic adversities on top of the
          many frustrations and difficulties normal to farming? And always the
          answer is: "Love. They must do it for love." Farmers farm for the love
          of farming. They love to watch and nurture the growth of plants. They
          love to live in the presence of animals. They love to work outdoors.
          They love the weather, maybe even when it is making them miserable.
          They love to live where they work and to work where they live. If the
          scale of their farming is small enough, they like to work in the
          company of their children and with the help of their children. They
          love the measure of independence that farm life can still provide. I
          have an idea that a lot of farmers have gone to a lot of trouble
          merely to be self-employed to live at least a part of their lives
          without a boss.” - Wendell Berry
        </Typography>
      </Container>
      <Container>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default AboutUs;
