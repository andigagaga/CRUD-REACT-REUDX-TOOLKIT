import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function ButtonBackComponent() {
  return (
    <div>
      <Link to={"/"}>
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back
        </Button>
      </Link>
    </div>
  );
}
