import React from "react";

function SearchInput() {
  const styles = {
    input: {
      width: "200px",
    },
  };

  return (
    <form action="">
      <div className="form-group d-flex justify-content-center bg-light">
        <input
          className="form-control my-3"
          style={styles.input}
          type="text"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchInput;
