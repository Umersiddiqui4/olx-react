import React, { useState, useEffect } from 'react';
import './App.css';

import FbImageLibrary from 'react-fb-image-grid'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Rotate90DegreesCcw } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const images = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ];
  const [emoji2, setEmoji2] = useState("");
  const [thumb, setThumb] = useState("fa-regular fa-thumbs-up fa-lg");
  const [thumbText, setThumbText] = useState("footerText ");
  const [content, setContent] = useState("contenth");
  const [Text, setText] = useState("Read More");
  const [emojiDisplay, setEmojiDisplay] = useState("unlikeSection");

  const emojiUpdate = (emoji) => {
    console.log(emoji);
    setEmoji2(emoji);
    setThumbText("footerText thumbText ");
    setThumb("fa-regular fa-thumbs-up fa-lg thumb");
    setEmojiDisplay("likeSection");
    if (emoji2 === emoji) {
      setEmojiDisplay("unlikeSection");
      setThumb("fa-regular fa-thumbs-up fa-lg ");
      setThumbText("footerText ");
      setEmoji2("");
      console.log("ok");

    }

  }

  const readMore = () => {
    setContent("content")
    setText("")
    if (content == "content") {
      setContent("contenth")
      setText("Read More")

    }
  }


  return (
    <Card sx={{ maxWidth: 370 }} style={{ borderRadius: "10px" }} className='box' >
      <div>
        <CardHeader className='card-header' style={{ padding: "10px 10px 0 16px " }}
          avatar={
            <Avatar aria-label="recipe"  >

              <CardMedia style={{ position: "absolute", top: "-35px" }}
                component="img"
                height="164"
                image="https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/341030564_256757650150771_896383302149003552_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=dDujTcNyaOcAX9wy-db&_nc_ht=scontent.fkhi28-1.fna&oh=00_AfC8GEXMicQUlbW98pP2Kef7h79errRwzyzFWTiv4jmXlw&oe=659AEC27"
                alt="umer"
              />

            </Avatar>
          }

          action={
            <div style={{ display: 'flex', alignItems: 'center', padding: "10px" }}>
              <IconButton aria-label="settings" >
                <i class="fa-solid fa-ellipsis fa-lg"></i>
              </IconButton>
              <IconButton aria-label="settings" >
                <i className="fa-solid fa-xmark fa-lg"></i>
              </IconButton>
            </div>
          }
          title={

            <CardContent style={{ padding: "0px 0px 0px 0px " }}>
              <Typography style={{ fontSize: "small" }} variant="body2" color="Black">
                <a href='https://www.facebook.com/profile.php?id=100078715268711' style={{ color: "black" }}>  <h4> Umer Siddiqui</h4></a>
              </Typography>
            </CardContent>}
          subheader={

            <CardContent style={{ padding: "0px 0px 0px 0px " }}>
              <Typography style={{ fontSize: "small", padding: "0px", marginTop: "-5px" }} variant="body2" color="gray">
                <h6 title='jan 4,2024.' className='subHeader' style={{ cursor: "pointer", }}> jan 4,2024.<i class="fa-solid fa-earth-americas"></i></h6>
              </Typography>
            </CardContent>}
        />
      </div>
      <CardContent style={{ padding: "10px 10px 10px 16px " }}>
        <Typography style={{ fontSize: "small" }} variant="body2" color="black">
          <div className='show'>
            <b>Brand:</b> {props.brand}
            <br></br>
            <b> Product: </b>{props.title}
            <br></br>
            <b> Category:</b> {props.category}
            <br></br>
            <a onClick={readMore} >{Text}</a>
          </div>
          <div className={content}>
            <b>   Description:</b> {props.description}
            <br></br>
            <b> Rating:</b> {props.rating}
            <br></br>
            <b> Price:</b> {props.price}
            <br></br>
            <b>   DiscountPercentage:</b> {props.discountPercentage}
            <br></br>
            <b> Stock:</b> {props.stock}
            <br></br>
            <a onClick={readMore} >Read Less</a>

          </div>
        </Typography>
      </CardContent>

      <div className='imageGroup'>
        <FbImageLibrary hideOverlay={true} images={props.images} />


      </div>
      <div className="container-fluid justify-content-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
        <CardActions disableSpacing style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #706f6f63', height: '30px', width: '90%' }} className={emojiDisplay}>
          <IconButton aria-label="add to favorites" >

            {/* <div className='moving_emoji'>
          <img  src='./img/1 (1).gif' className='like-image'></img>

          </div> */}
            <div className='divLike'>
              <img className='like-image' src={emoji2}></img>
              <span className="likeText" style={{ fontSize: '1.3rem !important', fontWeight: '700', marginLeft: '5px' }}>You</span>
            </div>


          </IconButton>

        </CardActions>
        <CardActions disableSpacing style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #706f6f63', height: '40px', width: '90%' }}>
          <IconButton className='likebtn' aria-label="add to favorites">
            <i onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true") }} class={thumb} >

            </i>
            <span onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true") }} className={thumbText} style={{ fontSize: '1rem !important', fontWeight: '700', marginLeft: '5px' }}>Like</span>
            <div className='popupEmoji'>
              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true") }} className='emoji1' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true'></img>

              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(6).gif?raw=true") }} className='emoji2' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(6).gif?raw=true'></img>

              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(1).gif?raw=true") }} className='emoji3' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(1).gif?raw=true'></img>

              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(8).gif?raw=true") }} className='emoji4' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(8).gif?raw=true'></img>



              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(3).gif?raw=true") }} className='emoji5' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(3).gif?raw=true'></img>

              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(4).gif?raw=true") }} className='emoji6' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(4).gif?raw=true'></img>

              <img onClick={() => { emojiUpdate("https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(9).gif?raw=true") }} className='emoji7' src='https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(9).gif?raw=true'></img>
            </div>
          </IconButton>
          <IconButton aria-label="comment" style={{ fontSize: "20px !important" }}>
            <i class="fa-regular fa-comment fa-lg"  ></i>
            <span className="footerText" style={{ fontSize: 'larger !important', fontWeight: '700', marginLeft: '5px' }}>Comment</span>
          </IconButton>
          <IconButton aria-label="share">
            <i class="fa-solid fa-share fa-lg"></i>
            <span className="footerText" style={{ fontSize: '28', fontWeight: '700', marginLeft: '5px' }}>Share</span>
          </IconButton>

        </CardActions>
      </div>
    </Card>
  );
}




