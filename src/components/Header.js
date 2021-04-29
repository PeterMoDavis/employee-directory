import React from "react";

function Header() {
  const styles = {
    div: {
      backgroundColor: "salmon",
      paddingBottom: "30px",
      paddingTop: "10px",
      color: "navy",
      borderBottom: "solid 3px turquoise",
    },
  };
  return (
    <div className="Header text-center headerContainer" style={styles.div}>
      <h1 className="h2">Employee Directory</h1>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results
      </p>
    </div>
  );
}

export default Header;
