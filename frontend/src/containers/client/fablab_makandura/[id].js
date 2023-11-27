import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProjectMakandura from "../../../components/fablabmakandura.component/SingleProjectMakandura";
import { API_URL } from "../../../config/index";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  return (
    <div>
      <SingleProjectMakandura id={id} />
    </div>
  );
};

export default Project;
