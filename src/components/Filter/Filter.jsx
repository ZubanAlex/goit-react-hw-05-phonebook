import React from "react";
import T from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          value={value}
          className={styles.input}
          onChange={onChangeFilter}
          placeholder="Search Contact"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default Filter;
