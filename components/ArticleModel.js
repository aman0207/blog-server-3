import "/styles/ArticleModel.module.css";

// Material-UI components.
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const ArticleModel = (props) => {
  const image = props.image;
  const title = props.title;
  const summary = props.summary;
  const author = props.author;
  const dateUpdated = props.updated;
  // const imageName = props.imageName;  // serves as 'alt' property value for card-media.

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Card Image"
          // alt={imageName}
          image={image}
          title={title}
          height="200vh"
        />
        <CardContent>
          <Typography component="h4" variant="h4">
            {title}
          </Typography>
          <Typography component="p" variant="body2">
            {dateUpdated
              ? new Date(dateUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}{" "}
            by {author}
          </Typography>

          <Typography
            component="p"
            variant="body1"
            className="mildSpacingAtTop"
          >
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
