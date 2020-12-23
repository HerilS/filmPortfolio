import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    aboveFold: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      height: "100vh",
      background: "#ECECEC",
      position: "relative",
    },
    header: {
      fontFamily: "DM Serif Display, sans-serif",
      fontSize: "6rem",
      maxWidth: "50rem",
      lineHeight: "6.5rem",
    },
    paragraph: {
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.2rem",
      maxWidth: "40rem",
    },
    aboveFoldTextBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    aboveFoldIcon: {
      fontSize: "3.2rem",
      color: "black",
    },
    aboveFoldButton: {
      marginTop: "-1rem",
      marginLeft: "-1rem",
    },
    forestContainer: {
      backgroundImage: "url('/forest.jpg')",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    aboveFoldTextBoxInner: {
      marginRight: '7.5rem',
    }
  })
);
export default function index() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldTextBox}>
            <div className={classes.aboveFoldTextBoxInner}>
              <div className={classes.header}>
                Creating films and Marketing Them.
              </div>
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tincidunt lacus sit amet faucibus rutrum. Cras venenatis turpis
                leo, vitae finibus lectus malesuada vitae.
              </p>
              <div>
                <IconButton className={classes.aboveFoldButton}>
                  <PlayCircleOutlineIcon className={classes.aboveFoldIcon} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className={classes.forestContainer}>
          </div>
        </div>
        <div className={classes.belowFold}></div>
      </div>
    </Layout>
  );
}
