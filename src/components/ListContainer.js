import React from "react";
import ListItem from "./ListItem";

const styles = {
  div: {
    borderTop: "solid 1px rgb(223, 227, 235) ",
  },
};
function ListContainer() {
  return (
    <div>
      <table className="table table-hover container">
        <thead>
          <tr className="d-flex justify-content-between border-top border-bottom">
            <th className="border-0" scope="col">
              Image
            </th>
            <th className="border-0" scope="col">
              Name
            </th>
            <th className="border-0" scope="col">
              Phone
            </th>
            <th className="border-0" scope="col">
              Email
            </th>
            <th className="border-0" scope="col">
              DOB
            </th>
          </tr>
        </thead>
        <tbody>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </tbody>
      </table>
    </div>
  );
}

export default ListContainer;
