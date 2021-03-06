import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = () => {
  const {sections} = useSelector(
    createStructuredSelector({ sections: selectDirectorySections })
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
