import React from "react";
import PropTypes from "prop-types";

function Card(props){
    const styles = {
        backgroundColor: props.cardColor,
        // height: 100,
        height: props.height,
        // width: 100
        width: props.width
    }
    return(
        <div style={styles}></div>
    )
    
}
Card.propTypes = {
  // cardColor: PropTypes.string
  // cardColor: PropTypes.string.isRequired,
  cardColor: PropTypes.oneOf(["red", "blue", "green"]).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
  // lern more @ https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
};
Card.defaultProps = {
  cardColor: "blue",
  height: 100,
  width: 100
};

export default Card