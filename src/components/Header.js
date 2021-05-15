import React from "react";

function Header() {
  return (
    <div class="input-group m-3 col-8 col-md-6">
      <span class="input-group-text">&#10148;</span>
      <input
        type="text"
        class="form-control"
        placeholder="Search by Tags"
        aria-label="Search"
      />
    </div>
  );
}

export default Header;
