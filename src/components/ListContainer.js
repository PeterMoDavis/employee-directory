import React from "react";

const styles = {
  div: {
    borderTop: "solid 1px rgb(223, 227, 235) ",
  },
};
function ListContainer() {
  return (
    <div
      className="container d-flex mt-4 pt-2 justify-content-around"
      style={styles.div}
    >
      <p>Image</p>
      <p>Name</p>
      <p>Phone</p>
      <p>Email</p>
      <p>DOB</p>
    </div>
  );
}

export default ListContainer;
